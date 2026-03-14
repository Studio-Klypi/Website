import { type ProjectState, defaults } from "~/types/states/project";
import type { ApiListResponse } from "~/types/generic/response";
import type { Project } from "~/types/entities/project";

export const useProjectStore = defineStore("project", {
  state: (): ProjectState => ({
    ...defaults,
  }),
  getters: {
    apiUrl: () => useRuntimeConfig().public.api.url,
    hasFirstLoaded: state => state.totalEntities >= 0,
  },
  actions: {
    async getProjects() {
      this.loading.list = true;

      try {
        const response = await $fetch<ApiListResponse<Project>>(`${this.apiUrl}/projects`);
        this.projects = response.data;
      }
      catch (e) {
        console.error(e);
      }
      finally {
        this.loading.list = false;
      }
    },
    async getProject(slug: string) {
      this.loading.specimen = true;

      try {
        return await $fetch<Project>(`${this.apiUrl}/projects/${slug}`);
      }
      catch (e) {
        console.error(e);
        throw createError({
          status: 404,
          statusText: "Not Found",
        });
      }
      finally {
        this.loading.specimen = false;
      }
    },
  },
});
