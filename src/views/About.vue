<template>
    <div class="container m-top">
      <h1>About This Website</h1>
      <p>Welcome, dear reader.</p>
      <p>On this website I write about topics that I care about.
        </p>
        <p>
          Born and raised a Dutchman, I work as an <a href="https://forgefire.dev">entrepreneur and artificial intelligence engineer.</a>
          Usually I spend my time figuring out if AI can solve a certain problems, do research, build prototypes and generally expand my knowledge on the subject.
        </p>  
        <p>
          Given my background in robotics and my work I tend to think a lot about AI. I try to get a grip on the major problems that we might face in the long term, and what we might to
          mitigate the challenges and risks. 
        </p>
        <p>
          Mostly I try to write content that is accessible to everyone, but once in a while I
          write very technical posts. I will try to make it clear which one is which so you can pick and choose what to read. 
        </p>
        <p>
          Other times I just write about anything that catches my attention. You might find writing on design,
          video games, music, finance or psychology. 
        </p>
        <p>
          I hope you will enjoy the journey. Thank you for reading my work.
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