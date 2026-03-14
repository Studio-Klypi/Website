<script setup lang="ts">
import type { Project } from "~/types/entities/project";
import Page from "~/components/composing/Page.vue";
import ProjectSection from "~/components/project/ProjectSection.vue";
import { formatDate } from "date-fns";
import * as locales from "date-fns/locale";

const { locale } = useI18n();
const store = useProjectStore();

const route = useRoute();
const { slug } = route.params;

const project = ref<Project>(await store.getProject(slug as string));
</script>

<template>
  <Page
    :seo-data="{
      title: project.title,
      description: project.description,
      author: 'Studio Klypi',
    }"
    :name="`project.${project.slug}`"
    class="p-4 w-full"
    wrapper
    wrapper-class="w-full max-w-4xl mx-auto flex flex-col gap-4 *:px-6"
  >
    <header class="px-0! flex flex-col gap-4">
      <NuxtImg
        v-if="project.banner"
        :src="project.banner"
        class="aspect-8/3 object-cover object-center rounded-xl"
      />

      <div class="px-6 grid gap-1.5">
        <h1 class="text-4xl font-bold">
          {{ project.title }}
        </h1>
        <p class="text-muted-foreground">
          {{ project.description }}
        </p>
      </div>
    </header>

    <main class="flex flex-col gap-8">
      <ProjectSection
        v-for="section in project.sections"
        :key="section.key"
        :section="section"
      />
    </main>

    <footer class="flex items-center justify-end">
      <span class="text-sm text-muted-foreground italic">{{ $t("labels.dates.updated-at", 1, { named: { date: formatDate(project.updatedAt, $t("labels.dates.formats.medium"), { locale: locales[locale] }) } }) }}</span>
    </footer>
  </Page>
</template>
