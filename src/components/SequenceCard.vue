<template>
  <router-link class="router" :to="`/sequence/${sequence.id}`">
    <div class="sequence-card">
      <img :src="sequence.image" :alt="sequence.title" class="sequence-image" />
      <h3 class="sequence-title">{{ sequence.title }}</h3>
      <p class="sequence-text font-italic">{{ sequence.summary }}</p>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { SequencesIndex } from '../types/SequencesIndex';

export default defineComponent({
  props: {
    sequence: {
      type: Object as PropType<SequencesIndex>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.sequence-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--c-accent-1);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  max-width: calc($max-reading-content-width/1);
  padding: 1.4rem;
  background-color: var(--c-main-1);
}

.sequence-image {
  max-width: 100%;
  border-radius: 4px;
}

.sequence-title {
  margin-top: 0.5rem;
}

.sequence-text {
  color: var(--c-main-1-font);
}

.router {
  text-decoration: none;
}
</style>
