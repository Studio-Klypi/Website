import type { PrivateGallery, PrivateGalleryPicture } from "~/types/entities/private-gallery";
import type { ComponentProps } from "~/types/generic/ui";

export interface GalleryImageCardProps extends ComponentProps {
  gallery: PrivateGallery;
  picture: PrivateGalleryPicture;
  selected?: boolean;
  disabled?: boolean;
  compare?: boolean;
}

export interface GalleryWrapperProps {
  gallery: PrivateGallery;
}
