<script setup lang="ts">
import type { ProjectCarouselSection } from "~/types/entities/project";

defineProps<{ section: ProjectCarouselSection }>();
</script>

<template>
  <UiCarousel class="flex flex-col gap-2">
    <UiCarouselContent class="items-center">
      <UiCarouselItem
        v-for="(item, index) in section.content.items"
        :key="index"
        class="flex flex-col gap-1.5"
      >
        <NuxtImg
          v-if="item.image"
          :src="item.image"
          class="block w-full rounded-xl"
        />
        <h3
          v-if="item.title"
          class="text-lg text-semibold"
        >
          {{ item.title }}
        </h3>
        <p
          v-if="item.description"
          class="text-sm text-muted-foreground"
        >
          {{ item.description }}
        </p>
      </UiCarouselItem>
    </UiCarouselContent>
    <div class="flex items-center justify-center gap-2">
      <UiCarouselPrevious class="relative translate-none inset-[inherit]" />
      <UiCarouselNext class="relative translate-none inset-[inherit]" />
    </div>
  </UiCarousel>
</template>
