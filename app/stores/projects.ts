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
    pages: state => state.totalEntities < 1 ? 0 : Math.ceil(state.totalEntities / state.loadElementCount),
  },
  actions: {
    async getProjects(page: number = 1) {
      this.loading.list = true;

      try {
        const response = await $fetch<ApiListResponse<Project>>(`${this.apiUrl}/projects`, {
          query: {
            page,
            offset: this.loadElementCount,
          },
        });
        this.projects = response.data;
        this.activePage = page;
        this.totalEntities = response.meta.total;
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

    async searchProjects(keywords: string) {
      try {
        const response = await $fetch<ApiListResponse<Project>>(`${this.apiUrl}/projects`, {
          query: {
            search: keywords,
          },
        });
        this.projects = response.data;
        this.totalEntities = response.meta.total;
      }
      catch {
        console.error("nope");
      }
    },
  },
});
