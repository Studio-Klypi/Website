<script setup lang="ts">
import type { ProjectMediaSection } from "~/types/entities/project";

defineProps<{ section: ProjectMediaSection }>();
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <iframe
      class="aspect-video rounded-xl overflow-hidden w-full"
      :src="`${section.content.src}&rel=0&playsinline=0`"
      :title="section.content.alt ?? 'Youtube Video Player'"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    />
    <span
      class="text-xs text-muted-foreground"
      :class="{ 'sr-only': !section.content.showCaption }"
    >{{ section.content.alt }}</span>
  </div>
</template>
