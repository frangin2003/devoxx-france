/* eslint-disable */
<template>
  <!--
  <v-app id="score-board">
      <div
    class="hide-overflow"
    style="position: relative;"
  >
  <Score></Score>
      <div
      id="scrolling-techniques"
      class="scroll-y"
      style="max-height: 600px;"
    >
    <GameEvents></GameEvents>
    </div>
    </div>

    
      </v-app>
  -->
  <v-app id="app" toolbar--fixed toolbar style="background: #c9c9c9;">
    <v-toolbar
      :scroll-off-screen="true"
      :scroll-target="'#scrolling-techniques'"
      style="background:#eee;"
    >
      <v-layout>
        <v-toolbar-title>
          <a class="navbar-item">Website Name</a>
        </v-toolbar-title>
      </v-layout>
    </v-toolbar>

    <main>
      <v-toolbar prominent>
        <v-btn flat icon>
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-toolbar-title>
          <h1 class="title mt-0 mb-0">Page {{page}}</h1>
          <h3 class="caption mt-0 mb-0" style="line-height:12px;">Subtitle</h3>
        </v-toolbar-title>
      </v-toolbar>

      <v-flex ref="scroll" class="main-container" id="scrolling-techniques">
        <div class="content" v-if="page === 1">
          <h1 class="display-4">Page 1 Long Content</h1>

          <v-spacer></v-spacer>

          <v-btn @click="scrollToTop">Scroll to Top (Not Working)</v-btn>
          <v-btn @click="changePage(2)">Page 2 (Working)</v-btn>
          <v-btn @click="changePage(3)">Page 3 (Working)</v-btn>
        </div>

        <div class="content" v-if="page === 2">
          <h1 class="display-4">Page 2 Long Content</h1>

          <v-spacer></v-spacer>

          <v-btn @click="scrollToTop">Scroll to Top (Not Working)</v-btn>
          <v-btn @click="changePage(1)">Page 1 (Working)</v-btn>
          <v-btn @click="changePage(3)">Page 3 (Working)</v-btn>
        </div>

        <div class="content short" v-if="page === 3">
          <h1 class="display-2">Page 3 Short Content</h1>
          <p class="body">When content is short its not possible to regain primary toolbar</p>

          <v-btn @click="changePage(1)">Page 1 (Working)</v-btn>
          <v-btn @click="changePage(2)">Page 2 (Working)</v-btn>
        </div>
      </v-flex>
    </main>
  </v-app>
</template>

<script>
import Score from "./Score";
import GameEvents from "./GameEvents";

export default {
  name: "ScoreBoard",
  data() {
    return {
      page: 1
    };
  },
  components: {
    Score,
    GameEvents
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
  max-height: calc(100vh - 64px);
  height: auto;
  overflow-y: auto;
  overflow-x: hidden;
}
.content {
  min-height: 2280px;
}
.content.short {
  min-height: 0;
}
</style>
