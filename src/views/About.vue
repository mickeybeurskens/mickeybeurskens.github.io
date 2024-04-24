<template>
    <div class="container m-top">
      <p>Welcome to my website, dear reader.</p>
      <p>You will find that I address a wide range of topics here, ranging from
         artificial intelligence to philosophy. If there is a red thread in my writing,
         then I suppose we will be discovering it together. 
        </p>
        <p>
          Mostly I try to write content that is accessible to everyone, but once in a while I
          write very technical posts. I will try to make it clear which one is which so you can pick and choose what to read. 
        </p>
        <p>
          In daily life I work as a <a href="https://forgefire.dev">freelance artificial intelligence engineer.</a>
          Practically that means I am a crazed man with a hammer running around searching for nails to hit, 
          although I prefer to think of myself as a craftsman and my work as something that deserves considerable care. 
          Usually I help clients figure out if AI can solve their problems, do research, build prototypes and contribute features to their products.
        </p>  
        <p>
          If you have already read some of my writing, you will know that I also think a lot about
          AI risk and safety in particular. I try to get a grip on the major problems that we might face in the long term, and what we might to
          to mitigate the problems. 
        </p>
        <p>
          Other times I just write about anything that catches my attention. You might find blogs on design,
          video games, music, finance or psychology. 
        </p>
        <p>
          I hope you will enjoy the journey, and a hearthy thank you for reading my work.
        </p>
        <p class="sign"> - Mickey Beurskens </p>
    </div>
</template>

<script>
export default {
  name: 'AboutPage',
};
</script>

<style lang="scss" scoped>
.container {
  max-width: $max-reading-content-width;
  color: var(--c-accent-1);
}

.sign{
  font-style: italic;
}
</style>