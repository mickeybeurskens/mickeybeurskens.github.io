<template>
  <div class="text-center mt-5 py-2 background-footer">
    <router-link :to="'/'" class="text-reset"> </router-link>
    <p class="m-0 p-0 footer-text">
      Created by
      <a href="https://forgefire.dev" target="_blank" class="text-reset"
        >Forge Fire 🔥 Software Engineering</a
      >
      © {{ new Date().toDateString().slice(-4) }}
    </p>
  </div>
</template>

<script language="ts">
import { defineComponent } from "vue";
import { version } from "../../package.json";

export default defineComponent({
  data() {
    return {
      version,
    };
  },
});
</script>

<style scoped lang="scss">
.background-footer {
  background-color: $main-light;
  border-width: 0px;
  border-top-width: 1px;
  border-color: $accent-light;
  border-style: solid;
  width: 90vw;
  margin: auto;
  border-radius: 3px;
}

.footer-text {
  color: $font-color-body;
}
</style>