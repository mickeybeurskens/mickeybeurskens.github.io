<template>
  <div v-for="entry in visiblePosts" :key="entry.id" class="entry-container container markdown-body p-2 p-md-2">
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
      <div v-if="Array.isArray(entry.section)" class="tag-container m-0 p-0 ml-2">
        <router-link v-for="(sec, index) in entry.section" :key="index" :to="`/blog/${sec}`" class="text-reset tag-item">
          <h6 class="m-0 p-0 ml-1 text-right blog-tag font-weight-bold">
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
