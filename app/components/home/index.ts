import type { LucideIcon } from "lucide-vue-next";
import type { ComponentProps } from "~/types/generic/ui";

export interface WhyCardProps extends ComponentProps {
  icon: LucideIcon;
  title: string;
  description: string;
}
