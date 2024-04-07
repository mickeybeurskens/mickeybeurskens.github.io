<template>
  <PatchMeta :title="title" />
  <img :src="image" :alt="title" class="sequence-image" />
  <div class="container mt-3 mt-md-4 sequence-container">
    <h3 class="sequence-sub-header">Sequence</h3>
    <h1>{{ title }}</h1>
    <hr />
    <HTMLContentFromString :htmlContent="postHtml" class="summary-text" />

    <h5 class="my-3 mt-4">Posts In This Sequence</h5>
    <div class="posts-container">
      <BlogPostList :visiblePosts="posts" />
    </div>
  </div>
  <p class="subscribe-text mt-5">If you enjoyed this sequence, consider subscribing. You'll receive an update whenever new
    posts are published.</p>
  <div class="center-button mt-2">
    <SubscribeButton :url="'http://eepurl.com/ic1xGn'" :isExternal="true" buttonText="Subscribe" class="mx-1" />
  </div>
</template>

<script lang='ts'>
import { defineComponent, inject, Ref, ref } from "vue";
import { SequencesIndex } from "../types/SequencesIndex";
import router from "../router";
import { PostIndex } from "../types/PostIndex";
import { loadMarkdownHTML } from "../utils/loadMarkdown";
import PatchMeta from "../components/PatchMeta.vue";
import SubscribeButton from "../components/SubscribeButton.vue";
import BlogPostList from "../components/BlogPostList.vue";
import HTMLContentFromString from "../components/HTMLContentFromString.vue";


export default defineComponent({
  components: {
    PatchMeta,
    SubscribeButton,
    BlogPostList,
    HTMLContentFromString,
  },
  props: {
    id: {
      type: String,
      default: "",
    },
  },
  async setup(props) {
    const postsIndex: PostIndex[] = inject<PostIndex[]>("postsIndex", []);

    const sequencesIndex: SequencesIndex[] = inject<SequencesIndex[]>("sequencesIndex", []);
    const meta_title = sequencesIndex.find((sequence) => sequence.id === props.id)?.title || "";
    const summary = sequencesIndex.find((sequence) => sequence.id === props.id)?.summary || "";
    const post_ids = sequencesIndex.find((sequence) => sequence.id === props.id)?.post_ids || [];
    const image = sequencesIndex.find((sequence) => sequence.id === props.id)?.image || "";
    let sequence_url = sequencesIndex.find((sequence) => sequence.id === props.id)?.url;
    if (sequence_url === undefined) {
      sequence_url = "";
    }

    const { postHtml, title } = await loadMarkdownHTML(sequence_url);

    let posts: Ref<PostIndex[]> = ref([]);
    if (post_ids.length > 0) {
      posts.value = post_ids
        .map((id) => postsIndex.find((post) => post.id === id))
        .filter((post): post is PostIndex => post !== undefined);
    }

    return {
      title: meta_title,
      summary,
      post_ids,
      image,
      posts: posts.value,
      postHtml,
    };
  },
});
</script>

<style lang="scss" scoped>
.sequence-container {
  max-width: $max-reading-content-width;
}

.summary-text {
  color: var(--c-main-1-font);
}

.sequence-sub-header {
  color: var(--c-main-1-font);
  font-size: 1.2rem;
  font-weight: 300;
  font-style: italic;
  margin-bottom: 0.1rem;
}

.subscribe-text {
  font-family: $font-body;
  font-size: 0.8rem;
  color: var(--c-main-1);
  text-align: center;
  margin-top: 1rem;
  font-style: italic;
  color: var(--c-main-1);
}

.center-button {
  display: flex;
  width: fit-content;
  margin: auto;
}

.sequence-image {
  width: 100%;
  margin-bottom: 1rem;
  max-height: 300px;
  object-fit: cover;
}

.posts-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--c-accent-1);
  border-radius: 8px;
  padding: 0.4rem;
  margin-bottom: 1rem;
  max-width: calc($max-reading-content-width/1);
  background-color: var(--c-main-1);
}

</style>