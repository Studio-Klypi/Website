<script setup lang="ts">
import type { ServiceCardProps } from "~/components/services/index";

defineProps<ServiceCardProps>();
</script>

<template>
  <UiCard>
    <UiCardHeader class="flex flex-col">
      <component :is="icon" />
      <UiCardTitle>
        {{ title }}
      </UiCardTitle>
      <UiCardDescription>
        {{ description }}
      </UiCardDescription>
    </UiCardHeader>

    <UiCardFooter
      v-if="path && false"
      class="mt-auto"
    >
      <UiButton
        size="sm"
        variant="outline"
        as-child
      >
        <NuxtLinkLocale :to="path">
          En savoir plus
        </NuxtLinkLocale>
      </UiButton>
    </UiCardFooter>
  </UiCard>
</template>
