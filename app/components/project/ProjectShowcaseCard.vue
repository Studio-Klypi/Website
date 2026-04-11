<script setup lang="ts">
import type { Project } from "~/types/entities/project";

defineProps<{ project: Project }>();

const apiUrl = useRuntimeConfig().public.api.url;
</script>

<template>
  <UiCard>
    <div class="px-6">
      <NuxtImg
        class="aspect-4/3 @lg:aspect-2/1 rounded-sm"
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
  </UiCard>
</template>
