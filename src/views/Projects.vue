<template>
  <PatchMeta title="Sequences" description="Overview of sequences of posts related by a common theme." />
  <div class="container">
    <h1 class="mt-5">Projects</h1>
    <p>
      A list of projects I am working on, or have worked on in the past. 
    </p>
    <hr class="mb-4"/>
    <ProjectCard v-for="project in project_posts" :key="project.id" :project="project" />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, PropType } from "vue";
import PatchMeta from "../components/PatchMeta.vue";
import { PostIndex } from "../types/PostIndex";
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
    },
    allBlogSections: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },
  setup(props) {
    const postsIndex: PostIndex[] = inject<PostIndex[]>("postsIndex", []);
    let project_posts = postsIndex.filter((post) => post.type.includes("project"));

    return {
      project_posts,
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
  color: $accent-dark;
}
</style>