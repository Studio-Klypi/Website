<script setup lang="ts">
import { cn } from "~/lib/utils";
import type { HTMLAttributes } from "vue";

interface MarkdownRendererProps {
  content: string;
  useMarkdown?: boolean;
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<MarkdownRendererProps>(), {
  useMarkdown: true,
});

const { render } = useMarkdown();

const html = computed(() => props.useMarkdown ? render(props.content || "") : props.content);
</script>

<template>
  <div
    :class="cn('html-wrapper', props.class)"
    v-html="html"
  />
</template>
