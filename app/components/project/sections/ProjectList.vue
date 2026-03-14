<script setup lang="ts">
import type { ProjectListSection } from "~/types/entities/project";
import ProjectUnorderedList from "~/components/project/sections/list/ProjectUnorderedList.vue";
import ProjectOrderedList from "~/components/project/sections/list/ProjectOrderedList.vue";

defineProps<{ section: ProjectListSection }>();
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <h2 v-if="section.content.title">
      {{ section.content.title }}
    </h2>
    <ProjectUnorderedList
      v-if="section.content.type === 'unordered'"
      :items="section.content.items"
    />
    <ProjectOrderedList
      v-else-if="section.content.type === 'ordered'"
      :items="section.content.items"
    />
  </div>
</template>
