<script setup lang="ts">
import { SendHorizontal } from "lucide-vue-next";
import Page from "~/components/composing/Page.vue";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";
import { TESTIMONIAL_MESSAGE_MAX_LENGTH, TESTIMONIAL_ROLE_MAX_LENGTH } from "~/types/entities/testimonial";

const { t } = useI18n();

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
</script>

<template>
  <Page
    name="testimonials.new"
    seo-key="new-testimonial"
  >
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
              :placeholder="$t('labels.form.fields.email.placeholder')"
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

      <div class="flex items-center justify-end @lg/page:col-span-2">
        <UiButton type="submit">
          {{ $t("btn.send") }}
          <UiSpinner v-if="loading" />
          <SendHorizontal v-else />
        </UiButton>
      </div>
    </form>
  </Page>
</template>
