import type { ComponentProps } from "~/types/generics/ui";
import type { HTMLAttributes } from "vue";

export interface ComposingProps extends ComponentProps {
  name?: string;
}

export type LayoutProps = ComposingProps;
export interface PageProps extends ComposingProps {
  seoKey: string;
  wrapper?: boolean;
  wrapperClass?: HTMLAttributes["class"];
}
