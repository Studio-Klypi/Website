import type { TestimonialSendBody } from "~/types/entities/testimonial";
import { toast } from "vue-sonner";

export function useTestimonialForm() {
  const t = useNuxtApp().$i18n.t;
  const apiUrl = useRuntimeConfig().public.api.url;

  const loading = ref<boolean>(false);

  const send = async (values: TestimonialSendBody) => {
    loading.value = true;

    try {
      await $fetch(`${apiUrl}/testimonials`, {
        method: "POST",
        body: {
          ...values,
          avatar: null,
        },
      });
      toast.success(t("toasts.testimonial-sent.title"), {
        description: t("toasts.testimonial-sent.description"),
      });
    }
    catch {
      toast.error(t("toasts.error.default.title"), {
        description: t("toasts.error.default.description"),
      });
    }
    finally {
      loading.value = false;
    }
  };

  return {
    loading,
    send,
  };
}
