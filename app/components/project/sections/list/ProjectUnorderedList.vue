<script setup lang="ts">
import type { Listed } from "~/types/generic/object";

defineProps<{ items: Listed<string> }>();
</script>

<template>
  <ul class="list-disc pl-6">
    <li
      v-for="(item, index) in items"
      :key="index"
    >
      {{ item }}
    </li>
  </ul>
</template>
