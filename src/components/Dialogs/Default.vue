<template>
  <div class="d-flex justify-center">
    <v-card max-width="700" class="d-flex flex-column justify-center pa-16">
      <v-btn class="align-self-end mt-n8" text large @click="$emit('close')">X</v-btn>
      <v-img
        class="align-self-center mb-6"
        v-if="img"
        max-height="200"
        max-width="200"
        :src="img"
      />
      <h5 class="text-center">{{ title }}</h5>
      <p class="subtitle-1 text-center">{{ subtitle }}</p>
      <g-btn :type="btnType" :label="btnText" @click="$emit('confirm')" />
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Default dialog',
  props: {
    img: [ String, Object ],
    title: String,
    subtitle: String,
    btnType: {
      type: String,
      default: 'primary',
    },
    btnText: String,
  },
};
</script>

<style></style>
