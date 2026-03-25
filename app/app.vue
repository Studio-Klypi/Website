<script setup lang="ts">
import { Toaster } from "vue-sonner";
import "vue-sonner/style.css";
import "flag-icons/css/flag-icons.min.css";
import LoadingIndicator from "~/components/loader/LoadingIndicator.vue";

const theme = useTheme();
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <LoadingIndicator />

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
