<script setup lang="ts">
import Page from "~/components/composing/Page.vue";
import MarkdownRenderer from "~/components/text-render/MarkdownRenderer.vue";
</script>

<template>
  <Page
    name="about"
    seo-key="about"
    class="flex flex-col *:py-24 *:px-6"
  >
    <section
      id="quote"
      class="min-h-[80dvh] flex items-center"
    >
      <div class="w-full max-w-[80ch] mx-auto flex flex-col justify-center text-center items-center gap-1.5">
        <p class="uppercase text-muted-foreground">
          {{ $t("about.sections.quote.caption") }}
        </p>
        <h1 class="text-6xl font-extrabold">
          {{ $t("about.sections.quote.text") }}
        </h1>
      </div>
    </section>
    <section id="story">
      <div class="w-full max-w-[90ch] mx-auto flex items-center gap-12">
        <div class="grid gap-1.5 flex-1">
          <h2 class="text-2xl font-bold">
            {{ $t("about.sections.story.title") }}
          </h2>
          <MarkdownRenderer
            :content="$t('about.sections.story.content')"
            class="text-lg leading-relaxed gap-6"
          />
        </div>

        <NuxtImg
          class="aspect-3/5 object-cover w-80 rounded-xl"
          src="/images/team/loic/photo-1.webp"
          :placeholder="[50, 50, 25, 75]"
        />
      </div>
    </section>
    <section id="team">
      <div class="flex flex-col gap-5 w-full max-w-[80ch] mx-auto">
        <h2 class="text-2xl font-bold text-center">
          {{ $t("about.sections.team.title") }}
        </h2>

        <div class="flex items-center justify-center isolate py-4">
          <TeamMemberCard
            v-if="false"
            image="/images/team/loic/photo-1.webp"
            name="Loïc MAES"
            :job="$t('about.sections.team.jobs.loic')"
            linkedin="maesloic"
            instagram="ms.loic"
            class="-rotate-3 translate-y-1.5 translate-x-3"
          />
          <TeamMemberCard
            image="/images/team/loic/photo-1.webp"
            name="Loïc MAES"
            :job="$t('about.sections.team.jobs.loic')"
            linkedin="maesloic"
            instagram="ms.loic"
            class="z-1 -translate-y-1.5"
          />
          <TeamMemberCard
            v-if="false"
            image="/images/team/loic/photo-1.webp"
            name="Loïc MAES"
            :job="$t('about.sections.team.jobs.loic')"
            linkedin="maesloic"
            instagram="ms.loic"
            class="rotate-3 translate-y-1.5 -translate-x-3"
          />
        </div>

        <p class="text-center italic text-sm text-muted-foreground">
          {{ $t("about.sections.team.disclaimer") }}
        </p>
      </div>
    </section>
    <section
      v-if="false"
      id="partners"
    />
    <section
      v-if="false"
      id="clients"
    />
    <section
      id="work-method"
      class="bg-accent text-accent-foreground"
    >
      <div class="flex flex-col items-center gap-8 w-full max-w-[80ch] mx-auto">
        <header class="grid gap-1.5 text-center">
          <h2 class="text-2xl font-bold text-center">
            {{ $t("about.sections.method.title") }}
          </h2>
          <p>{{ $t("about.sections.method.description") }}</p>
        </header>

        <main class="w-min">
          <UiStepper
            :model-value="4"
            class="flex flex-col w-min"
          >
            <UiStepperItem
              v-for="i in 4"
              :key="i"
              :step="i"
              :completed="true"
            >
              <UiStepperIndicator class="bg-primary! text-primary-foreground!">
                {{ i }}
              </UiStepperIndicator>

              <UiStepperTitle>{{ $t(`about.sections.method.steps.${i - 1}`) }}</UiStepperTitle>
            </UiStepperItem>
          </UiStepper>
        </main>
      </div>
    </section>
    <section id="faq">
      <FaqSection class="w-full max-w-[80ch] mx-auto" />
    </section>
  </Page>
</template>
