<template>
  <a class="router" :href="`${project.url}`" target="_blank">
    <div class="project-card">
      <!-- Text container -->
      <div class="text-container">
        <h3 class="project-title">{{ project.title }}</h3>
        <p class="project-text font-italic">{{ project.description }}</p>
        <div class="meta-data-container">
          <p class="date mr-2">
            {{ project.date }}
          </p>
          <div v-if="Array.isArray(project.section)" class="tag-container">
            <router-link v-for="(sec, index) in project.section" :key="index" :to="`/blog/${sec}`"
              class="tag-item">
              <h6 class="tag">
                #{{ sec }}
              </h6>
            </router-link>
          </div>
        </div>
      </div>
      <!-- Image container -->
      <div v-if="project.image !== ''"  class="image-container">
        <img :src="project.image" :alt="project.title" class="project-image" />
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ProjectIndex } from '../types/ProjectIndex';

export default defineComponent({
  props: {
    project: {
      type: Object as PropType<ProjectIndex>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.project-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 0.8rem;
  margin-bottom: 1rem;
  max-width: calc($max-reading-content-width/1);
  background-color: $main-light;
}

.text-container {
  flex: 1;
}

.project-image {
  max-height: 80px;
  border-radius: 4px;
  object-fit: cover;
}

.image-container {
  flex: none;
  padding-left: 1rem;
}

.project-title {
  margin-top: 0;
  margin-bottom: 0.2rem;
  font-size: 1.1rem;
  color: $accent-light-2;
  font-weight: 600;
  font-style: italic;
}

.project-text {
  color: $accent-dark;
  margin-top: 0;
  margin-bottom: 0.4rem;
  font-weight: 500;
}

.router {
  text-decoration: none;
}

.meta-data-container {
  display: flex;
  align-items: baseline;
}

.date {
  font-size: 0.7rem;
  font-style: italic;
  color: $accent-light-2;
  margin: 0
}

.tag {
  font-size: 0.7rem;
  margin: 0;
}
</style>
