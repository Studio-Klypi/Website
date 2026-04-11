<script setup lang="ts">
import { LINKS } from "~/components/navigation/index";
import { Menu } from "@lucide/vue";
import Logo from "~/components/brand/Logo.vue";
import LangSwitcher from "~/components/interface/LangSwitcher.vue";
import ThemeSwitcher from "~/components/interface/ThemeSwitcher.vue";

const open = ref<boolean>(false);
</script>

<template>
  <UiSheet v-model:open="open">
    <UiSheetTrigger as-child>
      <UiButton
        size="icon"
        variant="ghost"
      >
        <Menu />
      </UiButton>
    </UiSheetTrigger>
    <UiSheetContent
      side="right"
      class="max-w-xs"
    >
      <UiSheetHeader class="flex flex-row items-center gap-1">
        <Logo class="size-9" />
        <p class="font-semibold">
          Studio Klypi
        </p>
      </UiSheetHeader>

      <div class="grid gap-0.5 px-4">
        <UiButton
          v-for="link in LINKS"
          :key="link.key"
          variant="ghost"
          class="justify-start"
          as-child
          @click="open = false"
        >
          <NuxtLinkLocale
            :to="link.path"
            active-class="bg-accent! text-accent-foreground!"
          >
            {{ $t(`${link.key}.navigation-name`) }}
          </NuxtLinkLocale>
        </UiButton>
      </div>

      <UiSheetFooter class="flex-row justify-center">
        <ThemeSwitcher />
        <LangSwitcher />
      </UiSheetFooter>
    </UiSheetContent>
  </UiSheet>
</template>
