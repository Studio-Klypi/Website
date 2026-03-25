import type { Testimonial } from "~/types/entities/testimonial";
import type { Listed } from "~/types/generic/object";

export interface TestimonialState {
  testimonials: Listed<Testimonial>;
  totalEntities: number;
  loading: boolean;
}

export const defaults: TestimonialState = {
  testimonials: [],
  totalEntities: -1,
  loading: false,
};
