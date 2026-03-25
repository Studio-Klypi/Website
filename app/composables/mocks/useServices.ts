import type { Listed } from "~/types/generic/object";
import type { Service } from "~/types/entities/service";
import { Aperture, Camera, Clapperboard, Globe, Laptop, Video } from "@lucide/vue";

export function useServices(): Listed<Service> {
  return [
    {
      icon: Globe,
      key: "web-site",
    },
    {
      icon: Laptop,
      key: "web-app",
    },
    {
      icon: Camera,
      key: "event-photo",
    },
    {
      icon: Aperture,
      key: "studio-photo",
    },
    {
      icon: Video,
      key: "event-video",
    },
    {
      icon: Clapperboard,
      key: "shooting-video",
    },
  ];
}
