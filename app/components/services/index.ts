import type { ComponentProps } from "~/types/generic/ui";
import type { LucideIcon } from "@lucide/vue";

export interface ServiceCardProps extends ComponentProps {
  icon: LucideIcon;
  title: string;
  description: string;
  path?: string;
}
