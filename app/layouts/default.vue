<script setup lang="ts">
import Layout from "~/components/composing/Layout.vue";
import TopBar from "~/components/navigation/TopBar.vue";
import BottomBar from "~/components/navigation/BottomBar.vue";
</script>

<template>
  <Layout class="flex flex-col min-h-dvh">
    <TopBar />

    <main class="flex-1 flex flex-col min-h-0">
      <NuxtPage />
    </main>

    <BottomBar />
  </Layout>
</template>
