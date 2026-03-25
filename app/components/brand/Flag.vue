<script setup lang="ts">
import type { FlagProps } from "~/components/brand/index";
import { cn } from "~/lib/utils";

const props = defineProps<FlagProps>();
</script>

<template>
  <span :class="cn(`fi fi-${props.code} rounded-xs`, props.class)" />
</template>
