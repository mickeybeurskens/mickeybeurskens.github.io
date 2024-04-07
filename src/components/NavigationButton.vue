<!-- NavigationButton.vue -->
<template>
    <BaseButton @click="navigate">
      {{ buttonText }}
    </BaseButton>
  </template>
  
  <script>
  import BaseButton from './BaseButton.vue';
  
  export default {
    components: {
      BaseButton
    },
    props: {
      url: {
        type: String,
        required: true
      },
      buttonText: {
        type: String,
        default: 'Navigate'
      },
    },
    methods: {
      navigate() {
        this.$router.push(this.url);
      }
    }
  };
  </script>
  