<script setup lang="ts">
import type { Project } from "~/types/entities/project";

defineProps<{ project: Project }>();

const apiUrl = useRuntimeConfig().public.api.url;
</script>

<template>
  <UiCard class="relative overflow-hidden">
    <div class="w-full px-6">
      <NuxtImg
        class="w-full aspect-4/3 @lg:aspect-2/1 rounded-sm object-cover"
        :src="`${apiUrl}/projects/${project.id}/banner`"
      />
    </div>
    <UiCardHeader class="grid @2xl/page:grid-cols-2">
      <UiCardTitle class="truncate">
        {{ project.title }}
      </UiCardTitle>
      <UiCardDescription class="line-clamp-2">
        {{ project.description }}
      </UiCardDescription>
    </UiCardHeader>

    <NuxtLinkLocale
      :to="`/projects/${project.id}-${project.slug}`"
      class="absolute inset-0"
    />
  </UiCard>
</template>
