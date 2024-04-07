<template>
    <span class="markdown-body" v-html="htmlContent" ></span>
</template>

<script lang='ts'>
import { defineComponent } from "vue";


export default defineComponent({
  props: {
    htmlContent: {
      type: String,
      default: "",
    },
  },
});
</script>

<style lang="scss" scoped>

.markdown-body {
  display: block;
  max-width: $max-reading-content-width;
  margin: auto;
}

.markdown-body p {
  color: var(--c-main-1-font);
  font-family: $font-body;
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
</style>