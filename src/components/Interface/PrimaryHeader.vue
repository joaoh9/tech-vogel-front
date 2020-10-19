<template>
  <v-card color="primary" class="pa-16" flat style="border-radius: 0px !important">
    <v-row v-if="cols">
      <v-col cols="6">
        <h3 class="h3-bold color-light">{{ title }}</h3>
        <h5 class="color-light mt-4">{{ description }}</h5>
      </v-col>
      <v-col cols="6">
        <slot name="default" />
      </v-col>
    </v-row>
    <div v-else>
      <h3 class="h3-bold color-light">{{ title }}</h3>
      <h5 class="color-light mt-4">{{ description }}</h5>
      <slot name="default" />
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'PrimaryHeader',
  props: {
    title: String,
    description: String,
    cols: Boolean,
  },
};
</script>

<style></style>
