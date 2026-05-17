import type { PrivateGallery } from "~/types/entities/private-gallery";
import type { Nullable } from "~/types/generic/object";

export interface GalleryState {
  gallery: Nullable<PrivateGallery>;
  loading: {
    item: boolean;
    selecting: boolean;
    downloading: boolean;
  };
}

export const defaults: GalleryState = {
  gallery: null,
  loading: {
    item: false,
    selecting: false,
    downloading: false,
  },
};
