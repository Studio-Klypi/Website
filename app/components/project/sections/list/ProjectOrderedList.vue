<script setup lang="ts">
import type { Listed } from "~/types/generic/object";
import MarkdownRenderer from "~/components/text-render/MarkdownRenderer.vue";

defineProps<{ items: Listed<string> }>();
</script>

<template>
  <ol class="list-decimal pl-6">
    <li
      v-for="(item, index) in items"
      :key="index"
    >
      <MarkdownRenderer :content="item" />
    </li>
  </ol>
</template>
