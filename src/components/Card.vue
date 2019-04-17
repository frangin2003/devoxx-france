<template>
  <v-badge
      overlap
      :color="number > 0?'orange':'grey'"
    >
          <template v-slot:badge>
        <span>{{ number > 0? number : 0 }}</span>
      </template>
        <v-icon large :color="couleur">insert_drive_file</v-icon>
        </v-badge>
</template>

<script>
export default {
  name: "Card",
  props: ['couleur','equipe'],
  computed: {
    number() {
      return this.$store.getters.getMatch[`team${this.equipe}`][this.couleur];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
