<template>
  <v-card
    class="primary-card mx-1"
    :elevation="$vuetify.breakpoint.mobile ? 0 : 6"
    color="bg"
    :min-width="getMinWidth()"
    :max-width="getMaxWidth()"
    :min-height="getMinHeight()"
    :max-height="getMaxHeight()"
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
    <v-divider class="mt-4" v-if="this.$slots.buttons"/>
    <slot name="buttons">
    </slot>
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

    minWidth: [ Number, String ],
    minHeight: [ Number, String ],
    maxWidth: [ Number, String ],
    maxHeight: [ Number, String ],
  },
  methods: {
    getMinWidth() {
      if (this.minWidth) return this.minWidth;

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
    getMaxWidth() {
      if (this.maxWidth) return this.maxWidth;

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
    getMinHeight() {
      if (this.minHeight) return this.minHeight;

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
    getMaxHeight() {
      if (this.maxHeight) return this.maxHeight;

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
