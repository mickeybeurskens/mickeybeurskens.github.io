<template>
    <div class="post-highlight">
        <p class="date font-italic m-0 p-0 text-left">
        {{ date }}
        </p>

        <div v-if="tags && Array.isArray(tags)" class="tag-container-left mt-1 markdown-body">
        <router-link v-for="(tag, index) in tags" :key="index" :to="`/blog/${tag}`"
            class="text-reset tag-item ml-0 mr-1">
            <h6 class="m-0 p-0 text-left tag font-weight-bold">
            #{{ tag }}
            </h6>
        </router-link>
        </div>
    </div>
</template>
  

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'PostHighlight',
  props: {
    date: String,
    tags: Array as PropType<string[]>,
  },
});
</script>

<style scoped>

.date {
color: var(--c-accent-1); 
font-weight: 600;
}

.tag {
color: var(--c-accent-2); 
}

.tag-container,
.tag-container-left {
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
margin-top: 4px;
}

.tag-container {
justify-content: flex-end;
}

</style>
