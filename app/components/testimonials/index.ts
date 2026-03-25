import type { ComponentProps } from "~/types/generic/ui";
import type { Testimonial } from "~/types/entities/testimonial";

export interface TestimonialCardProps extends ComponentProps {
  testimonial: Testimonial;
}
