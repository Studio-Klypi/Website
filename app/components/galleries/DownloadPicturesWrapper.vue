<script setup lang="ts">
import { Download } from "@lucide/vue";
import GalleryImageCard from "~/components/galleries/GalleryImageCard.vue";
import type { PictureDownloadItem } from "~/types/entities/private-gallery";
import type { Listed } from "~/types/generic/object";

const store = useGalleryStore();
const { gallery } = storeToRefs(store);

const pictures = computed<Listed<PictureDownloadItem>>(() => {
  if (!gallery.value) return [];

  const list = gallery.value.pictures;
  if (!gallery.value.canDownloadRaws) return list.filter(p => !!p.retouches?.length).map(p => ({ id: p.id, type: "retouch" }));
  return list.map(p => ({ id: p.id, type: p.retouches?.length ? "retouch" : "original" }));
});
</script>

<template>
  <main
    v-if="gallery"
    class="grid gap-4"
  >
    <header class="flex items-center justify-end">
      <UiButton @click="store.downloadZip(pictures)">
        {{ $t("btn.download.all") }}
      </UiButton>
    </header>

    <main class="columns-1 @lg/wrapper:columns-2 @xl/wrapper:columns-3 space-y-4">
      <template
        v-for="picture in gallery.pictures"
        :key="`${gallery.key}-${picture.id}`"
      >
        <UiContextMenu v-if="gallery.canDownloadRaws || picture.retouches?.length">
          <UiContextMenuTrigger as-child>
            <GalleryImageCard
              :gallery
              :picture
              compare
            />
          </UiContextMenuTrigger>

          <UiContextMenuContent>
            <UiContextMenuItem @click="store.downloadPicture(picture, picture.retouches?.length ? 'retouch' : 'original')">
              <Download />
              {{ $t("btn.download.default") }}
            </UiContextMenuItem>
          </UiContextMenuContent>
        </UiContextMenu>
        <GalleryImageCard
          v-else
          :gallery
          :picture
          disabled
        />
      </template>
    </main>
  </main>
</template>
