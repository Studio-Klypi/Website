import type { HTMLAttributes } from "vue";

export interface ComponentProps {
  class?: HTMLAttributes["class"];
}

export type Theme = "light" | "dark" | "system";
