<template>
  <v-card
    class="primary-card mx-1"
    :elevation="$vuetify.breakpoint.mobile ? 0 : 6"
    color="bg"
    :min-width="minWidth()"
    :max-width="maxWidth()"
    :min-height="minHeight()"
    :max-height="maxHeight()"
  >
    <v-row justify="center">
      <v-col cols="1" md="2" />
      <v-col cols="10" md="8">
        <slot name="card-header" />
        <slot name="card-content" />
        <v-divider class="mt-4" />
        <slot name="buttons" />
      </v-col>
      <v-col cols="1" md="2" />
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'g-card',
  props: {
    lg: Number,
    md: Number,
    sm: Number,
    base: Number,

    maxlg: Number,
    maxmd: Number,
    maxsm: Number,
    maxbase: Number,

    minheigthlg: Number,
    minheigthmd: Number,
    minheigthsm: Number,
    minheigthbase: Number,

    maxheightlg: Number,
    maxheightmd: Number,
    maxheightsm: Number,
    maxheightbase: Number,
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
    maxWidth() {
      if (this.$vuetify.breakpoint.lgAndUp) {
        return this.maxlg || 1000;
      }
      if (this.$vuetify.breakpoint.mdAndUp) {
        return this.maxmd || 800;
      }
      if (this.$vuetify.breakpoint.smAndUp) {
        return this.maxsm || 320;
      }
      return this.maxbase;
    },
    minHeight() {
      if (this.$vuetify.breakpoint.lgAndUp) {
        return this.minheigthlg;
      }
      if (this.$vuetify.breakpoint.mdAndUp) {
        return this.minheigthmd;
      }
      if (this.$vuetify.breakpoint.smAndUp) {
        return this.minheigthsm;
      }
      return this.minheigthbase;
    },
    maxHeight() {
      if (this.$vuetify.breakpoint.lgAndUp) {
        return this.maxheightlg;
      }
      if (this.$vuetify.breakpoint.mdAndUp) {
        return this.maxheightmd;
      }
      if (this.$vuetify.breakpoint.smAndUp) {
        return this.maxheightsm;
      }
      return this.maxheightbase;
    },
  },
};
</script>

<style></style>
