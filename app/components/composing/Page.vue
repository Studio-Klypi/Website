<script setup lang="ts">
import { cn } from "~/lib/utils";
import type { PageProps } from "~/components/composing/index";

const { t } = useI18n();

const props = withDefaults(defineProps<PageProps>(), {
  name: "home",
});

useSeoMeta({
  title: t(`${props.seoKey}.seo.title`),
  description: t(`${props.seoKey}.seo.description`),
});
</script>

<template>
  <main
    :data-page-name="props.name"
    :class="cn('', props.class)"
  >
    <div
      v-if="props.wrapper"
      :class="cn('', props.wrapperClass)"
    >
      <slot />
    </div>
    <slot v-else />
  </main>
</template>
