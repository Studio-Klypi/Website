<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import Page from "~/components/composing/Page.vue";
import ServiceCard from "~/components/services/ServiceCard.vue";
import Wrapper from "~/components/composing/Wrapper.vue";

const services = useServices();
</script>

<template>
  <Page
    name="services.home"
    seo-key="services.home"
    class="flex flex-col *:py-32 *:px-6"
  >
    <section>
      <Wrapper class="flex flex-col gap-12">
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
      </Wrapper>
    </section>

    <section class="bg-accent text-accent-foreground">
      <Wrapper class="flex flex-col gap-1.5 items-center">
        <h2 class="text-2xl font-bold text-center">
          {{ $t("services.home.cta.title") }}
        </h2>

        <p class="whitespace-pre-wrap text-center max-w-[55ch]">
          {{ $t("services.home.cta.description") }}
        </p>

        <UiButton
          class="mt-8"
          size="lg"
          as-child
        >
          <NuxtLinkLocale to="/contact">
            {{ $t("services.home.cta.action") }}
            <ArrowRight />
          </NuxtLinkLocale>
        </UiButton>
      </Wrapper>
    </section>

    <section>
      <Wrapper class="flex flex-col gap-12">
        <FaqSection />
      </Wrapper>
    </section>
  </Page>
</template>
