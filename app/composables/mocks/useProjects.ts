import type { Project } from "~/types/entities/project";
import type { Listed } from "~/types/generic/object";
import type { ApiListResponse } from "~/types/generic/response";

export function useProjects() {
  const projects = ref<Listed<Project>>([]);
  const apiUrl = useRuntimeConfig().public.api.url;

  async function load() {
    try {
      const { data: response } = await useFetch<ApiListResponse<Project>>(`${apiUrl}/projects`, {
        query: {
          page: 1,
          offset: 4,
        },
      });
      if (!response.value) return;
      projects.value = response.value.data;
    }
    catch { console.error("nope"); }
  }

  return { projects, load };
}
