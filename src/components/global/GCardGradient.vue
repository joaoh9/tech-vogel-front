<template>
  <v-card class="bg-color-primary" color="black">
    <slot name="default" />
  </v-card>
</template>

<script>
export default {
  name: 'g-card-gradient',
  props: {
    color: { type: String, default: 'primary' },
  },
};
</script>
