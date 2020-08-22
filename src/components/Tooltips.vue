<template>
  <v-tooltip :class="`v-tooltip--${this.position}`" >
    <template v-slot:activator="{on, attrs}">
      <v-icon v-on="on" v-bind="attrs" class="ml-2">mdi-information-outline</v-icon>
    </template>
    <span>{{text}}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'Tooltip',
  props: {
    position: {
      type: String,
    },
    text: {
      type: String,
    },
    iconClass: {
      type: String,
    },
  },
};
</script>

<style>
</style>
