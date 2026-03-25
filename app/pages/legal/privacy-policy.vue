<script setup lang="ts">
import Page from "~/components/composing/Page.vue";
import MarkdownRenderer from "~/components/text-render/MarkdownRenderer.vue";
</script>

<template>
  <Page
    name="legal.privacy-policy"
    class="py-24"
    wrapper
    wrapper-class="max-w-2xl"
  >
    <MarkdownRenderer :content="$t('legal.privacy')" />
  </Page>
</template>
