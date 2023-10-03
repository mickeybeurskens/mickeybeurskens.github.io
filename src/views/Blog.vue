<template>
  <PatchMeta :title="section ? section : 'Blog posts'" />

  <div class="d-flex justify-content-center">
    <div>
      <BlogHeader class="mb-5 px-3 px-md-4 pt-5" />
      <h3>Blog Posts</h3>
      <hr />
      <p v-if="section" class="text-center display-4 text-capitalize my-5">
        {{ section }}
      </p>

      <div v-for="entry in pageStatus.visiblePosts" :key="entry.id"
        class="entry-container container markdown-body p-2 p-md-2">
        <!-- TITLE -->
        <div class="left-side">
          <router-link :to="`/${entry.id}`" class="text-reset">
            <h5 class="text-left blog-title m-0 p-0">
              {{ entry.title }}
            </h5>
          </router-link>
        </div>
        
        <!-- DATE and TAGS -->
        <div class="right-side">
          <p class="font-weight-light blog-date font-italic ml-4 m-0 p-0">
            {{ entry.date }}
          </p>
          <div v-if="!section && Array.isArray(entry.section)" class="tag-container m-0 p-0 ml-2">
            <router-link v-for="(sec, index) in entry.section" :key="index" :to="`/${sec}`" class="text-reset tag-item">
              <h6 class="m-0 p-0 ml-1 text-right blog-tag font-weight-bold">
                #{{ sec }}
              </h6>
            </router-link>
          </div>
        </div>
      </div>

      <!-- PAGINATION -->
      <ul v-if="pageStatus.endPage > pageStatus.startPage" class="pagination justify-content-center mb-5 pb-5"
        style="cursor: pointer">
        <li class="page-item" :class="currentPage == pageStatus.startPage ? 'active' : ''"
          @click="currentPage = pageStatus.startPage">
          <a class="page-link"> {{ pageStatus.startPage }}</a>
        </li>
        <li v-for="(page, index) in pageStatus.midPages" :key="index" class="page-item"
          :class="currentPage == page ? 'active' : ''" @click="currentPage = page">
          <a class="page-link">{{ page }}</a>
        </li>
        <li class="page-item" :class="currentPage == pageStatus.endPage ? 'active' : ''"
          @click="currentPage = pageStatus.endPage">
          <a class="page-link">{{ pageStatus.endPage }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed, inject } from "vue";
import BlogHeader from "../components/BlogHeader.vue";
import Profile from "../components/Profile.vue";
import PatchMeta from "../components/PatchMeta.vue";
import paginate from "../utils/paginate";
import { PostIndex } from "../types/PostIndex";

const VUE_APP_POSTS_PER_PAGE = 10;

export default defineComponent({
  components: {
    PatchMeta,
    BlogHeader,
    Profile,
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
      // Update the filter logic to accommodate posts that might belong to multiple sections
      const categoryPosts = props.section
        ? postsIndex.filter(({ section }) => section.includes(props.section))
        : postsIndex;

      const { startPage, endPage, startIndex, endIndex } = paginate(
        categoryPosts.length,
        state.currentPage,
        VUE_APP_POSTS_PER_PAGE
      );

      const prev =
        state.currentPage - 1 >= startPage ? state.currentPage - 1 : 0;
      const next = state.currentPage + 1 <= endPage ? state.currentPage + 1 : 0;
      const midPages = [prev, state.currentPage, next].filter(
        (p) => p > startPage && p < endPage
      );

      const visiblePosts = categoryPosts.slice(startIndex, endIndex + 1);

      return {
        startPage,
        midPages,
        endPage,
        visiblePosts,
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
}

.blog-title {
  text-transform: capitalize;
}

.tag-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.tag-item {
  font-size: 0.8rem;
}

.blog-date {
  font-size: 0.8rem;
}

.blog-tag {
  font-size: 0.6rem;
}

.entry-container {
  display: flex;
  align-items: baseline;
}

.entry-container .right-side {
  margin-left: auto;
  display: flex;
  align-items: baseline;
}

.left-side {
  display: flex;
}

</style>