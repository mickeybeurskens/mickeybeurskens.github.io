<template>

  <div class="text-center d-flex align-items-center justify-content-left">
    <router-link :to="'/'" class="text-reset">
      <img alt="Vue logo" src="../assets/logo.svg" class="blog_image" />
    </router-link>
    <div class="text-left">
      <h1>Mickey.Coffee</h1>
      <h6 class="subtitle">A highly specific blog about things in general</h6>
    </div>
  </div>
</template>

<style lang="sass">
@import '../styles/_variables.scss'
@import '../styles/blog_header.scss'
</style>

