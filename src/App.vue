<template>
  <PatchMeta />
  <NavBar
    :title="'Mickey Beurskens'" />
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
import 'bootstrap/dist/css/bootstrap.css'
import 'github-markdown-css/github-markdown.css'
import './styles/global.scss'
import { defineComponent, inject } from 'vue'
import PatchMeta from './components/PatchMeta.vue'
import Loader from './components/Loader.vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'


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
