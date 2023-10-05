<template>
  <PatchMeta :title="section ? section : 'The home page!'" />

  <div class="d-flex justify-content-center">
    <!-- <Profile /> -->
    <!-- HEADER -->
    <div>
      <BlogHeader class="mb-5 px-3 px-md-4 pt-5" />
      <div class="container px-3 px-3 px-md-4 about">
        <div class="about-text">
          <p>
            Hello there internet traveller, welcome to my blog! You will find
            all kinds of content here that I find interesting and/or useful.
            The writing helps me think through challenging topics. I share this in the hopes that might help you too.
          </p>

          <p>
            In my working life I am an AI Engineer at my own company, <a href="https://www.forgefire.dev/">Forge Fire</a>,
            and like to write on the topic both technically and philosophically.
            I'm particularly interested in autonomous agents and AI safety.
          </p>
          <p>
            Outside of that I enjoy philosophy, psychology, finance, and the occasional bit of fiction.
          </p>

          <p>
            You can reach me through twitter <a href="https://twitter.com/mickeybeurskens">@mickeybeurskens</a>, or even
            <a href="https://www.linkedin.com/in/mickey-beurskens/">LinkedIn</a> . I'm always happy to chat.
          </p>

          <p>Enjoy the read.</p>

          <p class="sign">Mickey Beurskens</p>
        </div>
      </div>

      <hr />
      <div class="posts-container ">
        <div class="higlight-post pl-3 pl-md-4 pt-3 pl-md-4">
          <h1>{{pageStatus.highlightPost.title}}</h1>
          <p>{{pageStatus.highlightPost.description}}</p>
        </div>
        <div class="recent-posts">

          <div class="posts-title pl-3 pl-md-4 pt-3 pl-md-4">
            <h1>Recent Posts</h1>

            <p>A selection of recent posts. You can also find older posts on the blog page.</p>
          </div>
          <div v-for="entry in pageStatus.summaryPosts" :key="entry.id" class="container markdown-body p-3 p-md-4">
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
          <div class="posts-footer pl-3 pl-md-4">
            <SubscribeButton :url="'/blog'" buttonText="Read Blog" />
          </div>
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
  setup(props) {
    const postsIndex: PostIndex[] = inject<PostIndex[]>("postsIndex", []);
    const state = reactive({
      currentPage: 1,
    });

    const pageStatus = computed(() => {
      // Sort posts by date in descending order
      const sortedPosts = postsIndex.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });

      // Take only the 3 most recent posts
      const highlightPost = sortedPosts[0];
      const summaryPosts = sortedPosts.slice(1, VUE_APP_RECENT_POSTS + 1);

      return {
        highlightPost: highlightPost,
        summaryPosts: summaryPosts,
      };
    });

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
  max-width: 700px;
}

.sign {
  font-style: italic;
  font-weight: 700;
}

h3 {
  text-transform: capitalize;
}

.tag-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.tag-item {
  margin-top: 2px;
  margin-left: 0.5rem;
}

.posts-container {
  margin: auto;
  max-width: 900px;
  display: flex;
}

.posts-footer {
  margin-top: 1rem;
  max-width: 40%;
}

.higlight-post {
  flex-basis: 1;

}

.recent-posts {
  flex-basis: 1;
}
</style>