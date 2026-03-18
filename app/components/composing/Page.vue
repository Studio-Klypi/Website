<script setup lang="ts">
import { cn } from "~/lib/utils";
import type { PageProps } from "~/components/composing/index";
import Wrapper from "~/components/composing/Wrapper.vue";

const { t } = useI18n();

const props = withDefaults(defineProps<PageProps>(), {
  name: "home",
});

if (props.seoData) useSeoMeta({
  title: props.seoData.title,
  description: props.seoData.description,
  author: props.seoData.author,
});
else if (props.seoKey) useSeoMeta({
  title: t(`${props.seoKey}.seo.title`),
  description: t(`${props.seoKey}.seo.description`),
});
</script>

<template>
  <main
    :data-page-name="props.name"
    :class="cn('@container/page', props.class)"
  >
    <Wrapper
      v-if="props.wrapper"
      :class="cn('', props.wrapperClass)"
    >
      <slot />
    </Wrapper>
    <slot v-else />
  </main>
</template>
