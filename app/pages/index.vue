<script setup lang="ts">
import { ArrowRight, Laptop, Camera, Video, Handshake, Brain, Target, Zap } from "lucide-vue-next";
import Page from "~/components/composing/Page.vue";
import Wrapper from "~/components/composing/Wrapper.vue";
import ServiceCard from "~/components/services/ServiceCard.vue";
import WhyCard from "~/components/home/WhyCard.vue";

const { projects, load: loadProjects } = useProjects();
const { testimonials, load: loadTestimonials } = useTestimonials();

loadProjects();
loadTestimonials();
</script>

<template>
  <Page
    seo-key="home"
    class="*:px-6 isolate"
  >
    <section
      id="hero"
      class="relative py-32 min-h-dvh flex items-center"
    >
      <UiVortex>
        <Wrapper class="flex flex-col items-center gap-5 text-center">
          <h1 class="text-5xl @lg/page:text-7xl font-extrabold text-pretty">
            <i18n-t keypath="home.sections.hero.title">
              <template #digital>
                <span class="text-primary">
                  {{ $t("home.sections.hero.replacements.digital") }}
                </span>
              </template>
              <template #image>
                <span class="text-primary">
                  {{ $t("home.sections.hero.replacements.image") }}
                </span>
              </template>
            </i18n-t>
          </h1>
          <p class="text-lg text-muted-foreground leading-relaxed text-pretty max-w-[55ch]">
            {{ $t("home.sections.hero.description") }}
          </p>

          <UiButton
            size="lg"
            class="mt-8"
            as-child
          >
            <NuxtLinkLocale to="/contact">
              {{ $t("home.sections.hero.action") }}
              <ArrowRight />
            </NuxtLinkLocale>
          </UiButton>
          <p class="text-xs text-muted-foreground -mt-3">
            {{ $t("home.sections.hero.timing") }}
          </p>
        </Wrapper>
      </UiVortex>
    </section>
    <section
      id="domains"
      class="-my-8 relative z-1"
    >
      <Wrapper class="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
        <ServiceCard
          :icon="Laptop"
          :title="$t('home.sections.domains.web.title')"
          :description="$t('home.sections.domains.web.description')"
        />
        <ServiceCard
          :icon="Camera"
          :title="$t('home.sections.domains.photo.title')"
          :description="$t('home.sections.domains.photo.description')"
        />
        <ServiceCard
          :icon="Video"
          :title="$t('home.sections.domains.video.title')"
          :description="$t('home.sections.domains.video.description')"
        />
      </Wrapper>
    </section>
    <section
      id="clients"
      class="py-32"
    >
      <Wrapper class="flex flex-col relative after:absolute after:pointer-events-none after:inset-0 after:bg-linear-[to_right,var(--color-background)_0%,transparent_20%,transparent_80%,var(--color-background)_100%]">
        <UiMarquee
          pause-on-hover
          :repeat="10"
          class="[--duration:10s]"
        >
          <NuxtImg
            src="/images/clients/hope-media/logo.svg"
            class="h-20 opacity-50 hover:opacity-100 transition-opacity duration-100 dark:invert"
          />
          <NuxtImg
            src="/images/clients/humonio/logo.svg"
            class="h-20 opacity-50 hover:opacity-100 transition-opacity duration-100 dark:invert"
          />
          <NuxtImg
            src="/images/clients/les-creations-de-nanou/logo.svg"
            class="h-20 opacity-50 hover:opacity-100 transition-opacity duration-100"
          />
        </UiMarquee>
        <UiMarquee
          pause-on-hover
          reverse
          :repeat="10"
          class="[--duration:10s]"
        >
          <NuxtImg
            src="/images/clients/hope-media/logo.svg"
            class="h-20 opacity-50 hover:opacity-100 transition-opacity duration-100 dark:invert"
          />
          <NuxtImg
            src="/images/clients/humonio/logo.svg"
            class="h-20 opacity-50 hover:opacity-100 transition-opacity duration-100 dark:invert"
          />
          <NuxtImg
            src="/images/clients/les-creations-de-nanou/logo.svg"
            class="h-20 opacity-50 hover:opacity-100 transition-opacity duration-100"
          />
        </UiMarquee>
      </Wrapper>
    </section>
    <section
      id="why-klypi"
      class="bg-accent text-accent-foreground py-32"
    >
      <Wrapper class="flex flex-col items-center gap-12">
        <header class="flex flex-col items-center gap-1.5">
          <h2 class="text-2xl font-bold">
            {{ $t("home.sections.why-klypi.title") }}
          </h2>

          <p class="whitespace-pre-line text-muted-foreground text-center">
            {{ $t("home.sections.why-klypi.description") }}
          </p>
        </header>

        <main class="w-full @2xl/page:w-min flex flex-col items-start gap-4 @2xl/page:gap-8">
          <div class="w-full @2xl/page:-ml-5 flex flex-col @2xl/page:flex-row gap-4 @2xl/page:gap-8">
            <WhyCard
              :icon="Brain"
              :title="$t('home.sections.why-klypi.reasons.approach.title')"
              :description="$t('home.sections.why-klypi.reasons.approach.description')"
            />
            <WhyCard
              :icon="Target"
              :title="$t('home.sections.why-klypi.reasons.details.title')"
              :description="$t('home.sections.why-klypi.reasons.details.description')"
            />
          </div>
          <div class="w-full @2xl/page:ml-5 flex flex-col @2xl/page:flex-row gap-4 @2xl/page:gap-8">
            <WhyCard
              :icon="Handshake"
              :title="$t('home.sections.why-klypi.reasons.consulting.title')"
              :description="$t('home.sections.why-klypi.reasons.consulting.description')"
            />
            <WhyCard
              :icon="Zap"
              :title="$t('home.sections.why-klypi.reasons.vision.title')"
              :description="$t('home.sections.why-klypi.reasons.vision.description')"
            />
          </div>
        </main>
      </Wrapper>
    </section>
    <section
      id="projects"
      class="py-32"
    >
      <Wrapper class="flex flex-col gap-10">
        <header class="grid gap-1.5">
          <h2 class="text-2xl font-bold">
            {{ $t("home.sections.projects.title") }}
          </h2>
          <p class="whitespace-pre-line max-w-[55ch] text-muted-foreground">
            {{ $t("home.sections.projects.description") }}
          </p>
        </header>

        <main>
          <UiCarousel class="flex flex-col gap-4">
            <UiCarouselContent>
              <UiCarouselItem
                v-for="project in projects"
                :key="project.id"
              >
                <ProjectShowcaseCard :project />
              </UiCarouselItem>
            </UiCarouselContent>

            <div class="flex flex-col @xl/page:flex-row items-center gap-2 @xl/page:justify-between">
              <div class="flex items-center gap-2">
                <UiCarouselPrevious class="relative inset-[inherit] translate-none" />
                <UiCarouselNext class="relative inset-[inherit] translate-none" />
              </div>

              <UiButton
                size="sm"
                variant="link"
                class="text-foreground!"
                as-child
              >
                <NuxtLinkLocale to="/projects">
                  {{ $t("home.sections.projects.see-all") }}
                  <ArrowRight />
                </NuxtLinkLocale>
              </UiButton>
            </div>
          </UiCarousel>
        </main>
      </Wrapper>
    </section>

    <template v-if="testimonials.length">
      <Wrapper>
        <UiSeparator />
      </Wrapper>

      <section
        id="testimonials"
        class="py-32"
      >
        <Wrapper>
          <header>
            <h2 class="text-2xl font-bold text-center">
              {{ $t("home.sections.testimonials.title") }}
            </h2>
          </header>

          <main>
            <UiAnimatedTestimonials :testimonials />
          </main>
        </Wrapper>
      </section>
    </template>

    <section
      id="cta"
      class="bg-accent text-accent-foreground py-32"
    >
      <Wrapper class="flex flex-col gap-1.5 items-center">
        <h2 class="text-2xl font-bold text-center">
          {{ $t("home.sections.cta.title") }}
        </h2>

        <p class="whitespace-pre-wrap text-center max-w-[55ch]">
          {{ $t("home.sections.cta.description") }}
        </p>

        <UiButton
          class="mt-8"
          size="lg"
          as-child
        >
          <NuxtLinkLocale to="/contact">
            {{ $t("home.sections.cta.action") }}
            <ArrowRight />
          </NuxtLinkLocale>
        </UiButton>
      </Wrapper>
    </section>
    <section class="py-32">
      <Wrapper>
        <FaqSection />
      </Wrapper>
    </section>
  </Page>
</template>
