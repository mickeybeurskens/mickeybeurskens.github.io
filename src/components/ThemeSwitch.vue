<template>
    <div class="theme-switch-wrapper">
      <label class="theme-switch" for="theme-checkbox">
        <input type="checkbox" id="theme-checkbox" v-model="isDarkTheme" @change="toggleTheme" />
        <div class="slider round"></div>
      </label>
    </div>
  </template>
  
  <script>
  export default {
    name: "ThemeSwitcher",
    data() {
      return {
        isDarkTheme: false,
      };
    },
    methods: {
      toggleTheme() {
        document.documentElement.setAttribute('data-theme', this.isDarkTheme ? 'dark' : 'light');
        localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
      },
    },
    mounted() {
      this.isDarkTheme = localStorage.getItem('theme') === 'dark';
      document.documentElement.setAttribute('data-theme', this.isDarkTheme ? 'dark' : 'light');
    },
  };
  </script>
  
  <style lang="scss">
  .theme-switch-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    margin: 20px;
    padding: 0;
    background-color: var(--c-main-2);
    // border: 1px solid red;
  }
  
  .theme-switch {
    // border: 1px solid red;
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px; 
  
    & input {
      opacity: 0;
      width: 0;
      height: 0;
    }
  
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: $white; // Adjust to your light theme accent color
      transition: .4s;
      border-radius: 34px;
  
      &:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: var(--c-main-2);
        transition: .4s;
        border-radius: 50%;
      }
    }
  
    input:checked + .slider {
      background-color: var(--c-main-1);
    }
  
    input:focus + .slider {
      box-shadow: 0 0 1px var(--c-main-1);
    }
  
    input:checked + .slider:before {
      transform: translateX(26px);
    }
  }
  </style>
  