<template>
  <v-card
    class="pa-10 rounded-20"
    color="bg"
    :style="`border-color: ${borderColor} !important`"
    outlined
  >
    <slot name="default" />
  </v-card>
</template>

<script>
export default {
  name: 'g-card-outlined',
};
</script>

<style>
.rounded-20 {
  border-radius: 20px !important;
}
</style>
