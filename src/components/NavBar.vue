<template>
  <nav class="navbar navbar-expand-md navbar-light mb-0 navbar-text-color">
    <router-link class="navbar-brand" :to="'/'">
      {{ title }}
    </router-link>

    <button
      :class="`navbar-toggler ${collapseMenu ? 'collapsed' : ''}`"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      :aria-expanded="!collapseMenu"
      aria-label="Toggle navigation"
      @click="collapseMenu = !collapseMenu"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <SubscribeButton :url="'http://eepurl.com/ic1xGn'" :isExternal="true" buttonText="Subscribe" class="mx-1" />
    <div
      id="navbarNavDropdown"
      :class="`navbar-collapse collapse ${collapseMenu ? '' : 'show'}`"
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
            @click.prevent="showDropdown = !showDropdown"
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
              @click="showDropdown = false"
            >
              {{ section }} ({{ count }})
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </nav>
  <div class="navbar-border" />
</template>

<script language="ts">
import { defineComponent, ref } from "vue";
import SubscribeButton from "./SubscribeButton.vue";

export default defineComponent({
  components: {
    SubscribeButton,
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

    return {
      showDropdown,
      collapseMenu,
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
</style>