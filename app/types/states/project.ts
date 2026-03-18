import type { Listed } from "~/types/generic/object";
import type { Project } from "~/types/entities/project";

export interface ProjectState {
  projects: Listed<Project>;
  totalEntities: number;
  activePage: number;
  loadElementCount: number;
  loading: {
    list: boolean;
    specimen: boolean;
  };
}

export const defaults: ProjectState = {
  projects: [],
  totalEntities: -1,
  activePage: 1,
  loadElementCount: 20,
  loading: {
    list: false,
    specimen: false,
  },
};
