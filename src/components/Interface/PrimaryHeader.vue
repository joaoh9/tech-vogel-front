<template>
  <v-card color="primary" class="pa-16" flat style="border-radius: 0px !important">
    <h3 class="h3-bold color-light">{{ title }}</h3>
    <h5 class="color-light mt-4">{{ description }}</h5>
    <slot name="default" />
  </v-card>
</template>

<script>
export default {
  name: 'PrimaryHeader',
  props: {
    title: String,
    description: String,
  },
};
</script>

<style></style>
