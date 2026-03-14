import type { ComponentProps } from "~/types/generic/ui";
import type { HTMLAttributes } from "vue";

export interface ComposingProps extends ComponentProps {
  name?: string;
}

export type LayoutProps = ComposingProps;
export interface PageProps extends ComposingProps {
  seoKey?: string;
  seoData?: {
    title: string;
    description: string;
    author: string;
  };
  wrapper?: boolean;
  wrapperClass?: HTMLAttributes["class"];
}
