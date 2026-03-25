export default defineNuxtRouteMiddleware(() => {
  const store = useTestimonialStore();

  if (store.hasFirstLoaded) return;
  void store.load();
});
