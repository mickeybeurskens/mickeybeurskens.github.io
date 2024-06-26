<template>
  <div v-for="entry in visiblePosts" :key="entry.id" class="entry-container container px-0 markdown-body py-2 py-md-2">
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
      <div class="date-container">
        <p class="blog-date font-italic ml-4 m-0 p-0">
          {{ entry.date }}
        </p>
      </div>
      <div v-if="Array.isArray(entry.section)" class="tag-container m-0 p-0 ml-2">
        <router-link v-for="(sec, index) in entry.section" :key="index" :to="`/blog/${sec}`" class="text-reset tag-item">
          <h6 class="m-0 p-0 ml-1 text-right blog-tag">
            #{{ sec }}
          </h6>
        </router-link>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, PropType } from "vue";
import { PostIndex } from "../types/PostIndex";

export default defineComponent({
  props: {
    visiblePosts: {
      type: Array as PropType<PostIndex[]>,
      required: true,
    },
    section: {
      type: String,
      default: "",
    },
  },
});
</script>

<style lang="scss" scoped>
.blog-title {
  text-transform: capitalize;
}

.tag-container {
  flex: 0 1 60%; 
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.date-container {
  flex: 0 1 40%; 
}

.tag-item {
  font-size: 0.8rem;
}

.blog-date {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--c-main-1-font);
}

.blog-tag {
  font-size: 0.6rem;
  font-weight: 600;
  color: var(--c-accent-2);
}

.entry-container {
  display: flex;
  align-items: baseline;
  justify-content: space-between; 
}

.entry-container .right-side {
  margin-left: auto;
  display: flex;
  align-items: baseline;
}

.left-side {
  display: flex;
  flex: 0 1 40%;
}

.right-side {
    flex: 0 1 60%; 
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
</style>
