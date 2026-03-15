import type { Theme } from "~/types/generic/ui";
import { useMediaQuery } from "@vueuse/core";

export function useTheme(): ComputedRef<Theme> {
  const preference = useColorMode().preference;

  return computed((): Theme => {
    switch (preference) {
      case "system": return useMediaQuery("(prefers-color-scheme: dark)").value ? "dark" : "light";
      default: return preference as Theme;
    }
  });
}
