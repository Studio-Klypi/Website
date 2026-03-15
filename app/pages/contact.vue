<script setup lang="ts">
import { SendHorizontal } from "lucide-vue-next";
import Page from "~/components/composing/Page.vue";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";
import { ContactTypes, MESSAGE_MAX_LENGTH, SUBJECT_MAX_LENGTH } from "~/types/entities/contact";
import { useContactForm } from "~/composables/forms/useContactForm";

const { t } = useI18n();

const { loading, send } = useContactForm();

const form = useForm({
  validationSchema: toTypedSchema(z.object({
    type: z.enum(ContactTypes),
    firstName: z.string({ message: t("labels.form.fields.first-name.error") }),
    lastName: z.string({ message: t("labels.form.fields.last-name.error") }),
    email: z.string({ message: t("labels.form.fields.email.error.required") }).email({ message: t("labels.form.fields.email.error.invalid") }),
    subject: z.string({ message: t("contact.form.fields.subject.error.required") }).max(SUBJECT_MAX_LENGTH, { message: t("contact.form.fields.subject.error.max-length", { count: SUBJECT_MAX_LENGTH }) }),
    message: z.string({ message: t("labels.form.fields.message.error.required") }).max(MESSAGE_MAX_LENGTH, { message: t("labels.form.fields.message.error.max-length", { count: MESSAGE_MAX_LENGTH }) }),
  })),
  initialValues: {
    type: ContactTypes[0],
  },
  keepValuesOnUnmount: true,
});
const typeValue = computed(() => form.values.type);
watch(typeValue, (val) => {
  if (val === "contact") form.setFieldValue("subject", undefined);
  else form.setFieldValue("subject", t(`contact.form.fields.subject.options.${val}`));
});
watch(form.values, console.log);

const submit = form.handleSubmit(async (values) => {
  await send(values);
  form.resetForm();
});
</script>

<template>
  <Page
    name="contact"
    seo-key="contact"
  >
    <form
      class="grid @lg/page:grid-cols-2 gap-4 items-start"
      @submit="submit"
    >
      <UiFormField
        v-slot="{ componentField }"
        name="type"
      >
        <UiFormItem class="@lg/page:col-span-2">
          <UiFormLabel>{{ $t("contact.form.fields.type.label") }}</UiFormLabel>
          <UiSelect
            v-bind="componentField"
            :disabled="loading"
          >
            <UiFormControl>
              <UiSelectTrigger class="w-full">
                <UiSelectValue />
              </UiSelectTrigger>
            </UiFormControl>
            <UiSelectContent>
              <UiSelectItem
                v-for="option in ContactTypes"
                :key="option"
                :value="option"
              >
                {{ $t(`contact.form.fields.type.options.${option}`) }}
              </UiSelectItem>
            </UiSelectContent>
          </UiSelect>
        </UiFormItem>
      </UiFormField>
      <UiFormField
        v-slot="{ componentField }"
        name="firstName"
      >
        <UiFormItem>
          <UiFormLabel>{{ $t("labels.form.fields.first-name.label") }}</UiFormLabel>
          <UiFormControl>
            <UiInput
              v-bind="componentField"
              :disabled="loading"
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
              :disabled="loading"
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
              :disabled="loading"
              :placeholder="$t('labels.form.fields.email.placeholder', { at: '@' })"
            />
          </UiFormControl>
          <UiFormMessage />
        </UiFormItem>
      </UiFormField>
      <UiFormField
        v-if="form.values.type === ContactTypes[0]"
        v-slot="{ componentField }"
        name="subject"
      >
        <UiFormItem class="@lg/page:col-span-2">
          <UiFormLabel>{{ $t("contact.form.fields.subject.label") }}</UiFormLabel>
          <UiFormControl>
            <UiInput
              v-bind="componentField"
              :disabled="loading"
              :placeholder="$t('contact.form.fields.subject.placeholder')"
            />
          </UiFormControl>
          <UiFormMessage />
        </UiFormItem>
      </UiFormField>
      <UiFormField
        v-slot="{ componentField }"
        name="message"
      >
        <UiFormItem class="@lg/page:col-span-2">
          <UiFormLabel>{{ $t("labels.form.fields.message.label") }}</UiFormLabel>
          <UiFormControl>
            <UiTextarea
              v-bind="componentField"
              class="min-h-64 resize-none"
              :disabled="loading"
              :placeholder="$t('labels.form.fields.message.placeholder')"
            />
          </UiFormControl>
          <UiFormDescription>
            {{ $t("labels.form.fields.message.description") }}
          </UiFormDescription>
          <UiFormMessage />
        </UiFormItem>
      </UiFormField>

      <div class="@lg/page:col-span-2 flex items-center justify-end">
        <UiButton
          type="submit"
          :disabled="loading"
        >
          {{ $t("btn.send") }}
          <UiSpinner v-if="loading" />
          <SendHorizontal v-else />
        </UiButton>
      </div>
    </form>
  </Page>
</template>
