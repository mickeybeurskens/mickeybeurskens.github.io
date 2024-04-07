<template>
  <PatchMeta title="Sequences" description="Overview of sequences of posts related by a common theme." />
  <div class="container">
    <h1 class="mt-5">Projects</h1>
    <p>
      A list of projects I am working on, or have worked on in the past. 
    </p>
    <hr class="mb-4"/>
    <h3>Open Source Software</h3>
    <div v-for="project in opensource" :key="project.id">
      <ProjectCard :key="project.id" :project="project" />
    </div>
    <hr class="mb-4"/>
    <h3>Talks</h3>
    <div v-for="project in talks" :key="project.id">
      <ProjectCard :key="project.id" :project="project" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, PropType } from "vue";
import PatchMeta from "../components/PatchMeta.vue";
import { ProjectIndex } from "../types/ProjectIndex";
import ProjectCard from "../components/ProjectCard.vue";


export default defineComponent({
  components: {
    PatchMeta,
    ProjectCard,
  },
  props: {
    section: {
      type: String,
      default: "",
    }
  },
  setup(props) {
    const projectIndex: ProjectIndex[] = inject<ProjectIndex[]>("projectsIndex", []);
    // Sort projects on section and date so they can be displayed in order
    const projectsByDate = projectIndex.sort((a, b) => {
      if (a.section === b.section) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return a.section.localeCompare(b.section);
    });
    const talks = projectsByDate.filter((project) => project.section === "talks");
    const opensource = projectsByDate.filter((project) => project.section === "opensourcesoftware");

    return {
      opensource,
      talks,
    };
  },
});

</script>

<style lang="scss" scoped>
.about {
  font-family: $font-body;
}

.container {
  margin-left: auto;
  max-width: $max-reading-content-width;
}

.footnote {
  font-size: 0.8rem;
  font-style: italic;
  color: var(--c-accent-1);
}
</style>