<template>
  <PatchMeta :title="section ? section : 'The home page!'" />

  <div class="d-flex justify-content-center">
    <!-- <Profile /> -->
    <!-- HEADER -->
    <div>
      <div class="container pb-4 px-3 px-3 px-md-4 about">
        <div class="about-text">
          <!-- <h2>Unturkeyfing</h2> -->
        </div>
      </div>

      <!-- <hr /> -->

      <div class="higlight-post mb-5 px-3 px-md-4 pt-3 pl-md-4">
        <router-link :to="`/${pageStatus.highlightPost.id}`">
          <h1>{{ pageStatus.highlightPost.title }}</h1>
        </router-link>
        <p class="font-weight-light font-italic m-0 p-0 text-left">
          {{ pageStatus.highlightPost.date }}
        </p>

        <div v-if="!section && Array.isArray(pageStatus.highlightPost.section)"
          class="tag-container-left mt-1 markdown-body">
          <router-link v-for="(sec, index) in pageStatus.highlightPost.section" :key="index" :to="`/blog/${sec}`"
            class="text-reset tag-item ml-0 mr-1">
            <h6 class="m-0 p-0 text-left font-weight-bold">
              #{{ sec }}
            </h6>
          </router-link>
        </div>

        <div class="highlight-post-content mt-3">
          <span class="markdown-body" v-html="highlightPostContent" />
          <p>...</p>
          <SubscribeButton class="mt-2" :url="'/' + highlightPostUrl" buttonText="Continue Reading" />
        </div>
      </div>

      <hr/>

      <div class="recent-posts mt-4 px-3 px-md-4 pt-3 pl-md-4">

        <div class="posts-title">
          <h1>Recent Posts</h1>
        </div>
        <div v-for="entry in pageStatus.summaryPosts" :key="entry.id" class="markdown-body mt-4">
          <!-- TITLE -->
          <router-link :to="`/${entry.id}`" class="text-reset">
            <h3 class="text-left m-0 p-0">
              {{ entry.title }}
            </h3>
          </router-link>

          <!-- POST DETAILS -->
          <p class="font-weight-light font-italic m-0 p-0" :class="!section ? 'text-right' : 'mb-3'">
            {{ entry.date }}
          </p>

          <div v-if="!section && Array.isArray(entry.section)" class="tag-container">
            <router-link v-for="(sec, index) in entry.section" :key="index" :to="`/blog/${sec}`"
              class="text-reset tag-item">
              <h6 class="m-0 p-0 text-right font-weight-bold">
                #{{ sec }}
              </h6>
            </router-link>
          </div>

          <!-- POST INTRO -->
          <p class="font-weight-light mt-1">
            {{ entry.description }}
          </p>
        </div>
        <div class="posts-footer">
          <SubscribeButton class="mt-2" :url="'/blog'" buttonText="All Blog Posts" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed, inject } from "vue";
import BlogHeader from "../components/BlogHeader.vue";
import Profile from "../components/Profile.vue";
import PatchMeta from "../components/PatchMeta.vue";
import SubscribeButton from "../components/SubscribeButton.vue";
import { PostIndex } from "../types/PostIndex";
import { loadMarkdownHTML } from "../utils/loadMarkdown";

const VUE_APP_RECENT_POSTS = 3;

export default defineComponent({
  components: {
    PatchMeta,
    BlogHeader,
    Profile,
    SubscribeButton,
  },
  props: {
    section: {
      type: String,
      default: "",
    },
  },
  async setup(props) {
    let postsIndex: PostIndex[] = inject<PostIndex[]>("postsIndex", []);
    postsIndex = postsIndex.filter((post) => post.type === "blog");
    const state = reactive({
      currentPage: 1,
      highlightPostContent: '',
      highlightPostTitle: '',
      highlightPostUrl: '',
    });

    const pageStatus = computed(() => {
      const sortedPosts = postsIndex.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      const highlightPost = sortedPosts[0];
      const summaryPosts = sortedPosts.slice(1, VUE_APP_RECENT_POSTS + 1);
      return {
        highlightPost: highlightPost,
        summaryPosts: summaryPosts,
      };
    });

    // Load the highlight post content
    const charLimit = 1200;
    const post_id = pageStatus.value.highlightPost.id;
    let post_url = postsIndex.find((post) => post.id === post_id)?.url;
    if (post_url === undefined) {
      post_url = "";
    }

    const { postHtml, title } = await loadMarkdownHTML(post_url, charLimit);
    // Filter first h1
    const h1Index = postHtml.indexOf('<h1');
    const h1EndIndex = postHtml.indexOf('</h1>');
    const h1 = postHtml.slice(h1Index, h1EndIndex + 5);
    const postHtmlNoTitle = postHtml.replace(h1, '');
    state.highlightPostContent = postHtmlNoTitle;
    state.highlightPostTitle = title;
    state.highlightPostUrl = pageStatus.value.highlightPost.id;

    return {
      ...toRefs(state),
      pageStatus,
    };
  },
});
</script>


<style lang="scss" scoped>
.about {
  font-family: $font-body;
  max-width: $max-reading-content-width;
}

.sign {
  font-style: italic;
  font-weight: 700;
}

h3 {
  text-transform: capitalize;
}

.tag-container,
.tag-container-left {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 4px;
}

.tag-container {
  justify-content: flex-end;
}

.tag-item {
  margin-left: 0.5rem;
}

.posts-container {
  max-width: $max-content-width;
  display: flex;
}


.posts-footer {
  margin-top: 1rem;
}

.higlight-post {
  flex-grow: 1;
  max-width: $max-reading-content-width;
  margin: auto;
}

@media (max-width: 900px) {
  .posts-container {
    flex-wrap: wrap;
  }

  .higlight-post {
    max-width: 100%;
  }
}

.recent-posts {
  flex-grow: 1;
  max-width: $max-reading-content-width;
  margin: auto;
}
</style>../utils/loadMarkdown