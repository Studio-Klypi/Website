<script setup lang="ts">
import type { Project } from "~/types/entities/project";

defineProps<{ project: Project }>();
</script>

<template>
  <UiCard class="relative pt-2 gap-4 hover:scale-103 hover:border-primary transition-all duration-100">
    <div class="px-2">
      <NuxtImg
        :src="project.banner || 'https://picsum.photos/1920/1080?random'"
        class="w-full aspect-video object-cover rounded-sm"
        :placeholder="[50, 50, 25, 75]"
      />
    </div>

    <UiCardHeader>
      <UiCardTitle>{{ project.title }}</UiCardTitle>
      <UiCardDescription class="line-clamp-3">
        {{ project.description }}
      </UiCardDescription>
    </UiCardHeader>

    <NuxtLinkLocale
      :to="`/projects/${project.id}-${project.slug}`"
      class="absolute inset-0 rounded-lg"
    />
  </UiCard>
</template>
