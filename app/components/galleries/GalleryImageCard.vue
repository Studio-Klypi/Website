<script setup lang="ts">
import type { GalleryImageCardProps } from "~/components/galleries/index";
import { cn } from "~/lib/utils";
import { Star } from "@lucide/vue";

const props = withDefaults(defineProps<GalleryImageCardProps>(), {
  selected: false,
  disabled: false,
  compare: false,
});

const { public: { api } } = useRuntimeConfig();
</script>

<template>
  <div class="relative isolate break-inside-avoid">
    <UiCard :class="cn('relative isolate py-0 overflow-hidden transition-all duration-100', disabled && 'pointer-events-none opacity-50', props.class)">
      <UiCompare
        v-if="compare && picture.retouches?.length"
        :first-image="`${api.url}/private-galleries/${gallery.id}-${gallery.slug}/pictures/${picture.id}/retouches/${picture.retouches[0]!.id}?key=${gallery.key}`"
        :second-image="`${api.url}/private-galleries/${gallery.id}-${gallery.slug}/pictures/${picture.id}?key=${gallery.key}`"
        slide-mode="hover"
        :initial-slider-percentage="100"
        class="z-1 size-full absolute! inset-0"
      />
      <NuxtImg
        :src="`${api.url}/private-galleries/${gallery.id}-${gallery.slug}/pictures/${picture.id}?key=${gallery.key}`"
        class="pointer-events-none transition-all duration-100"
        :class="{ 'grayscale-100': disabled, 'invisible': compare && picture.retouches?.length }"
      />
    </UiCard>

    <Star
      v-if="(gallery.status !== 'selection' && picture.selected) || props.selected"
      class="fill-primary stroke-primary absolute z-10 top-2.5 right-2.5"
    />
  </div>
</template>
