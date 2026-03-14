<script setup lang="ts">
import type { ProjectSectionProps } from "~/components/project/index";
import ProjectParagraph from "~/components/project/sections/ProjectParagraph.vue";
import ProjectMedia from "~/components/project/sections/ProjectMedia.vue";
import ProjectList from "~/components/project/sections/ProjectList.vue";
import {
  type ProjectAccordionSection, type ProjectCarouselSection, type ProjectGallerySection,
  type ProjectListSection,
  type ProjectMediaSection,
  type ProjectParagraphSection,
  ProjectSectionType,
} from "~/types/entities/project";
import ProjectAccordion from "~/components/project/sections/ProjectAccordion.vue";
import ProjectCarousel from "~/components/project/sections/ProjectCarousel.vue";
import ProjectGallery from "~/components/project/sections/ProjectGallery.vue";
import ProjectSeparator from "~/components/project/sections/ProjectSeparator.vue";

defineProps<ProjectSectionProps>();
</script>

<template>
  <section :id="section.key">
    <ProjectParagraph
      v-if="section.type === ProjectSectionType.PARAGRAPH"
      :section="section as ProjectParagraphSection"
    />
    <ProjectMedia
      v-if="[ProjectSectionType.IMAGE, ProjectSectionType.VIDEO].includes(section.type)"
      :section="section as ProjectMediaSection"
    />
    <ProjectList
      v-if="section.type === ProjectSectionType.LIST"
      :section="section as ProjectListSection"
    />
    <ProjectAccordion
      v-if="section.type === ProjectSectionType.ACCORDION"
      :section="section as ProjectAccordionSection"
    />
    <ProjectCarousel
      v-if="section.type === ProjectSectionType.CAROUSEL"
      :section="section as ProjectCarouselSection"
    />
    <ProjectGallery
      v-if="section.type === ProjectSectionType.GALLERY"
      :section="section as ProjectGallerySection"
    />
    <ProjectSeparator v-if="section.type === ProjectSectionType.SEPARATOR" />
  </section>
</template>
