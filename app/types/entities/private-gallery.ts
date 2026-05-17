import type { Listed, Nullable } from "~/types/generic/object";

export type PictureDownloadType = "original" | "retouch";

export interface PictureDownloadItem {
  id: number;
  type: PictureDownloadType;
}

export enum PrivateGalleryStatus {
  DRAFT = "draft",
  SELECTION = "selection",
  RETOUCHING = "retouching",
  DELIVERED = "delivered",
  CLOSED = "closed",
}

export enum ShootingType {
  STUDIO = "studio",
  OUTSIDE = "outside",
  EVENT = "event",
}
export const ShootingTypes = [
  ShootingType.STUDIO,
  ShootingType.OUTSIDE,
  ShootingType.EVENT,
] as const;

export interface PrivateGalleryRetouch {
  id: number;
  pictureId: number;
  galleryId: number;
  storageKey: string;
  thumbnail: string;
  version: number;
  createdAt: Date;
}

export interface PrivateGalleryPicture {
  id: number;
  galleryId: number;
  order: number;
  selected: boolean;

  size: number;
  filename: string;
  storageKey: string;
  thumbnailKey: string;
  retouchCount: number;

  retouches: Listed<PrivateGalleryRetouch>;

  selectedAt: Nullable<Date>;
  downloadedAt: Nullable<Date>;
  createdAt: Date;
}

export interface PrivateGallery {
  id: number;
  key: string;
  slug: string;
  title: string;
  clientName: string;
  clientEmails: Listed<string>;
  photoQuota: number;
  status: PrivateGalleryStatus;

  shootingDate: Date;
  shootingCity: Nullable<string>;
  shootingType: ShootingType;

  chatEnabled: boolean;
  canDownloadRaws: boolean;

  deliveredAt: Nullable<Date>;
  expiresAt: Nullable<Date>;
  createdAt: Date;
  updatedAt: Date;

  pictures: Listed<PrivateGalleryPicture>;
}
