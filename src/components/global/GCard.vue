<template>
  <v-card
    class="primary-card"
    :elevation="$vuetify.breakpoint.smAndUp ? 6 : 0"
    color="bg"
    max-width="600"
    :min-width="minWidth()"
  >
    <slot name="card-content"> </slot>
  </v-card>
</template>

<script>
export default {
  name: 'g-card',
  props: {
    lg: {
      type: Number,
    },
    md: {
      type: Number,
    },
    sm: {
      type: Number,
    },
    base: {
      type: Number,
    },
  },
  methods: {
    minWidth() {
      if (this.$vuetify.breakpoint.lgAndUp) {
        return this.lg || 1000;
      }
      if (this.$vuetify.breakpoint.mdAndUp) {
        return this.md || 800;
      }
      if (this.$vuetify.breakpoint.smAndUp) {
        return this.sm || 320;
      }
      return this.base || 250;
    },
  },
};
</script>

<style></style>
