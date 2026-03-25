<script setup lang="ts">
import { X } from "@lucide/vue";
import type { ProjectGallerySection } from "~/types/entities/project";

defineProps<{ section: ProjectGallerySection }>();
</script>

<template>
  <div class="columns-1 gap-4 sm:columns-2 lg:columns-3">
    <UiDialog
      v-for="item in section.content.items"
      :key="item.name"
    >
      <UiDialogTrigger as-child>
        <figure class="mb-4 break-inside-avoid">
          <NuxtImg
            :src="item.src"
            :alt="item.alt ?? item.name"
            class="w-full rounded-xl"
          />
          <figcaption class="mt-1.5 text-xs text-muted-foreground">
            {{ item.name }}
          </figcaption>
        </figure>
      </UiDialogTrigger>
      <UiDialogContent
        :show-close-button="false"
        class="border-none w-min h-min max-w-[calc(100dvw-3rem)]! max-h-[calc(100dvh-3rem)]! flex items-center justify-center overflow-hidden p-0!"
      >
        <NuxtImg
          :src="item.src"
          :alt="item.alt ?? item.name"
          class="max-w-[calc(100dvw-3rem)] max-h-[calc(100dvh-3rem)] object-contain"
        />

        <UiButton
          size="icon-sm"
          variant="ghost"
          class="absolute top-4 right-4"
        >
          <X />
        </UiButton>
      </UiDialogContent>
    </UiDialog>
  </div>
</template>
