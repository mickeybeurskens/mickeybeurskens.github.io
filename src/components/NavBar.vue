<template>
  <div class="nav-container">
    <nav class="navbar navbar-expand-md navbar-light mb-0 navbar-text-color nav-content">
      <router-link class="navbar-brand" :to="'/'">
        <span class="nav-text-format mr-3">
          {{ title }}
        </span>
      </router-link>

      <button :class="`navbar-toggler ${collapseMenu ? 'collapsed' : ''}`" type="button"
        aria-controls="navbarNavDropdown" :aria-expanded="!collapseMenu" aria-label="Toggle navigation"
        @click="collapseMenu = !collapseMenu">
        <span class="navbar-toggler-icon" />
      </button>

      <div :class="`navbar-collapse ${collapseMenu ? '' : 'show'}`" id="navbarNavDropdown">
        <SubscribeButton :url="'http://eepurl.com/ic1xGn'" :isExternal="true" buttonText="Subscribe" />

        <div class="navbar-nav ml-auto">
          <div v-for="(route, name) in navItems" :key="name" class="nav-item navbar-nav-background">
            <router-link :class="`nav-link ${collapseMenu ? 'collapsed' : ''}`" :to="route"
              @click="collapseMenu = true">
              <span class="nav-text-format">
                {{ name }}
              </span>
            </router-link>
          </div>
        </div>
        <ThemeSwitch />
      </div>
    </nav>
  </div>
  <div class="navbar-border" />
</template>

<script language="ts">
import { defineComponent, ref } from "vue";
import SubscribeButton from "./SubscribeButton.vue";
import BlogSectionsDropdown from "./BlogSectionsDropdown.vue";
import ThemeSwitch from './ThemeSwitch.vue'

export default defineComponent({
  components: {
    SubscribeButton,
    BlogSectionsDropdown,
    ThemeSwitch,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    sections: {
      type: Object,
      default: () => ({}),
    },
  },
  setup() {
    const showDropdown = ref(false);
    const collapseMenu = ref(true);
    const navItems = {
      "Home": "/",
      "Blog": "/blog",
      "Sequences": "/sequences",
      "Projects": "/projects",
      // "About": "/about",
    }

    return {
      showDropdown,
      collapseMenu,
      navItems,
    };
  },
});
</script>

<style lang="scss" scoped>
.navbar-border {
  background-color: var(--c-main-1);
  border-width: 0px;
  // border-bottom-width: 1px;
  border-color: var(--c-accent-1);
  border-style: solid;
  width: 97vw;
  margin: auto;
  border-radius: 3px;
}

.navbar-click-color:active {
  width: 100%;
}

.nav-text-format {
  color: var(--c-main-2-font);
  font-weight: 600;
  background-color: var(--c-main-2);
}

.nav-content {
  background-color: var(--c-main-2);
  max-width: $max-content-width;
  margin: auto;
}

.nav-container {
  margin: auto;
  background-color: var(--c-main-2);
}

.navbar-collapse {
  display: none;
  background-color: var(--c-main-2);
}

.navbar-collapse.show {
  display: block;
  background-color: var(--c-main-2);
}

.navbar-nav-background {
  background-color: var(--c-main-2);
}
</style>