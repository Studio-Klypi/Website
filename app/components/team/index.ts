import type { ComponentProps } from "~/types/generic/ui";

export interface TeamMemberCardProps extends ComponentProps {
  image: string;
  name: string;
  job: string;
  linkedin: string;
  instagram: string;
}
