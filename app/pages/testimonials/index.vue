<script setup lang="ts">
import Page from "~/components/composing/Page.vue";
import { MessageCircleDashed } from "@lucide/vue";
import TestimonialCard from "~/components/testimonials/TestimonialCard.vue";
import type { Testimonial } from "~/types/entities/testimonial";
import type { Listed } from "~/types/generic/object";
import { rand } from "@vueuse/core";

const PER_PAGE = 20;

const store = useTestimonialStore();
const { testimonials, loading, totalEntities } = storeToRefs(store);

const { page: activePage, defaultPage } = usePagination((p: number) => store.load(p, PER_PAGE));

const entities = computed<Listed<Testimonial>>(() => testimonials.value.slice((activePage.value - 1) * PER_PAGE, activePage.value * PER_PAGE));
const pages = computed<number>(() => Math.ceil(totalEntities.value / PER_PAGE));
</script>

<template>
  <Page
    name="testimonials.home"
    seo-key="testimonials"
    class="px-6 py-32"
    wrapper
    wrapper-class="flex flex-col gap-12"
  >
    <header class="grid gap-1.5">
      <h1 class="text-3xl font-bold">
        {{ $t("testimonials.title") }}
      </h1>
      <p class="text-muted-foreground max-w-[55ch] leading-relaxed whitespace-pre-line">
        {{ $t("testimonials.description") }}
      </p>
    </header>

    <template v-if="loading || entities.length">
      <main class="grid gap-4 grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
        <template v-if="loading">
          <UiSkeleton
            v-for="i in rand(2, 4)"
            :key="i"
            class="h-48 min-w-80"
          />
        </template>
        <template v-if="entities.length">
          <TestimonialCard
            v-for="testimonial in entities"
            :key="testimonial.id"
            :testimonial
          />
        </template>
      </main>
    </template>
    <UiEmpty v-else>
      <UiEmptyMedia variant="icon">
        <MessageCircleDashed />
      </UiEmptyMedia>
      <UiEmptyTitle>
        {{ $t(`testimonials.empty.${activePage > 1 ? "no-for-active-page" : "default"}.title`) }}
      </UiEmptyTitle>
      <UiEmptyDescription>
        {{ $t(`testimonials.empty.${activePage > 1 ? "no-for-active-page" : "default"}.description`) }}
      </UiEmptyDescription>
    </UiEmpty>

    <footer
      v-if="pages > 1"
      class="flex flex-col gap-6"
    >
      <UiPagination
        v-slot="{ page }"
        :items-per-page="PER_PAGE"
        :total="totalEntities"
        :default-page="defaultPage"
        @update:page="(val) => activePage = val"
      >
        <UiPaginationContent v-slot="{ items }">
          <UiPaginationPrevious />
          <template
            v-for="(item, index) in items"
            :key="index"
          >
            <UiPaginationItem
              v-if="item.type === 'page'"
              :value="item.value"
              :is-active="item.value === page"
            >
              {{ item.value }}
            </UiPaginationItem>
          </template>
          <UiPaginationNext />
        </UiPaginationContent>
      </UiPagination>
    </footer>
  </Page>
</template>
