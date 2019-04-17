/* eslint-disable */
<template>
  <v-app id="score-board">
    <Score></Score>
        <v-content id="scrolling-techniques">
      <v-container fluid fill-height>
    <Events></Events>
    </v-container>
    </v-content>
  </v-app>

</template>

<script>
import Score from "./Score";
import Events from "./Events";

export default {
  name: "ScoreBoard",
  data() {
    return {
      page: 1
    };
  },
  components: {
    Score,
    Events
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
