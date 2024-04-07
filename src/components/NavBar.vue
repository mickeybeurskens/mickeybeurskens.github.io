<template>
  <div class="nav-container">
    <nav class="navbar navbar-expand-md navbar-light mb-0 navbar-text-color nav-content">
      <router-link class="navbar-brand" :to="'/'">
        <span class="nav-text-format mr-3">
          {{ title }}
        </span>
      </router-link>
      
      <button :class="`navbar-toggler ${collapseMenu ? 'collapsed' : ''}`" type="button" aria-controls="navbarNavDropdown"
      :aria-expanded="!collapseMenu" aria-label="Toggle navigation" @click="collapseMenu = !collapseMenu">
      <span class="navbar-toggler-icon" />
    </button>

    <SubscribeButton :url="'http://eepurl.com/ic1xGn'" :isExternal="true" buttonText="Subscribe" />
    <div :class="`navbar-collapse ${collapseMenu ? '' : 'show'}`" id="navbarNavDropdown">
      
      <div class="navbar-nav ml-auto">
        <div v-for="(route, name) in navItems" :key="name" class="nav-item ">
          <router-link :class="`nav-link ${collapseMenu ? 'collapsed' : ''}`" :to="route" @click="collapseMenu = true">
            <span class="nav-text-format">
              {{ name }}
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</div>
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
  color: $white;
  font-weight: 600;
}

.nav-content {
  max-width: $max-content-width;
  margin: auto;
}

.nav-container {
  margin: auto;
  background-color: var(--c-main-2);
}

.navbar-collapse {
  display: none;
}

.navbar-collapse.show {
  display: block;
}

</style>