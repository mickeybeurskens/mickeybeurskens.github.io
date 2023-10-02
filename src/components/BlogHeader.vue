<template>
  <div class="text-center d-flex align-items-center justify-content-left">
    <router-link :to="'/'" class="text-reset">
      <img alt="Mickey.Coffee logo" src="../assets/logo.svg" class="blog_image" />
    </router-link>
    <div class="text-left flex-container">
      <h1 class="title">Mickey.Coffee</h1>
      <h6 class="subtitle">A highly specific blog about things in general</h6>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../styles/_variables.scss";

.blog_image {
  width: 5rem;
  margin-right: 1rem;
}

.subtitle {
  font-style: italic;
}

@media (max-width: 500px) {
  .title{
    font-size: 1.5rem;
  }
  .subtitle{
    font-size: 0.8rem;
  }
}

</style>

