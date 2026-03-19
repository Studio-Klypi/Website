import type { Testimonial } from "~/types/entities/testimonial";
import type { Listed } from "~/types/generic/object";
import type { ApiListResponse } from "~/types/generic/response";

export function useTestimonials() {
  const testimonials = ref<Listed<Testimonial>>([]);

  async function load(offset?: number) {
    const apiUrl = useRuntimeConfig().public.api.url;

    try {
      const { data: response } = await useFetch<ApiListResponse<Testimonial>>(`${apiUrl}/testimonials`, {
        query: {
          page: 1,
          ...(offset ? { offset } : {}),
        },
      });
      if (!response.value) return;
      testimonials.value = response.value.data;
    }
    catch {
      console.error("nope");
    }
  }

  return {
    testimonials,
    load,
  };
}
