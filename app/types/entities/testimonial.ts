import type { Nullable } from "~/types/generic/object";

export const TESTIMONIAL_ROLE_MAX_LENGTH = 80;
export const TESTIMONIAL_MESSAGE_MAX_LENGTH = 800;

export interface TestimonialSendBody {
  firstName: string;
  lastName: string;
  email: string;
  role: Nullable<string>;
  text: string;
}

export interface Testimonial {
  id: number;
  firstName: string;
  lastName: string;
  text: string;
  avatar: Nullable<string>;
  role: Nullable<string>;
  createdAt: Date;
}
