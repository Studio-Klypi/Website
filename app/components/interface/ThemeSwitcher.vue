<script setup lang="ts">
import { Moon, Laptop, Sun } from "@lucide/vue";

const theme = useTheme();
</script>

<template>
  <UiDropdownMenu>
    <UiDropdownMenuTrigger as-child>
      <UiButton
        size="icon"
        variant="ghost"
      >
        <ClientOnly>
          <Moon v-if="theme === 'dark'" />
          <Sun v-else-if="theme === 'light'" />
          <template #fallback>
            <Laptop />
          </template>
        </ClientOnly>
      </UiButton>
    </UiDropdownMenuTrigger>
    <UiDropdownMenuContent>
      <UiDropdownMenuRadioGroup v-model="$colorMode.preference">
        <UiDropdownMenuRadioItem value="light">
          Clair
          <Sun class="ml-auto" />
        </UiDropdownMenuRadioItem>
        <UiDropdownMenuRadioItem value="dark">
          Sombre
          <Moon class="ml-auto" />
        </UiDropdownMenuRadioItem>
        <UiDropdownMenuRadioItem value="system">
          Système
          <Laptop class="ml-auto" />
        </UiDropdownMenuRadioItem>
      </UiDropdownMenuRadioGroup>
    </UiDropdownMenuContent>
  </UiDropdownMenu>
</template>
