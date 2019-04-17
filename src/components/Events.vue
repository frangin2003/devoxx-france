<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card height="135" color="white" class="white--text"> </v-card>
    </v-flex>
    <v-flex xs12>
      <v-card color="#ddd" class="dark--text">
        <v-layout>
          <v-flex xs2>
            <v-icon large>swap_vert</v-icon>changement
            <v-icon large>alarm_on</v-icon>coup d'envoi
            <v-icon large>alarm_off</v-icon>fin du match
            <v-icon large>launch</v-icon>
            <v-icon large>thumb_down</v-icon>
            <v-icon large>not_interested</v-icon>
            <v-icon large>language</v-icon>
            <v-icon large>group_work</v-icon>
            <span class="empilement">
              <v-icon large class="empile">panorama_fish_eye</v-icon>
              <v-icon large class="empile moins-large">grain</v-icon>
            </span>
            <v-icon large>accessibility_new</v-icon>
            <v-icon large>tab</v-icon>corner <v-icon large>flag</v-icon>hors jeu
            <v-icon large>child_care</v-icon>
            <v-icon large>sentiment_very_satisfied</v-icon>
            <v-icon large>sentiment_very_dissatisfied</v-icon>
          </v-flex>
          <v-flex xs10>
            <v-card-title primary-title>
              <div>
                <div class="headline">Supermodel</div>
                <div>Foster the People</div>
                <div>(2014)</div>
              </div>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider light></v-divider>
        <v-card-actions class="pa-3">
          <v-spacer></v-spacer>
          <IconButton
            icon="favorite_border"
            iconSelected="favorite"
            colorHover="pink"
            colorSelected="pink"
            hasSelection
            tooltip="Aimer"
            tooltipSelected="Détester"
            animation="heart-beat"
          ></IconButton>
          <IconButton
            icon="share"
            colorHover="blue"
            tooltip="Partager"
          ></IconButton>

          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-icon
                v-on="on"
                class="hand"
                @mouseover="shareHover = true;"
                @mouseleave="shareHover = false;"
                :color="shareHover ? 'blue' : 'dark-grey'"
                >share</v-icon
              >
            </template>
            <span>Partager</span>
          </v-tooltip>
        </v-card-actions>
      </v-card>
    </v-flex>

    <v-flex xs12>
      <v-card color="white" class="dark--text">
        <v-layout row>
          <v-flex xs7>
            <v-card-title primary-title>
              <div>
                <div class="headline">Halycon Days</div>
                <div>Ellie Goulding</div>
                <div>(2013)</div>
              </div>
            </v-card-title>
          </v-flex>
          <v-flex xs5>
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
              height="125px"
              contain
            ></v-img>
          </v-flex>
        </v-layout>
        <v-divider light></v-divider>
        <v-card-actions class="pa-3"
          >Rate this album
          <v-spacer></v-spacer>
          <v-icon>md-star</v-icon>
          <v-icon>star_border</v-icon>
          <v-icon>star_border</v-icon>
          <v-icon>star_border</v-icon>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import IconButton from "./IconButton";

export default {
  name: "Events",
  components: {
    IconButton
  },
  props: {
    msg: String
  },
  data() {
    return {
      favHover: false,
      favSelected: false,
      shareHover: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.empilement {
  position: relative;
  display: block;
  width: 35px;
  height: 35px;
}
.empile {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
}
.moins-large {
  font-size: 32px !important;
}
.hand {
  cursor: pointer;
}
.heart-beat {
  animation: beat 1.5s infinite;
  animation-fill-mode: forwards;
}

@keyframes beat {
  0% {
    transform: scale(0.6);
  }
  25% {
    transform: scale(0.8);
  }
  40% {
    transform: scale(0.6);
  }
  60% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(0.6);
  }
}
</style>
