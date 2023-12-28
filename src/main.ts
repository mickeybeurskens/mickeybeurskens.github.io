import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'redaxios'
import { PostIndex } from './types/PostIndex'
import { ProjectIndex } from './types/ProjectIndex'
import VueGtag from "vue-gtag";

const postsDataPath = 'blog_store/posts_index.json'
const projectsDataPath = 'project_store/projects_index.json'
const sequencesDataPath = 'blog_store/sequences_index.json'

const loadApp = async () => {
  const { data: postsIndex } = await axios.get<PostIndex[]>(postsDataPath)
  const { data: projectsIndex } = await axios.get<ProjectIndex[]>(projectsDataPath)
  const { data: sequencesIndex } = await axios.get<PostIndex[]>(sequencesDataPath)

  const blogSections: Record<string, number> = postsIndex.reduce((prev, { section }) => {
    section.forEach((sec) => {
      prev[sec] = prev[sec] ? prev[sec] + 1 : 1;
    });
    return prev;
  }, { all: postsIndex.length } as Record<string, number>);
  
  createApp(App)
    .use(router)
    .use(VueGtag, {
      config: { id: "G-ECHT80E8PH" }
    })
    .provide<PostIndex[]>('postsIndex', postsIndex)
    .provide<ProjectIndex[]>('projectsIndex', projectsIndex)
    .provide<PostIndex[]>('sequencesIndex', sequencesIndex)
    .provide<Record<string, number>>('blogSections', blogSections)
    .mount('#app')
}

loadApp()
