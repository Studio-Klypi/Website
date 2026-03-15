import type { ContactSendBody } from "~/types/entities/contact";
import { toast } from "vue-sonner";

export function useContactForm() {
  const apiUrl = useRuntimeConfig().public.api.url;
  const t = useNuxtApp().$i18n.t;

  const loading = ref<boolean>(false);

  const send = async (values: ContactSendBody) => {
    loading.value = true;

    try {
      await $fetch(`${apiUrl}/contact/messages`, {
        method: "POST",
        body: values,
      });

      toast.success(t("toasts.message-sent.title"), {
        description: t("toasts.message-sent.description"),
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
