<script setup lang="ts">
import type { WhyCardProps } from "~/components/home/index";
import { cn } from "~/lib/utils";

const props = defineProps<WhyCardProps>();
</script>

<template>
  <UiCard :class="cn('min-w-64 bg-card/20', props.class)">
    <UiCardHeader class="flex flex-col">
      <component :is="icon" />
      <UiCardTitle>{{ title }}</UiCardTitle>
      <UiCardDescription>{{ description }}</UiCardDescription>
    </UiCardHeader>
  </UiCard>
</template>
