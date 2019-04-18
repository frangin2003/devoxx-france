<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card color="#fff" class="margin-bottom-space">
        <v-container grid-list-xl>
          <v-layout>
            <v-flex xs2>
              <v-layout row>
                <v-flex xs12> <h3>&nbsp;</h3> </v-flex>
              </v-layout>
              <v-layout row> <v-flex xs12 class="icon"> </v-flex> </v-layout>
            </v-flex>
            <v-flex xs10>
              <v-card-title primary-title>
                <div><div class="headline">&nbsp;</div></div>
              </v-card-title>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
    <v-flex xs12>
      <transition-group name="list-complete" tag="p">
        <v-card
          :key="event.id"
          v-for="(event, index) in events"
          :color="index % 2 == 0 ? '#fff' : '#eee'"
        >
          <v-container grid-list-xl>
            <v-layout>
              <v-flex xs2>
                <v-layout row>
                  <v-flex xs12>
                    <h3>{{ event.id < 10 ? "0" : "" }}{{ event.id }}'</h3>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12 class="icon">
                    <IconsEmpilees
                      v-if="event.type == 'Goal!!'"
                      :icons="[
                        { name: 'panorama_fish_eye' },
                        { name: 'grain', classes: 'moins-large' }
                      ]"
                    ></IconsEmpilees>
                    <v-icon v-if="event.type == 'Changement'" large
                      >swap_vert</v-icon
                    >
                    <v-icon v-if="event.type == 'Mi-temps'" large
                      >alarm_on</v-icon
                    >
                    <v-icon v-if="event.type == 'Fin'" large>alarm_off</v-icon>
                    <v-icon v-if="event.type == 'Touche'" large>launch</v-icon>
                    <v-icon v-if="event.type == 'Faute'" large color="yellow"
                      >insert_drive_file</v-icon
                    >
                    <v-icon v-if="event.type == 'Expulsion!'" large color="red"
                      >insert_drive_file</v-icon
                    >
                    <v-icon v-if="event.type == 'Striker!'" large
                      >accessibility_new</v-icon
                    >
                    <v-icon v-if="event.type == 'Corner'" large>tab</v-icon>
                    <v-icon v-if="event.type == 'Hors-jeu'" large>flag</v-icon>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs10>
                <v-card-title primary-title>
                  <div><div class="headline" v-html="event.message"></div></div>
                </v-card-title>
              </v-flex>
            </v-layout>
          </v-container>
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
          </v-card-actions>
        </v-card>
      </transition-group>
    </v-flex>
  </v-layout>
</template>

<script>
import IconButton from "./IconButton";
import IconsEmpilees from "./IconsEmpilees";

export default {
  name: "Events",
  components: {
    IconButton,
    IconsEmpilees
  },
  data() {
    return {
      favHover: false,
      favSelected: false,
      shareHover: false,
      eventsCopy: []
    };
  },
  computed: {
    events() {
      let events = this.$store.getters.getMatch.events.slice(
        this.eventsCopy.length,
        this.$store.getters.getMatch.events.length
      );
      this.eventsCopy = this.eventsCopy
        .slice()
        .reverse()
        .concat(events)
        .reverse();
      return this.eventsCopy;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.margin-bottom-space {
  margin-bottom: 40px;
}
.icon {
  padding-top: 2px !important;
  padding-left: 5px !important;
}
</style>
