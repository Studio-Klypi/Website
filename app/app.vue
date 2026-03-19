<script setup lang="ts">
import { Toaster } from "vue-sonner";
import "vue-sonner/style.css";

const theme = useTheme();
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />

    <UiTooltipProvider>
      <NuxtLayout />
    </UiTooltipProvider>

    <ClientOnly>
      <Toaster
        :theme="theme"
        rich-colors
        position="top-right"
        close-button
        close-button-position="top-right"
      />
    </ClientOnly>
  </div>
</template>
