<template>
  <span class="empilement">
    <v-icon v-for="icon in icons" large :class="`empile ${icon.classes}`">{{
      icon.name
    }}</v-icon>
  </span>
</template>

<script>
export default {
  name: "IconsEmpilees",
  props: {
    icons: Array
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
</style>
