<template>
  <v-card elevation="6" color="bg" min-width="600" max-width="600">
    <div class="d-flex justify-center ma-12" style="flex-direction: column">
      <h4 class="h4-bold align-self-center">{{ title }}</h4>
      <spam class="caption align-self-center" style="color: #A1A1AC">
        {{ description || '' }}
      </spam>
      <slot name="content" />
    </div>
  </v-card>
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
