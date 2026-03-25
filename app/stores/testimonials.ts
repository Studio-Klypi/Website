import { defaults, type TestimonialState } from "~/types/states/testimonial";
import type { ApiListResponse } from "~/types/generic/response";
import type { Testimonial, TestimonialSendBody } from "~/types/entities/testimonial";
import type { Listed } from "~/types/generic/object";
import { toast } from "vue-sonner";

export const useTestimonialStore = defineStore("testimonials", {
  state: (): TestimonialState => ({
    ...defaults,
  }),
  getters: {
    apiUrl: () => useRuntimeConfig().public.api.url,
    translate: () => useNuxtApp().$i18n.t,
    recent: state => state.testimonials.slice(0, 3),

    hasFirstLoaded: state => state.totalEntities >= 0,
  },
  actions: {
    async load(page: number = 1, offset: number = 20) {
      this.loading = true;

      try {
        const response = await $fetch<ApiListResponse<Testimonial>>(`${this.apiUrl}/testimonials`, {
          query: {
            page,
            offset,
          },
        });
        if (!response) return;

        this.incrementalStore(response.data);
        this.totalEntities = response.meta.total;
      }
      catch {
        console.error("nope");
      }
      finally {
        this.loading = false;
      }
    },
    async send(values: TestimonialSendBody) {
      this.loading = true;

      try {
        await $fetch(`${this.apiUrl}/testimonials`, {
          method: "POST",
          body: {
            ...values,
            avatar: null,
          },
        });
        toast.success(this.translate("toasts.testimonial-sent.title"), {
          description: this.translate("toasts.testimonial-sent.description"),
        });
      }
      catch {
        toast.error(this.translate("toasts.error.default.title"), {
          description: this.translate("toasts.error.default.description"),
        });
      }
      finally {
        this.loading = false;
      }
    },

    incrementalStore(data: Listed<Testimonial>) {
      const dontExist = (id: number) => !this.testimonials.find(t => t.id === id);

      const shouldAppend = data.filter(t => dontExist(t.id));
      this.testimonials = [...this.testimonials, ...shouldAppend];
    },
  },
});
