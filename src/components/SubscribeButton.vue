<template>
  <div @click="navigate" class="button-container btn btn-primary">
    {{ buttonText }}
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: false
    },
    isExternal: {
      type: Boolean,
      default: false
    },
    isInternal: {
      type: Boolean,
      default: false,
    },
    buttonText: {
      type: String,
      default: 'Click Me'
    }
  },
  methods: {
    navigate() {
      if (this.isExternal) {
        window.location.href = this.url;
      } if (this.isInternal) {
        this.$router.push(this.url);
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "../styles/_variables.scss";

.button-container {
  color: var(--c-main-2-font);
  background-color: var(--c-main-2);
  font-family: $font-body;
}

</style>

