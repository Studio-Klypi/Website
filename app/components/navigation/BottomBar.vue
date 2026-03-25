<script setup lang="ts">
import { Mail, Phone } from "@lucide/vue";
import { Instagram } from "lucide-vue-next";
import Wrapper from "~/components/composing/Wrapper.vue";
import Logo from "~/components/brand/Logo.vue";

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="px-6 py-8">
    <Wrapper class="flex flex-col gap-8">
      <div class="flex items-start justify-between flex-wrap gap-12">
        <div class="flex flex-col items-start gap-1.5">
          <NuxtLinkLocale
            to="/"
            class="flex items-center gap-1.5 underline-offset-4 hover:underline"
          >
            <Logo />
            <p class="font-semibold">
              Studio Klypi
            </p>
          </NuxtLinkLocale>
          <UiButton
            variant="link"
            size="sm"
            class="px-2! text-foreground!"
            as-child
          >
            <NuxtLink
              to="https://instagram.com/studioklypi"
              target="_blank"
              external
            >
              <Instagram />
              @studioklypi
            </NuxtLink>
          </UiButton>
          <UiButton
            variant="link"
            size="sm"
            class="px-2! text-foreground!"
            as-child
          >
            <NuxtLink to="mailto:contact@studio-klypi.com">
              <Mail />
              contact@studio-klypi.com
            </NuxtLink>
          </UiButton>
          <UiButton
            variant="link"
            size="sm"
            class="px-2! text-foreground!"
            as-child
          >
            <NuxtLink to="tel:+33961502039">
              <Phone />
              09 61 50 20 39
            </NuxtLink>
          </UiButton>
        </div>

        <div class="flex items-start gap-8 flex-wrap">
          <div class="flex flex-col items-start">
            <p class="text-sm font-bold mb-1.5">
              {{ $t("layout.footer.sections.links.title") }}
            </p>
            <UiButton
              variant="link"
              size="sm"
              class="px-0! text-foreground!"
              disabled
            >
              {{ $t("layout.footer.sections.links.all-testimonials") }}
            </UiButton>
            <UiButton
              variant="link"
              size="sm"
              class="px-0! text-foreground!"
              as-child
            >
              <NuxtLinkLocale to="/testimonials/new">
                {{ $t("layout.footer.sections.links.new-testimonial") }}
              </NuxtLinkLocale>
            </UiButton>
          </div>
          <div class="flex flex-col items-start">
            <p class="text-sm font-bold mb-1.5">
              {{ $t("layout.footer.sections.legal.title") }}
            </p>
            <UiButton
              variant="link"
              size="sm"
              class="px-0! text-foreground!"
              disabled
            >
              {{ $t("layout.footer.sections.legal.terms") }}
            </UiButton>
            <UiButton
              variant="link"
              size="sm"
              class="px-0! text-foreground!"
              disabled
            >
              {{ $t("layout.footer.sections.legal.privacy") }}
            </UiButton>
          </div>
        </div>
      </div>

      <p class="text-sm text-center text-muted-foreground">
        {{ currentYear }} &copy; {{ $t("layout.footer.rights") }}
      </p>
    </Wrapper>
  </footer>
</template>
