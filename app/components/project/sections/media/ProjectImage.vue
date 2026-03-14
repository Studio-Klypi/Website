<script setup lang="ts">
import type { ProjectMediaSection } from "~/types/entities/project";

defineProps<{ section: ProjectMediaSection }>();
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <NuxtImg
      :src="section.content.src"
      :alt="section.content.alt"
      class="block rounded-xl"
    />
    <span
      v-if="section.content.showCaption"
      class="text-xs text-muted-foreground"
    >{{ section.content.alt }}</span>
  </div>
</template>
