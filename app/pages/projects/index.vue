<script setup lang="ts">
import Page from "~/components/composing/Page.vue";

const store = useProjectStore();
const { projects } = storeToRefs(store);

store.getProjects();
</script>

<template>
  <Page
    seo-key="projects.home"
    name="projects.home"
  >
    {{ JSON.stringify(projects) }}
  </Page>
</template>
