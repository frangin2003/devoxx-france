<template>
  <v-tooltip top>
    <template v-slot:activator="{ on }">
      <v-icon
        v-on="on"
        :class="`hand ${!selected && hover ? animation : ''}`"
        @click="hasSelection ? (selected = !selected) : '';"
        @mouseover="hover = !selected;"
        @mouseleave="hover = selected;"
        :color="selected || hover ? colorHover : color"
        >{{ selected || hover ? iconSelection : icon }}</v-icon
      >
    </template>
    <span>{{ !selected ? tooltip : tooltipSelected }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: "IconButton",
  props: {
    icon: String,
    iconSelected: {
      default: null,
      type: String
    },
    color: {
      default: "dark-grey",
      type: String
    },
    colorHover: {
      default: "dark-grey",
      type: String
    },
    colorSelected: {
      default: "",
      type: String
    },
    hasSelection: {
      default: false,
      type: Boolean
    },
    tooltip: String,
    tooltipSelected: {
      default: "",
      type: String
    },
    animation: {
      default: "",
      type: String
    }
  },
  data() {
    return {
      hover: false,
      selected: false,
      iconSelection: null
    };
  },
  mounted() {
    this.iconSelection = this.iconSelected;
    !this.iconSelected && (this.iconSelection = this.icon);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
