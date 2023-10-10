<template>
  <nav class="navbar navbar-expand-md navbar-light mb-0 navbar-text-color nav-container">
    <router-link class="navbar-brand" :to="'/'">
      {{ title }}
    </router-link>

    <button :class="`navbar-toggler ${collapseMenu ? 'collapsed' : ''}`" type="button" aria-controls="navbarNavDropdown"
      :aria-expanded="!collapseMenu" aria-label="Toggle navigation" @click="collapseMenu = !collapseMenu">
      <span class="navbar-toggler-icon" />
    </button>

    <div :class="`navbar-collapse ${collapseMenu ? '' : 'show'}`" id="navbarNavDropdown">

      <SubscribeButton :url="'http://eepurl.com/ic1xGn'" :isExternal="true" buttonText="Subscribe" />
      <div class="navbar-nav ml-auto">
        <div v-for="(route, name) in navItems" :key="name" class="nav-item ">
          <router-link :class="`nav-link ${collapseMenu ? 'collapsed' : ''}`" :to="route" @click="collapseMenu = true">
            {{ name }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
  <div class="navbar-border" />
</template>

<script language="ts">
import { defineComponent, ref } from "vue";
import SubscribeButton from "./SubscribeButton.vue";
import BlogSectionsDropdown from "./BlogSectionsDropdown.vue";

export default defineComponent({
  components: {
    SubscribeButton,
    BlogSectionsDropdown
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
      // "Projects": "/projects",
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
  background-color: $main-light;
  border-width: 0px;
  border-bottom-width: 1px;
  border-color: $accent-light;
  border-style: solid;
  width: 97vw;
  margin: auto;
  border-radius: 3px;
}

.navbar-text-color {
  color: $font-color-body;
}

.navbar-text-color:hover {
  color: $accent-light-2;
  text-decoration: none;
}

.navbar-click-color:active {
  width: 100%;
}

.nav-container {
  max-width: $max-content-width;
  margin: auto;
}

.navbar-collapse {
  display: none;
}

.navbar-collapse.show {
  display: block;
}
</style>