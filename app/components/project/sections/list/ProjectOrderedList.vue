<script setup lang="ts">
import type { Listed } from "~/types/generic/object";

defineProps<{ items: Listed<string> }>();
</script>

<template>
  <ol class="list-decimal pl-6">
    <li
      v-for="(item, index) in items"
      :key="index"
    >
      {{ item }}
    </li>
  </ol>
</template>
