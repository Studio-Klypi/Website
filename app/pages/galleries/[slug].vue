<script setup lang="ts">
import Page from "~/components/composing/Page.vue";
import Wrapper from "~/components/composing/Wrapper.vue";
import { Calendar, Ghost, MapPin, SquareCheckBig, CalendarClock } from "@lucide/vue";
import { formatDate } from "date-fns";
import * as locales from "date-fns/locale";
import SelectPicturesWrapper from "~/components/galleries/SelectPicturesWrapper.vue";
import DownloadPicturesWrapper from "~/components/galleries/DownloadPicturesWrapper.vue";
import ViewPicturesWrapper from "~/components/galleries/ViewPicturesWrapper.vue";

const { locale } = useI18n();

const route = useRoute();
const slug = route.params.slug as string;
const key = route.query.key as string;

if (!key || !slug) navigateTo(useLocalePath()("/"));

const store = useGalleryStore();
const { gallery, loading } = storeToRefs(store);

await store.load(slug, key);
</script>

<template>
  <Page
    :name="`gallery.${slug}`"
    class="py-8 px-6 flex-1 flex flex-col"
  >
    <Wrapper
      v-if="loading.item && gallery?.key !== key"
      class="grid place-items-center min-h-24"
    >
      <UiSpinner />
    </Wrapper>
    <Wrapper
      v-else-if="gallery"
      class="grid gap-8"
    >
      <header class="flex items-center justify-between">
        <div class="grid gap-1.5">
          <h1 class="text-3xl font-extrabold">
            {{ gallery.title }}
          </h1>

          <div class="flex items-center flex-wrap gap-6 text-muted-foreground text-sm">
            <UiTooltipProvider>
              <UiTooltip>
                <UiTooltipTrigger>
                  <div class="flex items-center gap-2 [&_>svg]:size-4">
                    <Calendar />
                    <p class="capitalize">
                      {{ formatDate(gallery.shootingDate, "eee dd MMMM yyyy", { locale: locales[locale] }) }}
                    </p>
                  </div>
                </UiTooltipTrigger>
                <UiTooltipContent>
                  <p>{{ $t("gallery.info.date") }}</p>
                </UiTooltipContent>
              </UiTooltip>
              <UiTooltip v-if="gallery.shootingCity">
                <UiTooltipTrigger>
                  <div class="flex items-center gap-2 [&_>svg]:size-4">
                    <MapPin />
                    <p>{{ gallery.shootingCity }}</p>
                  </div>
                </UiTooltipTrigger>
                <UiTooltipContent>
                  <p>{{ $t("gallery.info.location") }}</p>
                </UiTooltipContent>
              </UiTooltip>
              <UiTooltip v-if="gallery.status === 'selection'">
                <UiTooltipTrigger>
                  <div class="flex items-center gap-2 [&_>svg]:size-4">
                    <SquareCheckBig />
                    <p>{{ gallery.pictures.filter(p => p.selected).length }} / {{ gallery.photoQuota }}</p>
                  </div>
                </UiTooltipTrigger>
                <UiTooltipContent>
                  <p>{{ $t("gallery.info.quota") }}</p>
                </UiTooltipContent>
              </UiTooltip>
              <UiTooltip v-if="gallery.status === 'delivered' && gallery.expiresAt">
                <UiTooltipTrigger>
                  <div class="flex items-center gap-2 [&_>svg]:size-4">
                    <CalendarClock />
                    <p class="capitalize">
                      {{ formatDate(gallery.expiresAt, "eee dd MMM yyyy, HH:mm", { locale: locales[locale] }) }}
                    </p>
                  </div>
                </UiTooltipTrigger>
                <UiTooltipContent>
                  <p>{{ $t("gallery.info.expires-at") }}</p>
                </UiTooltipContent>
              </UiTooltip>

              <p
                v-if="gallery.status !== 'selection'"
                class="inline-flex items-center gap-2 text-primary"
                :class="{ 'animate-pulse': gallery.status === 'retouching' }"
              >
                <span class="block aspect-square rounded-full size-2 bg-current" />
                <template v-if="gallery.status === 'retouching'">
                  Retouches en cours
                </template>
                <template v-else>
                  Livrée
                </template>
              </p>
            </UiTooltipProvider>
          </div>
        </div>
      </header>

      <SelectPicturesWrapper v-if="gallery.status === 'selection'" />
      <DownloadPicturesWrapper v-else-if="gallery.status === 'delivered'" />
      <ViewPicturesWrapper v-else />
    </Wrapper>
    <div
      v-else
      class="flex-1 min-h-0 grid place-items-center"
    >
      <UiEmpty>
        <UiEmptyHeader>
          <UiEmptyMedia variant="icon">
            <Ghost />
          </UiEmptyMedia>
          <UiEmptyTitle>{{ $t("gallery.empty.title") }}</UiEmptyTitle>
          <UiEmptyDescription>{{ $t("gallery.empty.description") }}</UiEmptyDescription>
        </UiEmptyHeader>

        <UiEmptyContent>
          <UiButton as-child>
            <NuxtLinkLocale to="/">
              {{ $t("gallery.empty.action") }}
            </NuxtLinkLocale>
          </UiButton>
        </UiEmptyContent>
      </UiEmpty>
    </div>
  </Page>
</template>
