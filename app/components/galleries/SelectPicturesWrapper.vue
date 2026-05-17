<script setup lang="ts">
import GalleryImageCard from "~/components/galleries/GalleryImageCard.vue";
import type { Listed } from "~/types/generic/object";
import { CheckCheck, Square } from "@lucide/vue";

const store = useGalleryStore();
const { gallery, loading } = storeToRefs(store);

const draftSelection = ref<Listed<number>>(gallery.value?.pictures.filter(p => p.selected).reduce((acc, curr) => {
  acc = [...acc, curr.id];
  return acc;
}, [] as Listed<number>) ?? []);

function togglePicture(id: number) {
  if (!gallery.value) return;
  if (draftSelection.value.includes(id)) draftSelection.value = draftSelection.value.filter(i => i !== id);
  else draftSelection.value.push(id);
}

function selectAll() {
  if (!gallery.value) return;

  draftSelection.value = gallery.value.pictures.slice(0, gallery.value.photoQuota).reduce((acc, picture) => {
    acc = [...acc, picture.id];
    return acc;
  }, [] as Listed<number>);
}
function deselectAll() {
  if (!gallery.value) return;
  draftSelection.value = [];
}
</script>

<template>
  <main
    v-if="gallery"
    class="grid gap-4"
  >
    <header class="flex items-center justify-between">
      <UiButton
        v-if="draftSelection.length === gallery.photoQuota"
        variant="outline"
        :disabled="loading.selecting"
        @click="deselectAll"
      >
        <Square />
        {{ $t("btn.deselect-all") }}
      </UiButton>
      <UiButton
        v-else
        variant="outline"
        :disabled="loading.selecting"
        @click="selectAll"
      >
        <CheckCheck />
        {{ $t("btn.select-all") }}
      </UiButton>

      <UiButton
        v-if="gallery.status === 'selection'"
        :disabled="loading.selecting"
        @click="store.selectPictures(draftSelection)"
      >
        {{ $t("gallery.btn.validate-selection") }}
        <UiSpinner v-if="loading.selecting" />
      </UiButton>
    </header>

    <main class="columns-1 @lg/wrapper:columns-2 @xl/wrapper:columns-3 space-y-4">
      <GalleryImageCard
        v-for="picture in gallery.pictures"
        :key="`${gallery.key}-${picture.id}`"
        :gallery
        :picture
        :selected="draftSelection.includes(picture.id)"
        class="cursor-pointer"
        :disabled="draftSelection.length >= gallery.photoQuota && !draftSelection.includes(picture.id)"
        @click="togglePicture(picture.id)"
      />
    </main>
  </main>
</template>
