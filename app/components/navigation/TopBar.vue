<script setup lang="ts">
import { Menu } from "lucide-vue-next";
import { LINKS } from "~/components/navigation/index";
import Logo from "~/components/brand/Logo.vue";
import Wrapper from "~/components/composing/Wrapper.vue";
import ThemeSwitcher from "~/components/interface/ThemeSwitcher.vue";
import LangSwitcher from "~/components/interface/LangSwitcher.vue";

const { isMobile } = useResponsive();
</script>

<template>
  <header class="sticky top-0 z-10 h-16 bg-background/70 backdrop-blur-lg px-6">
    <Wrapper class="flex items-center justify-between h-full">
      <NuxtLinkLocale
        to="/"
        class="flex items-center gap-1 underline-offset-4 hover:underline"
      >
        <Logo class="size-9" />
        <p class="font-semibold">
          Studio Klypi
        </p>
      </NuxtLinkLocale>

      <ClientOnly>
        <UiSheet v-if="isMobile">
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
        <nav
          v-else
          class="flex items-center gap-0.5"
        >
          <UiButton
            v-for="link in LINKS.filter(l => !l.mobileOnly)"
            :key="link.key"
            variant="ghost"
            as-child
          >
            <NuxtLinkLocale
              :to="link.path"
              active-class="bg-accent! text-accent-foreground!"
            >
              {{ $t(`${link.key}.navigation-name`) }}
            </NuxtLinkLocale>
          </UiButton>

          <span class="ml-1 mr-2">·</span>

          <ThemeSwitcher />
          <LangSwitcher />
        </nav>

        <template #fallback>
          <UiSheet>
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
      </ClientOnly>
    </Wrapper>
  </header>
</template>
