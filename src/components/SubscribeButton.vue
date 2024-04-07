<!-- SubscribeButton.vue -->
<template>
  <BaseButton @click="subscribe">
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
    buttonText: {
      type: String,
      default: 'Subscribe'
    },
    url: {
      type: String,
      default: ''
    }
  },
  methods: {
    subscribe() {
      window.open(this.url, '_blank').focus();
    }
  }
};
</script>
