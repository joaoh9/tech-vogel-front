<template>
  <!-- <v-card elevation="6" color="bg" min-width="600" max-width="600"> -->
  <div
    :class="`d-flex justify-center ${$vuetify.breakpoint.mdAndUp ? 'ma-12' : 'ma-4'}`"
    style="flex-direction: column; min-height: 40vh"
  >
    <h4 class="h4-bold align-self-center color-secondary">{{ title }}</h4>
    <span class="caption align-self-center color-cinza-lighten-2">
      {{ description || '' }}
    </span>
    <slot name="content" />
  </div>
  <!-- </v-card> -->
</template>

<script>
export default {
  name: 'tab-item-card-template',
  props: {
    title: String,
    description: String,
  },
};
</script>
<style></style>
