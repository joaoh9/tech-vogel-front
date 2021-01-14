<template>
  <div class="d-flex justify-center container">
    <v-card width="700" max-height="700" class="d-flex flex-column pa-6" elevation="0">
      <v-btn class="align-self-end" color="primary" text large @click="$emit('close')">
        X
      </v-btn>
      <v-img class="align-self-center" v-if="img" height="250" width="250" :src="img" />
      <div class="d-flex align-center justify-center flex-column mt-6">
        <h4 class=" h4-bold text-center color-secondary">{{ title }}</h4>
        <h5 class=" h5-bold mb-4 second-title text-center">{{ secondTitle }}</h5>
        <sub-1 class="subtitle text-center">{{ subtitle }}</sub-1>
      </div>
      <div class="d-flex align-center flex-column mt-6">
        <g-btn
          v-if="btnType"
          :type="btnType"
          :label="btnText"
          @click="$emit('primary-button-click')"
          class="btn-primary"
        />
        <g-btn
          v-if="secBtnType"
          :type="secBtnType"
          :label="secBtnText"
          @click="$emit('secondary-button-click')"
          class="mt-4 mb-8 btn-primary"
        />
      </div>
    </v-card>
  </div>
</template>

<script>

export default {
  name: 'DefaultDialog',
  props: {
    img: [ String, Object ],
    title: String,
    secondTitle: String,
    subtitle: String,
    btnType: {
      type: String,
      default: 'primary',
    },
    secBtnType: {
      type: String,
      default: 'secondary',
    },
    btnText: String,
    secBtnText: String,
  },
};

</script>

<style scoped></style>
