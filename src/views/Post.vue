<template>
  <PatchMeta :title="title" />
  <div class="container my-4 my-md-5">
    <span class="markdown-body" v-html="postHtml" />
    <button type="button" class="border btn mt-4 post-button" @click="hasHistory() ? router.go(-1) : router.push('/')">
      &laquo; Back
    </button>
  </div>
</template>

<script lang='ts'>
import { defineComponent, inject } from "vue";
import { onBeforeRouteUpdate } from "vue-router";
import router from "../router";
import { PostIndex } from "../types/PostIndex";
import PatchMeta from "../components/PatchMeta.vue";
import { loadPostData } from "../utils/loadPosts";



export default defineComponent({
  components: {
    PatchMeta,
  },
  props: {
    section: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
  },
  async setup(props) {
    // Hacky navigation
    onBeforeRouteUpdate(() => {
      location.reload();
    });

    // Fetch Post markdown and compile it to html
    const postsIndex: PostIndex[] = inject<PostIndex[]>("postsIndex", []);
    const { postHtml, title } = await loadPostData(postsIndex, props.id);

    // Back button helper
    const hasHistory = () => window.history?.length > 2;

    return {
      hasHistory,
      postHtml,
      router,
      title,
    };
  },
});
</script>

<style lang="scss">
.markdown-body {
  display: block;
  max-width: 900px;
  margin: auto;
}

.markdown-body p {
  color: $font-color-body;
  font-family: $font-body;
}

.post-button {
  color: $font-color-body;
}

.markdown-body blockquote {
  font-style: italic;
  width: 90%;
  margin: 0.7rem auto;
}

.markdown-body h1 {
  text-transform: capitalize;
}

.katex {
  margin: 0 0.3rem;
}
</style>