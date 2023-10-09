<template>
  <div
    id="navbarNavDropdown"
    :class="`navbar-collapse collapse ${showDropdown ? '' : 'show'}`"
  >
    <ul class="ml-auto mr-5 pr-5 navbar-nav">
      <li :class="`nav-item dropleft dropdown ${showDropdown ? 'show' : ''}`">
        <a
            id="navbarDropdownMenuLink"
            class="dropdown-toggle navbar-text-color"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            :aria-expanded="showDropdown"
            @click.prevent="toggleDropdown"
          >
            Sections
          </a>
          <div
            :class="`dropdown-menu ${showDropdown ? 'show' : ''}`"
            style="max-height: 200px; overflow: scroll"
          >
            <router-link
              v-for="(count, section) of sections"
              :key="section"
              class="dropdown-item text-capitalize navbar-click-color"
              :to="section === 'all' ? '/blog' : `/blog/${section}`"
              @click="toggleDropdown"
            >
              {{ section }} ({{ count }})
            </router-link>
          </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
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

</style>