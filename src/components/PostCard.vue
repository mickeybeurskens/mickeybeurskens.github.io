<template>
  <!-- TITLE -->
  <router-link :to="`/${entry.section}/${entry.id}`" class="text-reset">
    <h3 class="text-left m-0 p-0">
      {{ entry.title }}
    </h3>
  </router-link>

  <!-- POST DETAILS -->
  <p class="font-weight-light font-italic m-0 p-0" :class="!section ? 'text-right' : 'mb-3'">
    {{ entry.date }}
  </p>
  <router-link v-if="!section" :to="`/${entry.section}`" class="text-reset">
    <h6 class="m-0 p-0 text-right font-weight-bold">
      #{{ entry.section }}
    </h6>
  </router-link>

  <!-- POST INTRO -->
  <p class="font-weight-light mt-1">
    {{ entry.description }}
  </p>
</template>

<style scoped lang="scss">
@import "../styles/_variables.scss";

.blog_image {
  width: 6rem;
  margin-right: 1rem;
}

.subtitle {
  font-style: italic;
  font-size: 1.2rem;
}

.title {
  font-size: 4rem;
}
</style>

