<script setup lang="ts">
import type { ProjectAccordionSection } from "~/types/entities/project";

defineProps<{ section: ProjectAccordionSection }>();
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <h2
      v-if="section.content.title"
      class="text-2xl font-bold"
    >
      {{ section.content.title }}
    </h2>
    <UiAccordion>
      <UiAccordionItem
        v-for="(item, index) in section.content.items"
        :key="index"
        :value="index.toString()"
      >
        <UiAccordionTrigger>{{ item.title }}</UiAccordionTrigger>
        <UiAccordionContent class="text-pretty whitespace-pre-line">
          {{ item.content }}
        </UiAccordionContent>
      </UiAccordionItem>
    </UiAccordion>
  </div>
</template>
