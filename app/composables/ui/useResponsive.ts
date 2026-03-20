import { useMediaQuery } from "@vueuse/core";

export function useResponsive() {
  const isMobile = useMediaQuery("(max-width: 720px)");

  return { isMobile };
}
