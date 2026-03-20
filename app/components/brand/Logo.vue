<script setup lang="ts">
import type { ComponentProps } from "~/types/generic/ui";
import { cn } from "~/lib/utils";

const props = defineProps<ComponentProps>();
</script>

<template>
  <svg
    viewBox="0 0 1024 1024"
    fill="none"
    :class="cn('size-8', props.class)"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M540.151 337.243H212.242L306.846 225H636.359L540.151 337.243Z"
      class="fill-foreground"
    />
    <path
      d="M480.021 460.71L680.454 225.802H830.379L632.35 460.71L811.939 668.359H656.402L480.021 460.71Z"
      class="fill-foreground"
    />
    <path
      d="M492.047 677.178L390.227 797.438H710.119L811.137 677.178H492.047Z"
      class="fill-foreground"
    />
    <path
      d="M394.235 560.927L193 798.24H341.321L545.763 560.927L364.571 348.467H212.242L394.235 560.927Z"
      fill="url(#paint0_linear_1_132)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1_132"
        x1="545.763"
        y1="348.467"
        x2="193"
        y2="799.042"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset="0"
          stop-color="currentColor"
          class="text-primary"
        />
        <stop
          offset="1"
          stop-color="currentColor"
          class="primary-dark"
        />
      </linearGradient>
    </defs>
  </svg>
</template>

<style lang="scss">
.primary-dark {
  @apply text-[color-mix(in_srgb,var(--color-primary),black_30%)];
}
</style>
