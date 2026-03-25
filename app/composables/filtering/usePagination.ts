export function usePagination(cb: (page: number) => Promise<void> | void) {
  const route = useRoute();
  const query = route.query;

  const defaultPage = Number(query.page ?? 1);

  const page = ref<number>(defaultPage);
  watch(page, (val) => {
    if (!val) return;
    navigateTo({
      query: {
        page: val,
      },
      replace: true,
    });
    cb(val);
  });

  return { defaultPage, page };
}
