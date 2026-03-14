<script setup lang="ts">
import type { ProjectParagraphSection } from "~/types/entities/project";
import MarkdownRenderer from "~/components/text-render/MarkdownRenderer.vue";

defineProps<{ section: ProjectParagraphSection }>();
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <h2
      v-if="section.content.title"
      class="text-2xl font-bold"
    >
      {{ section.content.title }}
    </h2>
    <MarkdownRenderer :content="section.content.text" />
  </div>
</template>
