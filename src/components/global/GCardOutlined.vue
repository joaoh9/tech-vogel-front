<template>
  <v-card
    class="pa-10 rounded-20"
    color="bg"
    :style="`border-color: ${borderColor} !important`"
    outlined
    :max-width="$vuetify.breakpoint.mobile ? '300' : '350'"
  >
    <slot name="default" />
  </v-card>
</template>

<script>
export default {
  name: 'g-card-outlined',
  props: {
    borderColor: String,
  },
};
</script>

<style>
.rounded-20 {
  border-radius: 20px !important;
}
</style>
