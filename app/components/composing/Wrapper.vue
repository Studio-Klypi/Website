<script setup lang="ts">
import { cn } from "~/lib/utils";
import type { ComponentProps } from "~/types/generic/ui";

const props = defineProps<ComponentProps>();
</script>

<template>
  <div :class="cn('@container/wrapper w-full max-w-4xl mx-auto', props.class)">
    <slot />
  </div>
</template>
