<template>
  <PatchMeta />
  <NavBar
    :title="'Mickey.Coffee'" />
  <Suspense>
    <template #default>
      <router-view />
    </template>
    <template #fallback>
      <Loader />
    </template>
  </Suspense>
  <Footer />
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import PatchMeta from './components/PatchMeta.vue'
import Loader from './components/Loader.vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'github-markdown-css/github-markdown.css'
import './styles/global.scss'


export default defineComponent({
  components: {
    PatchMeta,
    Loader,
    NavBar,
    Footer
  },
  setup () {
    return {}
  }
})
</script>
