<script setup lang="ts">
import { Search, X, Folder, ArrowRight } from "lucide-vue-next";
import Page from "~/components/composing/Page.vue";
import Wrapper from "~/components/composing/Wrapper.vue";

const store = useProjectStore();
const { projects, pages, loadElementCount, totalEntities, hasFirstLoaded, loading } = storeToRefs(store);

store.getProjects();

const { search, clear } = useSearch(
  (keywords: string) => {
    store.searchProjects(keywords);
  },
  () => store.getProjects(),
);
</script>

<template>
  <Page
    seo-key="projects.home"
    name="projects.home"
    class="py-16 flex flex-col gap-32"
  >
    <Wrapper class="flex flex-col gap-6">
      <header class="grid gap-1.5">
        <h1 class="text-3xl font-extrabold">
          {{ $t("projects.home.title") }}
        </h1>
        <p class="whitespace-pre-wrap max-w-[55ch] text-pretty text-muted-foreground">
          {{ $t("projects.home.description") }}
        </p>
      </header>

      <main class="flex flex-col gap-4">
        <div class="relative">
          <UiInput
            v-model="search"
            class="px-8"
            :placeholder="$t('labels.search')"
          />
          <Search class="absolute size-4 top-2.5 left-2.5 text-muted-foreground" />
          <UiButton
            v-if="search.length"
            class="absolute size-6 top-1.5 right-1.5 rounded-full"
            size="icon-sm"
            variant="ghost"
            @click="clear"
          >
            <X />
          </UiButton>
        </div>

        <div
          v-if="!hasFirstLoaded && loading.list"
          class="grid grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-4"
        >
          <UiSkeleton
            v-for="i in 4"
            :key="i"
            class="h-80"
          />
        </div>
        <div
          v-else-if="projects.length"
          class="grid grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-4"
        >
          <ProjectCard
            v-for="project in projects"
            :key="project.id"
            :project
          />
        </div>
        <UiEmpty v-else>
          <UiEmptyHeader>
            <UiEmptyMedia variant="icon">
              <Folder />
            </UiEmptyMedia>
            <UiEmptyTitle>
              {{ $t("projects.home.empty.title") }}
            </UiEmptyTitle>
            <UiEmptyDescription>
              {{ $t(`projects.home.empty.${search.trim().length > 3 ? "description-by-search" : "description"}`) }}
            </UiEmptyDescription>
          </UiEmptyHeader>
        </UiEmpty>
      </main>

      <footer
        v-if="pages > 1"
        class="flex flex-col gap-6"
      >
        <UiPagination
          v-slot="{ page }"
          :items-per-page="loadElementCount"
          :total="totalEntities"
          :default-page="1"
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
    </Wrapper>

    <section
      id="cta"
      class="bg-accent text-accent-foreground py-32"
    >
      <Wrapper class="flex flex-col gap-1.5 items-center">
        <h2 class="text-2xl font-bold text-center">
          {{ $t("home.sections.cta.title") }}
        </h2>

        <p class="whitespace-pre-wrap text-center max-w-[55ch]">
          {{ $t("home.sections.cta.description") }}
        </p>

        <UiButton
          class="mt-8"
          size="lg"
          as-child
        >
          <NuxtLinkLocale to="/contact">
            {{ $t("home.sections.cta.action") }}
            <ArrowRight />
          </NuxtLinkLocale>
        </UiButton>
      </Wrapper>
    </section>

    <section id="faq">
      <Wrapper>
        <FaqSection />
      </Wrapper>
    </section>
  </Page>
</template>
