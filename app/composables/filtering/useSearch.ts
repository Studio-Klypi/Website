import { useDebounceFn } from "@vueuse/core";

export function useSearch(cb: (keywords: string) => void, fallback: () => void) {
  const search = ref<string>("");
  const debouncedCb = useDebounceFn((val: string) => cb(val), 300);
  watch(search, (val) => {
    if (val.length === 0) return fallback();
    if (val.trim().length < 3) return;
    debouncedCb(val);
  });

  function clear() {
    search.value = "";
  }

  return { search, clear };
}
