<script setup lang="ts">
const props = defineProps({
  throttle: {
    type: Number,
    default: 200,
  },
  duration: {
    type: Number,
    default: 2000,
  },
  hideDelay: {
    type: Number,
    default: 500,
  },
  resetDelay: {
    type: Number,
    default: 400,
  },
  height: {
    type: Number,
    default: 3,
  },
  color: {
    type: [String, Boolean],
    default: "repeating-linear-gradient(to right,transparent 0%,color-mix(in srgb, var(--color-primary), transparent 60%) 50%,var(--color-primary) 100%)",
  },
  errorColor: {
    type: String,
    default: "repeating-linear-gradient(to right,var(--color-destructive) 0%,var(--color-destructive) 100%)",
  },
  estimatedProgress: {
    type: Function as unknown as () => (duration: number, elapsed: number) => number,
    required: false,
  },
});

const { progress, isLoading, error, start, finish, clear } = useLoaderIndicator({
  duration: props.duration,
  throttle: props.throttle,
  hideDelay: props.hideDelay,
  resetDelay: props.resetDelay,
  estimatedProgress: props.estimatedProgress,
});
defineExpose({ progress, isLoading, error, start, finish, clear });
</script>

<template>
  <div
    class="fixed top-0 inset-x-0 pointer-events-none w-auto z-9999 transition-[transform_0.1s,height_0.4s,opacity_0.4s] origin-left opacity-0"
    :class="{ 'opacity-100': isLoading }"
    :style="`height: ${props.height}px; transform: scaleX(${progress}%); background: ${error ? props.errorColor : props.color || undefined}; background-size: ${progress > 0 ? (100 / progress) * 100 : 0}% auto`"
  >
    <slot />
  </div>
</template>
