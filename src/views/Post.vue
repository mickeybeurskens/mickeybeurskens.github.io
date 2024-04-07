<template>
  <PatchMeta :title="metadata_title" :description="description" />
  <div class="container mt-4 mt-md-5 post-container">
    <p class="date"> Published: {{ date }} </p>
    <HTMLContentFromString :htmlContent="postHtml" />
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
import HTMLContentFromString from "../components/HTMLContentFromString.vue";
import { loadMarkdownHTML } from "../utils/loadMarkdown";


export default defineComponent({
  components: {
    PatchMeta,
    SubscribeButton,
    HTMLContentFromString
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
    let post_url = postsIndex.find((post) => post.id === props.id)?.url;
    if (post_url === undefined) {
      post_url = "";
    }

    const { postHtml, title } = await loadMarkdownHTML(post_url);
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

<style lang="scss" scoped>
.post-container {
  max-width: $max-reading-content-width;
}

.post-button {
  color: var(--c-main-1-font);
}

.katex {
  margin: 0 0.3rem;
}

.subscribe-text {
  font-family: $font-body;
  font-size: 0.8rem;
  color: var(--c-main-1-font);
  text-align: center;
  margin-top: 1rem;
  font-style: italic;
  color: var(--c-accent-1);
}

.center-button {
  display: flex;
  width: fit-content;
  margin: auto;
}

.date {
  color: var(--c-accent-1);
  font-family: $font-body;
  font-size: 0.8rem;
  font-style: italic;
}
</style>