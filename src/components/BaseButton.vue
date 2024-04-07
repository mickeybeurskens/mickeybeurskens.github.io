<template>
    <button @click="$emit('click')" class="button-container">
      <slot></slot> 
    </button>
  </template>
  
  <script>
  export default {
    name: "BaseButton"
  };
  </script>
  
  <style scoped lang="scss">
  .button-container {
    color: var(--c-main-2-font);
    background-color: var(--c-main-2);
    font-family: $font-body;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
  }
  </style>
  