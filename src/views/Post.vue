<template>
  <PatchMeta :title="metadata_title" :description="description" />
  <div class="container mt-4 mt-md-5 post-container">
    <p class="date"> Published: {{ date }} </p>
    <span class="markdown-body" v-html="postHtml" ></span>
    <button type="button" class="border btn mt-4 post-button" @click="hasHistory() ? router.go(-1) : router.push('/')">
      &laquo; Back
    </button>
    <hr />
  </div>
  <p class="subscribe-text mt-5">If you enjoyed this post, consider subscribing. You'll receive an update whenever new posts are published.</p>
  <div class="center-button mt-2">
    <SubscribeButton :url="'http://eepurl.com/ic1xGn'" :isExternal="true" buttonText="Subscribe" class="mx-1" />
  </div>
</template>

<script lang='ts'>
import { defineComponent, inject } from "vue";
import { onBeforeRouteUpdate } from "vue-router";
import router from "../router";
import { PostIndex } from "../types/PostIndex";
import PatchMeta from "../components/PatchMeta.vue";
import SubscribeButton from "../components/SubscribeButton.vue";
import { loadPostData } from "../utils/loadPosts";



export default defineComponent({
  components: {
    PatchMeta,
    SubscribeButton,
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
    const date = postsIndex.find((post) => post.id === props.id)?.date;
    const description = postsIndex.find((post) => post.id === props.id)?.description;
    const metadata_title = postsIndex.find((post) => post.id === props.id)?.title;

    // Back button helper
    const hasHistory = () => window.history?.length > 2;

    return {
      hasHistory,
      postHtml,
      router,
      title,
      date,
      description,
      metadata_title,
    };
  },
});
</script>

<style lang="scss">
.post-container {
  max-width: $max-reading-content-width;
}

.markdown-body {
  display: block;
  max-width: $max-reading-content-width;
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

.subscribe-text {
  font-family: $font-body;
  font-size: 0.8rem;
  color: $font-color-body;
  text-align: center;
  margin-top: 1rem;
  font-style: italic;
  color: $accent-dark;
}

.center-button {
  display: flex;
  width: fit-content;
  margin: auto;
}

.date {
  color: $accent-light-2;
  font-family: $font-body;
  font-size: 0.8rem;
  font-style: italic;
}
</style>