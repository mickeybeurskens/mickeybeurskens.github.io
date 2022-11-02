<template>
  <PatchMeta :title="title" />
  <div class="container my-4 my-md-5">
    <span
      class="markdown-body"
      v-html="postHtml"
    />
    <button
      type="button"
      class="border btn mt-4 post-button"
      @click="hasHistory() ? router.go(-1) : router.push('/')"
    >
      &laquo; Back
    </button>
  </div>
</template>

<script lang='ts'>
import { defineComponent, inject } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
import router from '../router'
import axios from 'redaxios'
import MarkdownIt from 'markdown-it'
import emoji from 'markdown-it-emoji'
import { PostIndex } from '../types/PostIndex'
import PatchMeta from '../components/PatchMeta.vue'
import hljs from 'highlight.js'

const markDownIt = new MarkdownIt({ 
  highlight: function (str: string, lang: string) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }

    return '';
  }
}).use(emoji)

export default defineComponent({
  components: {
    PatchMeta
  },
  props: {
    section: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    }
  },
  async setup (props) {
    /* Hacky navigation when a href link is clicked within the compiled html Post */
    onBeforeRouteUpdate(() => {
      location.reload()
    })

    // Fetch Post markdown and compile it to html
    const postsIndex: PostIndex[] = inject<PostIndex[]>('postsIndex', [])
    const { url = '' } = postsIndex.find(({ id }) => id === props.id) || {}
    const { data: markDownSource } = await axios.get(url)
    const postHtml = markDownIt.render(markDownSource)

    // Patch page title
    const [, title] = markDownSource.split('#')

    // Back button helper
    const hasHistory = () => window.history?.length > 2

    return {
      hasHistory,
      postHtml,
      router,
      title,
    }
  }
})
</script>

<style lang="scss" scoped>
.markdown-body p {
  color: $font-color-body;
  font-family: $font-body;
}

.post-button {
  color: $font-color-body;
}

.markdown-body p {
  color: $font-color-body;
  font-weight: 400;
}

.markdown-body blockquote {
  font-style: italic;
}
</style>