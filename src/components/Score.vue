<template>
  <v-toolbar id="score-board-toolbar" color="light-green" fixed height=160>
    <v-container grid-list-md text-xs-center>
    <!-- align-center vertical aligns -->
    <v-layout row wrap align-center>
      <v-flex xs3>
        <h2>{{ equipe1.toUpperCase() }}</h2>
      </v-flex>
      <v-flex xs2>
        <img
          width="60"
          :src="'https://www.tinygraphs.com/labs/isogrids/hexa16/'+equipe1+'?theme=bythepool&numcolors=4&size=220&fmt=svg'"
        >
      </v-flex>
      <v-flex xs2>
        <h1>{{ score1 }} - {{ score2 }}</h1>
      </v-flex>
      <v-flex xs2>
        <img
          width="60"
          :src="'https://www.tinygraphs.com/labs/isogrids/hexa16/'+equipe2+'?theme=heatwave&numcolors=4&size=220&fmt=svg'"
        >
      </v-flex>
      <v-flex xs3>
        <h2>{{ equipe2.toUpperCase() }}</h2>
      </v-flex>
    </v-layout>
    <v-layout row wrap align-center>
      <v-flex xs1>
      <Card equipe="1" couleur="yellow"></Card>
      </v-flex>
      <v-flex xs1>
        <Card equipe="1" couleur="red"></Card>
      </v-flex>
      <v-flex xs8>
      </v-flex>
      <v-flex xs1>
        <Card equipe="2" couleur="yellow"></Card>
        </v-flex>
        <v-flex xs1>
        <Card equipe="2" couleur="red"></Card>
        </v-flex>
      </v-flex>
      </v-layout>
      </v-container>
  </v-toolbar>
</template>

<script>
import Card from './Card';

export default {
  name: "Score",
    components: {
    Card
  },
  computed: {
    equipe1() {
      return this.$store.getters.getMatch.team1.name;
    },
    equipe2() {
      return this.$store.getters.getMatch.team2.name;
    },
    score1() {
      return this.$store.getters.getMatch.team1.goals;
    },
    score2() {
      return this.$store.getters.getMatch.team2.goals;
    },
    jaune1() {
      return this.$store.getters.getMatch.team1.yellow;
    },
    jaune2() {
      return this.$store.getters.getMatch.team2.yellow;
    },
    rouge1() {
      return this.$store.getters.getMatch.team1.red;
    },
    rouge2() {
      return this.$store.getters.getMatch.team2.red;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*
http://www.colorzilla.com/gradient-editor/
https://www.cssmatic.com/noise-texture
*/

h1 {
  font-size: 4em;
  color: white;
}

h2 {
  font-size: 2em;
  color: white;
}

#score-board-toolbar {
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#b4ddb4+0,83c783+17,52b152+33,008a00+67,005700+83,002400+100;Green+3D+%231 */
background: #b4ddb4; /* Old browsers */
background: -moz-linear-gradient(top, #b4ddb4 0%, #83c783 17%, #52b152 33%, #008a00 67%, #005700 83%, #002400 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top, #b4ddb4 0%,#83c783 17%,#52b152 33%,#008a00 67%,#005700 83%,#002400 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom, #b4ddb4 0%,#83c783 17%,#52b152 33%,#008a00 67%,#005700 83%,#002400 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b4ddb4', endColorstr='#002400',GradientType=0 ); /* IE6-9 */
}
</style>
