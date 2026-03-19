<script setup lang="ts">
import { SendHorizontal } from "lucide-vue-next";
import Page from "~/components/composing/Page.vue";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";
import { TESTIMONIAL_MESSAGE_MAX_LENGTH, TESTIMONIAL_ROLE_MAX_LENGTH } from "~/types/entities/testimonial";
import { rand } from "@vueuse/core";

const { t } = useI18n();

const { testimonials, load } = useTestimonials();
const { loading, send } = useTestimonialForm();

const form = useForm({
  validationSchema: toTypedSchema(z.object({
    firstName: z.string({ message: t("labels.form.fields.first-name.error") }),
    lastName: z.string({ message: t("labels.form.fields.last-name.error") }),
    email: z.string({ message: t("labels.form.fields.email.error.required") }).email({ message: t("labels.form.fields.email.error.invalid") }),
    role: z.string().max(TESTIMONIAL_ROLE_MAX_LENGTH).optional(),
    text: z.string({ message: t("labels.form.fields.message.error.required") }).max(TESTIMONIAL_MESSAGE_MAX_LENGTH, { message: t("labels.form.fields.email.error.max-length", { count: TESTIMONIAL_MESSAGE_MAX_LENGTH }) }),
  })),
});
const submit = form.handleSubmit(async (values) => {
  await send({
    ...values,
    role: values.role ?? null,
  });
  navigateTo(useLocalePath()("/"));
});

load();

function getRandomNumber() {
  return rand(1, 99);
}
</script>

<template>
  <Page
    name="testimonials.new"
    seo-key="new-testimonial"
    class="px-6 py-32"
    wrapper
    wrapper-class="flex flex-col gap-24"
  >
    <header class="grid gap-1.5">
      <h1 class="text-3xl font-bold">
        {{ $t("new-testimonial.title") }}
      </h1>
      <p class="text-muted-foreground leading-relaxed whitespace-pre-line">
        {{ $t("new-testimonial.description") }}
      </p>
    </header>

    <form
      class="grid @lg/page:grid-cols-2 gap-4 items-start"
      @submit="submit"
    >
      <UiFormField
        v-slot="{ componentField }"
        name="firstName"
      >
        <UiFormItem>
          <UiFormLabel>{{ $t("labels.form.fields.first-name.label") }}</UiFormLabel>
          <UiFormControl>
            <UiInput
              v-bind="componentField"
              :placeholder="$t('labels.form.fields.first-name.placeholder')"
            />
          </UiFormControl>
          <UiFormMessage />
        </UiFormItem>
      </UiFormField>
      <UiFormField
        v-slot="{ componentField }"
        name="lastName"
      >
        <UiFormItem>
          <UiFormLabel>{{ $t("labels.form.fields.last-name.label") }}</UiFormLabel>
          <UiFormControl>
            <UiInput
              v-bind="componentField"
              :placeholder="$t('labels.form.fields.last-name.placeholder')"
            />
          </UiFormControl>
          <UiFormMessage />
        </UiFormItem>
      </UiFormField>
      <UiFormField
        v-slot="{ componentField }"
        name="email"
      >
        <UiFormItem class="@lg/page:col-span-2">
          <UiFormLabel>{{ $t("labels.form.fields.email.label") }}</UiFormLabel>
          <UiFormControl>
            <UiInput
              v-bind="componentField"
              type="email"
              :placeholder="$t('labels.form.fields.email.placeholder', { at: '@' })"
            />
          </UiFormControl>
          <UiFormMessage />
        </UiFormItem>
      </UiFormField>
      <UiFormField
        v-slot="{ componentField }"
        name="role"
      >
        <UiFormItem class="@lg/page:col-span-2">
          <UiFormLabel>{{ $t("new-testimonial.form.fields.role.label") }} <span class="text-muted-foreground font-normal!">{{ $t("labels.state.optional") }}</span></UiFormLabel>
          <UiFormControl>
            <UiInput
              v-bind="componentField"
              :placeholder="$t('new-testimonial.form.fields.role.placeholder')"
            />
          </UiFormControl>
          <UiFormMessage />
        </UiFormItem>
      </UiFormField>
      <UiFormField
        v-slot="{ componentField }"
        name="text"
      >
        <UiFormItem class="@lg/page:col-span-2">
          <UiFormLabel>{{ $t("labels.form.fields.message.label") }}</UiFormLabel>
          <UiFormControl>
            <UiTextarea
              v-bind="componentField"
              :placeholder="$t('labels.form.fields.message.placeholder')"
              class="min-h-64 resize-none"
            />
          </UiFormControl>
          <UiFormMessage />
        </UiFormItem>
      </UiFormField>

      <div class="flex flex-col-reverse @xl/page:flex-row @xl/page:items-center @xl/page:justify-between gap-2 @xl/page:gap-4 @lg/page:col-span-2">
        <p class="text-sm text-muted-foreground">
          {{ $t("new-testimonial.form.disclaimer") }}
        </p>

        <UiButton type="submit">
          {{ $t("btn.send") }}
          <UiSpinner v-if="loading" />
          <SendHorizontal v-else />
        </UiButton>
      </div>
    </form>

    <div class="relative flex flex-col gap-4 after:absolute after:inset-0 after:bg-linear-[to_right,var(--color-background)_0%,transparent_30%,transparent_70%,var(--color-background)_100%]">
      <UiMarquee
        :repeat="10"
        class="[--duration:10s]"
      >
        <UiCard
          v-for="testimonial in testimonials.slice(0, testimonials.length / 2)"
          :key="testimonial.id"
          class="min-w-80"
        >
          <UiCardHeader class="flex flex-col">
            <UiAvatar>
              <UiAvatarImage :src="testimonial.avatar ?? `https://randomuser.me/api/portraits/men/${getRandomNumber()}.jpg`" />
              <UiAvatarFallback>
                {{ testimonial.firstName[0] }}{{ testimonial.lastName[0] }}
              </UiAvatarFallback>
            </UiAvatar>
            <UiCardTitle>"{{ testimonial.text }}"</UiCardTitle>
            <UiCardDescription>{{ testimonial.firstName }} {{ testimonial.lastName }}{{ testimonial.role ? `- ${testimonial.role}` : "" }}</UiCardDescription>
          </UiCardHeader>
        </UiCard>
      </UiMarquee>
      <UiMarquee
        reverse
        :repeat="10"
        class="[--duration:10s]"
      >
        <UiCard
          v-for="testimonial in testimonials.slice(testimonials.length / 2)"
          :key="testimonial.id"
          class="min-w-80"
        >
          <UiCardHeader class="flex flex-col">
            <UiAvatar>
              <UiAvatarImage :src="testimonial.avatar ?? `https://randomuser.me/api/portraits/men/${getRandomNumber()}.jpg`" />
              <UiAvatarFallback>
                {{ testimonial.firstName[0] }}{{ testimonial.lastName[0] }}
              </UiAvatarFallback>
            </UiAvatar>
            <UiCardTitle>"{{ testimonial.text }}"</UiCardTitle>
            <UiCardDescription>{{ testimonial.firstName }} {{ testimonial.lastName }}{{ testimonial.role ? `- ${testimonial.role}` : "" }}</UiCardDescription>
          </UiCardHeader>
        </UiCard>
      </UiMarquee>
    </div>

    <FaqSection />
  </Page>
</template>
