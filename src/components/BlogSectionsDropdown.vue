<template>
  <div class="container" @click.prevent="toggleDropdown">
    <NavigationButton buttonText="Sections"/>
    <transition name="fade">
      <div v-if="showDropdown" class="dropdown-content mt-2">
        <router-link class="menu-item m-1" v-for="(count, section) of sections" :key="section"
          :to="section === 'all' ? '/blog' : `/blog/${section}`" @click="toggleDropdown">
          {{ section }} ({{ count }})
        </router-link>
      </div>
    </transition>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import NavigationButton from './NavigationButton.vue';

export default defineComponent({
  components: {
    NavigationButton,
  },
  props: {
    sections: {
      type: Object,
      default: () => ({}),
    },
    showDropdown: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['toggleDropdown'],
  setup(props, { emit }) {
    const toggleDropdown = () => {
      emit('toggleDropdown');
    };

    return {
      toggleDropdown,
    };
  },
});
</script>


<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all .3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.container {
  display: "flex";
}

.menu-item {
  display: block;
  color: var(--c-accent-2);
}

.dropdown-content {
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid var(--c-accent-1);
  border-radius: 5px;
}

.background {
  background-color: var(--c-main-2)
}
</style>
