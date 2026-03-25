<script setup lang="ts">
import Flag from "~/components/brand/Flag.vue";

const { locale, locales } = useI18n();
const switchLocale = useSwitchLocalePath();
</script>

<template>
  <UiDropdownMenu>
    <UiDropdownMenuTrigger as-child>
      <UiButton
        size="icon"
        variant="ghost"
      >
        <Flag :code="locale" />
      </UiButton>
    </UiDropdownMenuTrigger>
    <UiDropdownMenuContent>
      <UiDropdownMenuRadioGroup v-model="locale">
        <UiDropdownMenuRadioItem
          v-for="loc in locales"
          :key="loc.code"
          :value="loc.code"
          @click.prevent.stop="navigateTo(switchLocale(loc.code))"
        >
          {{ loc.name }}
          <Flag
            class="ml-auto"
            :code="loc.code"
          />
        </UiDropdownMenuRadioItem>
      </UiDropdownMenuRadioGroup>
    </UiDropdownMenuContent>
  </UiDropdownMenu>
</template>
