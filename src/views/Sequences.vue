<template>
  <PatchMeta title="Sequences" description="Overview of posts related by a common theme." />
  <div class="mb-5 px-3 px-md-4 pt-5 justify-content-center container">
    This is the sequences page placeholder.
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed, inject, PropType, ref } from "vue";
import PatchMeta from "../components/PatchMeta.vue";
import { PostIndex } from "../types/PostIndex";
import { SequencesIndex } from "../types/SequencesIndex";

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
    const sequencesIndex: SequencesIndex[] = inject<SequencesIndex[]>("sequencesIndex", []);
    const showDropdown = ref(false);

    return {
      showDropdown,
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
</style>