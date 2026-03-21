<script setup lang="ts">
import { Linkedin, Instagram } from "@lucide/vue";
import type { TeamMemberCardProps } from "~/components/team/index";
import { cn } from "~/lib/utils";

const props = defineProps<TeamMemberCardProps>();
</script>

<template>
  <UiCard :class="cn('pt-2 gap-4 w-xs', props.class)">
    <UiCardHeader class="px-2">
      <NuxtImg
        :src="image"
        :placeholder="[50, 50, 25, 75]"
        class="w-full aspect-square object-cover rounded-md"
      />
    </UiCardHeader>
    <UiCardContent class="grid gap-1.5">
      <UiCardTitle>{{ name }}</UiCardTitle>
      <UiCardDescription>{{ job }}</UiCardDescription>
    </UiCardContent>
    <UiCardFooter class="gap-2">
      <UiButton
        class="flex-1"
        variant="outline"
        as-child
      >
        <NuxtLink
          :to="`https://www.linkedin.com/in/${linkedin}`"
          external
          target="_blank"
        >
          <Linkedin />
        </NuxtLink>
      </UiButton>
      <UiButton
        class="flex-1"
        variant="outline"
        as-child
      >
        <NuxtLink
          :to="`https://www.instagram.com/${instagram}`"
          external
          target="_blank"
        >
          <Instagram />
        </NuxtLink>
      </UiButton>
    </UiCardFooter>
  </UiCard>
</template>
