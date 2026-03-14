import type { Listed } from "~/types/generic/object";
import type { Project } from "~/types/entities/project";

export interface ProjectState {
  projects: Listed<Project>;
  totalEntities: number;
  loading: {
    list: boolean;
    specimen: boolean;
  };
}

export const defaults: ProjectState = {
  projects: [],
  totalEntities: -1,
  loading: {
    list: false,
    specimen: false,
  },
};
