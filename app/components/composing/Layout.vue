<script setup lang="ts">
import type { LayoutProps } from "~/components/composing/index";
import { cn } from "~/lib/utils";

const props = withDefaults(defineProps<LayoutProps>(), {
  name: "default",
});
</script>

<template>
  <div
    :data-layout-name="props.name"
    :class="cn('', props.class)"
  >
    <slot />
  </div>
</template>
