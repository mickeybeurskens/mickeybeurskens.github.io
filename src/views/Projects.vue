<template>
  <PatchMeta title="Sequences" description="Overview of sequences of posts related by a common theme." />
  <div class="container">
    <h1 class="mt-5">Projects</h1>
    <p>
      Contains a list of projects I am working on, or have worked on in the past. 
    </p>
    {{project_posts}}

    <hr class="mb-4"/>
    <h2>Projects</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, PropType } from "vue";
import PatchMeta from "../components/PatchMeta.vue";
import { PostIndex } from "../types/PostIndex";


export default defineComponent({
  components: {
    PatchMeta,
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