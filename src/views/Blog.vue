<template>
  <PatchMeta :title="section ? section : 'Blog posts'" />
  <div class="mb-5 px-3 px-md-4 pt-5 justify-content-center container">
    <BlogHeader />
    <h3 class="pt-5 button-text">Blog Posts</h3>
    <p>
      A chronological overview of all blog posts. You can filter on topic by clicking on
      the section names or by using the dropdown menu.
    </p>
    <BlogSectionsDropdown class="my-4" :sections="blogSections" :showDropdown="showDropdown"
      @toggleDropdown="showDropdown = !showDropdown" />

    <hr />
    <p v-if="section" class="text-center display-4 text-capitalize my-5">
      {{ section }}
    </p>

    <BlogPostList :visiblePosts="pageStatus.visiblePosts" :section="section" />

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
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed, inject, PropType, ref } from "vue";
import BlogHeader from "../components/BlogHeader.vue";
import Profile from "../components/Profile.vue";
import PatchMeta from "../components/PatchMeta.vue";
import BlogSectionsDropdown from "../components/BlogSectionsDropdown.vue";
import BlogPostList from "../components/BlogPostList.vue";

import paginate from "../utils/paginate";
import { PostIndex } from "../types/PostIndex";

const VUE_APP_POSTS_PER_PAGE = 50;

export default defineComponent({
  components: {
    PatchMeta,
    BlogHeader,
    Profile,
    BlogPostList,
    BlogSectionsDropdown
  },
  props: {
    section: {
      type: String,
      default: "",
    }
  },
  setup(props) {
    const postsIndex: PostIndex[] = inject<PostIndex[]>("postsIndex", []);
    const blogSections = inject('blogSections', {})
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

    const showDropdown = ref(false);

    return {
      ...toRefs(state),
      pageStatus,
      blogSections,
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