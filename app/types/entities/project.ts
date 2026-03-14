import type { Listed, Nullable } from "~/types/generic/object";

export enum ProjectSectionType {
  PARAGRAPH = "paragraph",
  IMAGE = "image",
  VIDEO = "video",
  LIST = "list",
  ACCORDION = "accordion",
  CAROUSEL = "carousel",
  GALLERY = "gallery",
  SEPARATOR = "separator",
}
export interface ProjectSection {
  key: string;
  type: ProjectSectionType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content?: any;
}

export interface ProjectParagraphSection extends ProjectSection {
  type: ProjectSectionType.PARAGRAPH;
  content: {
    title: Nullable<string>;
    text: string;
    link: Nullable<{
      label: string;
      url: string;
    }>;
  };
}
export interface ProjectMediaSection extends ProjectSection {
  type: ProjectSectionType.IMAGE | ProjectSectionType.VIDEO;
  content: {
    alt: Nullable<string>;
    src: string;
    showCaption: boolean;
  };
}
export interface ProjectListSection extends ProjectSection {
  type: ProjectSectionType.LIST;
  content: {
    type: "ordered" | "unordered";
    title: Nullable<string>;
    items: Listed<string>;
  };
}
export interface ProjectAccordionSection extends ProjectSection {
  type: ProjectSectionType.ACCORDION;
  content: {
    title: Nullable<string>;
    items: Listed<{
      title: string;
      content: string;
    }>;
  };
}
export interface ProjectCarouselSection extends ProjectSection {
  type: ProjectSectionType.CAROUSEL;
  content: {
    items: Listed<{
      title: Nullable<string>;
      description: Nullable<string>;
      image: Nullable<string>;
    }>;
  };
}
export interface ProjectGallerySection extends ProjectSection {
  type: ProjectSectionType.GALLERY;
  content: {
    items: Listed<{
      name: string;
      src: string;
      alt: Nullable<string>;
    }>;
  };
}

export enum ProjectStatus {
  DRAFT = "draft",
  PUBLISHED = "published",
  ARCHIVED = "archived",
}
export enum ProjectVisibility {
  PUBLIC = "public",
  PRIVATE = "private",
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  banner: Nullable<string>;
  sections: ProjectSection[];
  status: ProjectStatus;
  visibility: ProjectVisibility;
  createdAt: Date;
  updatedAt: Date;
  archivedAt: Nullable<Date>;
}
