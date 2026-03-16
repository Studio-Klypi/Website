<script setup lang="ts">
import type { ComponentProps } from "~/types/generic/ui";
import { cn } from "~/lib/utils";

const props = defineProps<ComponentProps>();
</script>

<template>
  <div :class="cn('grid gap-1.5', props.class)">
    <h2 class="text-2xl font-bold text-center">
      {{ $t("layout.faq.title") }}
    </h2>

    <UiAccordion collapsible>
      <UiAccordionItem
        v-for="item in 7"
        :key="item"
        :value="`question-${item}`"
      >
        <UiAccordionTrigger>
          {{ $t(`layout.faq.questions.${item - 1}.question`) }}
        </UiAccordionTrigger>
        <UiAccordionContent>
          <p class="whitespace-pre-wrap">
            {{ $t(`layout.faq.questions.${item - 1}.answer`) }}
          </p>
        </UiAccordionContent>
      </UiAccordionItem>
    </UiAccordion>
  </div>
</template>
