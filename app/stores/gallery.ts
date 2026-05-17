import { defaults, type GalleryState } from "~/types/states/gallery";
import { toast } from "vue-sonner";
import type {
  PictureDownloadItem,
  PrivateGallery,
  PrivateGalleryPicture,
} from "~/types/entities/private-gallery";
import type { Listed } from "~/types/generic/object";

export const useGalleryStore = defineStore("gallery", {
  state: (): GalleryState => ({ ...defaults }),
  getters: {
    translate: () => useNuxtApp().$i18n.t,
    apiUrl: () => useRuntimeConfig().public.api.url,
  },
  actions: {
    async load(slug: string, key: string) {
      this.loading.item = true;

      try {
        this.gallery = await $fetch<PrivateGallery>(`${this.apiUrl}/private-galleries/${slug}?key=${key}`);
      }
      catch {
        if (import.meta.client)
          toast.error(this.translate("toasts.error.default.title"), {
            description: this.translate("toasts.error.default.description"),
          });
      }
      finally {
        this.loading.item = false;
      }
    },

    async selectPictures(ids: Listed<number>) {
      if (!this.gallery) return;

      this.loading.selecting = true;
      const total = ids.length >= this.gallery.photoQuota;

      try {
        this.gallery = await $fetch<PrivateGallery>(`${this.apiUrl}/private-galleries/${this.gallery.id}-${this.gallery.slug}/pictures/select?key=${this.gallery.key}`, {
          method: "PATCH",
          body: {
            ids,
          },
        });

        toast.success(this.translate(`toasts.gallery.selection.${total ? "total" : "partial"}.title`), {
          description: this.translate(`toasts.gallery.selection.${total ? "total" : "partial"}.description`, {
            selected: ids.length,
            total: this.gallery.photoQuota,
          }),
        });
      }
      catch {
        toast.error(this.translate("toasts.error.default.title"), {
          description: this.translate("toasts.error.default.description"),
        });
      }
      finally {
        this.loading.selecting = false;
      }
    },

    async downloadPicture(picture: PrivateGalleryPicture, type: PictureDownloadItem["type"]) {
      if (!this.gallery) return;

      const download = (blob: Blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = picture.filename;
        a.click();
        URL.revokeObjectURL(url);
      };

      const fetchAndDownload = (url: string) => {
        const id = toast.loading(this.translate("toasts.gallery.download.picture.loading.title"), {
          description: this.translate("toasts.gallery.download.picture.loading.description"),
        });
        $fetch<Blob>(url).then((blob) => {
          download(blob);
          toast.success(this.translate("toasts.gallery.download.picture.success.title"), {
            id,
            description: this.translate("toasts.gallery.download.picture.success.description"),
          });
        }).catch(() => {
          toast.error(this.translate("toasts.gallery.download.picture.error.title"), {
            id,
            description: this.translate("toasts.gallery.download.picture.error.description"),
          });
        });
      };

      switch (type) {
        case "original": {
          if (!this.gallery.canDownloadRaws) {
            toast.error(this.translate("toasts.gallery.download.error.forbidden.title"), {
              description: this.translate("toasts.gallery.download.error.forbidden.description"),
            });
            return;
          }
          fetchAndDownload(`${this.apiUrl}/private-galleries/${this.gallery.id}-${this.gallery.slug}/pictures/${picture.id}/download?key=${this.gallery.key}`);
          return;
        }
        case "retouch": {
          if (!picture.retouches?.length) {
            toast.error(this.translate("toasts.gallery.download.error.no-retouch.title"), {
              description: this.translate("toasts.gallery.download.error.no-retouch.description"),
            });
            return;
          }
          fetchAndDownload(`${this.apiUrl}/private-galleries/${this.gallery.id}-${this.gallery.slug}/pictures/${picture.id}/retouches/${picture.retouches[0]!.id}/download?key=${this.gallery.key}`);
          return;
        }
        default: {
          toast.error(this.translate("toasts.error.default.title"), {
            description: this.translate("toasts.error.default.description"),
          });
          break;
        }
      }
    },
    async downloadZip(pictures: Listed<PictureDownloadItem>) {
      if (!this.gallery) return;

      this.loading.downloading = true;

      const fetchAndDownload = (url: string) => {
        const id = toast.loading(this.translate("toasts.gallery.download.zip.loading.title"), {
          description: this.translate("toasts.gallery.download.zip.loading.description"),
        });
        $fetch<Blob>(url, {
          method: "POST",
          body: { pictures },
          responseType: "blob",
        }).then((blob) => {
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "photos.zip";
          a.click();
          URL.revokeObjectURL(url);

          toast.success(this.translate("toasts.gallery.download.zip.success.title"), {
            id,
            description: this.translate("toasts.gallery.download.zip.success.description"),
          });
        }).catch((error: any) => {
          const status = error?.response?.status;

          if (status === 403) {
            toast.error(this.translate("toasts.gallery.download.error.forbidden.title"), {
              id,
              description: this.translate("toasts.gallery.download.error.forbidden.description"),
            });
          }
          else if (status === 404) {
            toast.error(this.translate("toasts.gallery.download.error.not-found.title"), {
              id,
              description: this.translate("toasts.gallery.download.error.not-found.description"),
            });
          }
          else if (status === 400) {
            toast.error(this.translate("toasts.gallery.download.error.no-retouch.title"), {
              id,
              description: this.translate("toasts.gallery.download.error.no-retouch.description"),
            });
          }
          else {
            toast.error(this.translate("toasts.gallery.download.zip.error.title"), {
              id,
              description: this.translate("toasts.gallery.download.zip.error.description"),
            });
          }
        }).finally(() => {
          this.loading.downloading = false;
        });
      };

      fetchAndDownload(`${this.apiUrl}/private-galleries/${this.gallery.id}-${this.gallery.slug}/pictures/download-zip?key=${this.gallery.key}`);
    },
  },
});
