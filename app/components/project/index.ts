import type { ComponentProps } from "~/types/generic/ui";
import type { ProjectSection } from "~/types/entities/project";

export interface ProjectSectionProps extends ComponentProps {
  section: ProjectSection;
}
