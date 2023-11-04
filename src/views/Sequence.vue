<template>
  <PatchMeta :title="title" />
  <img :src="image" :alt="title" class="sequence-image" />
  <div class="container mt-3 mt-md-4 sequence-container">
    <h3 class="sequence-sub-header">Sequence</h3>
    <h1>{{ title }}</h1>
    <hr />
    <p>{{ summary }}</p>
  </div>
  <p class="subscribe-text mt-5">If you enjoyed this sequence, consider subscribing. You'll receive an update whenever new
    posts are published.</p>
  <div class="center-button mt-2">
    <SubscribeButton :url="'http://eepurl.com/ic1xGn'" :isExternal="true" buttonText="Subscribe" class="mx-1" />
  </div>
</template>

<script lang='ts'>
import { defineComponent, inject } from "vue";
import { SequencesIndex } from "../types/SequencesIndex";
import router from "../router";
import { PostIndex } from "../types/PostIndex";
import PatchMeta from "../components/PatchMeta.vue";
import SubscribeButton from "../components/SubscribeButton.vue";


export default defineComponent({
  components: {
    PatchMeta,
    SubscribeButton,
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
    const title = sequencesIndex.find((sequence) => sequence.id === props.id)?.title || "";
    const summary = sequencesIndex.find((sequence) => sequence.id === props.id)?.summary || "";
    const post_ids = sequencesIndex.find((sequence) => sequence.id === props.id)?.post_ids || [];
    const image = sequencesIndex.find((sequence) => sequence.id === props.id)?.image || "";

    const posts = post_ids.map((id) => postsIndex.find((post) => post.id === id));


    return {
      title,
      summary,
      post_ids,
      image,
    };
  },
});
</script>

<style lang="scss" scoped>
.sequence-container {
  max-width: $max-reading-content-width;
}

.sequence-sub-header {
  color: $main-dark;
  font-size: 1.2rem;
  font-weight: 300;
  font-style: italic;
  margin-bottom: 0.1rem;
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

.sequence-image {
  // Make this full width across the top of the page
  width: 100%;
  margin-bottom: 1rem;
  max-height: 300px;
  object-fit: cover;

}
</style>