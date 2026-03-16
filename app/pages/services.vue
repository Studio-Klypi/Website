<script setup lang="ts">
import { Globe, Laptop, Camera, Aperture, Video, Clapperboard } from "lucide-vue-next";
import Page from "~/components/composing/Page.vue";
import ServiceCard from "~/components/services/ServiceCard.vue";

const services = [
  {
    icon: Globe,
    key: "web-site",
  },
  {
    icon: Laptop,
    key: "web-app",
  },
  {
    icon: Camera,
    key: "event-photo",
  },
  {
    icon: Aperture,
    key: "studio-photo",
  },
  {
    icon: Video,
    key: "event-video",
  },
  {
    icon: Clapperboard,
    key: "shooting-video",
  },
];
</script>

<template>
  <Page
    name="services.home"
    seo-key="services.home"
    class="px-6"
    wrapper
    wrapper-class="flex flex-col w-full max-w-4xl mx-auto"
  >
    <section class="py-24 flex flex-col gap-12">
      <header class="grid gap-1.5">
        <h1 class="text-5xl font-bold">
          {{ $t("services.home.title") }}
        </h1>
        <p class="text-muted-foreground max-w-[60ch]">
          {{ $t("services.home.seo.description") }}
        </p>
      </header>

      <main class="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-4">
        <ServiceCard
          v-for="({ icon, key }) in services"
          :key="key"
          :icon="icon"
          :title="$t(`services.home.services.${key}.title`)"
          :description="$t(`services.home.services.${key}.description`)"
          :path="`/services/${key}`"
        />
      </main>
    </section>

    <UiSeparator />

    <section class="flex flex-col gap-12 py-24">
      <FaqSection />
    </section>
  </Page>
</template>
