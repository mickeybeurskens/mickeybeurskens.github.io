<template>
  <div class="text-center py-2 background-footer mt-5">
    <router-link :to="'/'" class="text-reset"> </router-link>
    <p class="m-0 p-0 footer-text">
      Created by
      <a href="https://www.linkedin.com/in/mickey-beurskens/" target="_blank" class="text-reset"
        >Mickey Beurskens ☕</a
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
  background-color: var(--c-main-1);
  border-width: 0px;
  border-top-width: 1px;
  border-color: var(--c-accent-1);
  border-style: solid;
  width: 90vw;
  margin: auto;
  border-radius: 3px;
}

.footer-text {
  color: var(--c-main-1-font);
  font-size: 0.8rem;
}
</style>