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
      required: true
    },
    isExternal: {
      type: Boolean,
      default: false
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
      } else {
        this.$router.push(this.url);
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "../styles/_variables.scss";

.button-container {
  color: $main-light;
  font-family: $font-body;
}

</style>

