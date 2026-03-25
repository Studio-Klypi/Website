<script setup lang="ts">
import { cn } from "~/lib/utils";
import type { TestimonialCardProps } from "~/components/testimonials/index";
import { rand } from "@vueuse/core";

const props = defineProps<TestimonialCardProps>();

const getRandomNumber = () => rand(1, 99);
</script>

<template>
  <UiCard :class="cn('min-w-80', props.class)">
    <UiCardHeader class="flex flex-col flex-1">
      <UiAvatar>
        <UiAvatarImage :src="testimonial.avatar ?? `https://randomuser.me/api/portraits/men/${getRandomNumber()}.jpg`" />
        <UiAvatarFallback>
          {{ testimonial.firstName[0] }}{{ testimonial.lastName[0] }}
        </UiAvatarFallback>
      </UiAvatar>
      <UiCardTitle>"{{ testimonial.text }}"</UiCardTitle>
      <UiCardDescription class="mt-auto">
        {{ testimonial.firstName }} {{ testimonial.lastName }}{{ testimonial.role ? ` - ${testimonial.role}` : "" }}
      </UiCardDescription>
    </UiCardHeader>
  </UiCard>
</template>
