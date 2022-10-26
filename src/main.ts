import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'redaxios'
import { PostIndex } from './types/PostIndex'
import VueGtag from "vue-gtag";

const dataPath = 'blog_store/posts_index.json'

const loadApp = async () => {
  const { data: postsIndex } = await axios.get<PostIndex[]>(dataPath)
  const blogSections: Record<string, number> = postsIndex.reduce((prev, { section }) => prev[section] ? { ...prev, [section]: prev[section] + 1 } : { ...prev, [section]: 1 }, { all: postsIndex.length } as Record<string, number>)

  createApp(App)
    .use(router)
    .use(VueGtag, {
      config: { id: "G-ECHT80E8PH" }
    })
    .provide<PostIndex[]>('postsIndex', postsIndex)
    .provide<Record<string, number>>('blogSections', blogSections)
    .mount('#app')
}

loadApp()
