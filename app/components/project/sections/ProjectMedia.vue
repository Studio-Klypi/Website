<script setup lang="ts">
import { type ProjectMediaSection, ProjectSectionType } from "~/types/entities/project";
import ProjectImage from "~/components/project/sections/media/ProjectImage.vue";
import ProjectVideo from "~/components/project/sections/media/ProjectVideo.vue";

defineProps<{ section: ProjectMediaSection }>();
</script>

<template>
  <ProjectImage
    v-if="section.type === ProjectSectionType.IMAGE"
    :section="section"
  />
  <ProjectVideo
    v-if="section.type === ProjectSectionType.VIDEO"
    :section="section"
  />
</template>
