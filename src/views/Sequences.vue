<template>
  <PatchMeta title="Sequences" description="Overview of sequences of posts related by a common theme." />
  <div class="container">
    <h1 class="mt-5">Sequences</h1>
    <p>
      A sequence is a series of posts related by a common theme.
      They tie together posts that are related but not necessarily written consecutively. 
      I use sequences to organize my posts into a coherent narrative for your reading please.
      Besides, it's fun to have a theme and stories work like a charm when discussing difficult topics.
    </p>
    <p class="footnote">
      The concept of Sequences are based on the <a href="https://lesswrong.com/library">LessWrong Forum</a> sequences.
    </p>
    <hr class="mb-4"/>
    <SequenceCard
      v-for="sequence in sequencesIndex"
      :key="sequence.id"
      :sequence="sequence"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, PropType } from "vue";
import PatchMeta from "../components/PatchMeta.vue";
import SequenceCard from "../components/SequenceCard.vue";
import { SequencesIndex } from "../types/SequencesIndex";


export default defineComponent({
  components: {
    PatchMeta,
    SequenceCard,
  },
  props: {
    section: {
      type: String,
      default: "",
    }
  },
  setup(props) {
    const sequencesIndex: SequencesIndex[] = inject<SequencesIndex[]>("sequencesIndex", []);

    return {
      sequencesIndex,
    };
  },
});

</script>

<style lang="scss" scoped>
.about {
  font-family: $font-body;
}

.container {
  margin-left: auto;
  max-width: $max-reading-content-width;
}

.footnote {
  font-size: 0.8rem;
  font-style: italic;
  color: $accent-dark;
}
</style>