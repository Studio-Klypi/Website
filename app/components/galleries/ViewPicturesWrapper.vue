<script setup lang="ts">
import GalleryImageCard from "~/components/galleries/GalleryImageCard.vue";

const { gallery } = storeToRefs(useGalleryStore());
</script>

<template>
  <main
    v-if="gallery"
    class="columns-1 @lg/wrapper:columns-2 @xl/wrapper:columns-3 space-y-4"
  >
    <GalleryImageCard
      v-for="picture in gallery.pictures"
      :key="`${gallery.key}-${picture.id}`"
      :gallery
      :picture
      :disabled="!picture.selected && !gallery.canDownloadRaws"
    />
  </main>
</template>
