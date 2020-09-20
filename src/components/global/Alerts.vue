<template>
  <div class="d-flex flex-wrap justify-center mt-6">
    <v-alert
      :elevation="$vuetify.breakpoint.smAndUp ? 0 : 0"
      color="success"
      max-width="600"
      dark
      :min-width="$vuetify.breakpoint.smAndUp ? 500 : 320"
      v-model="success"
      dismissible
    >
      {{ succesMess }}
    </v-alert>
    <v-alert
      :elevation="$vuetify.breakpoint.smAndUp ? 0 : 0"
      color="error"
      max-width="600"
      dark
      :min-width="$vuetify.breakpoint.smAndUp ? 500 : 320"
      v-model="error"
      dismissible
    >
      {{ errorMess }}
    </v-alert>
  </div>
</template>

<script>
export default {
  name: 'g-alert',
  props: {
    succesMessage: String,
    errorMessage: String,
    successVar: Boolean,
    errorVar: Boolean,
  },
  data() {
    return {
      success: false,
      error: false,
      succesMess: '',
      errorMess: '',
    };
  },
  watch: {
    success() {
      this.$emit('success', this.success);
    },
    error() {
      this.$emit('error', this.error);
    },
    successVar() {
      this.success = this.successVar;
    },
    errorVar() {
      this.error = this.errorVar;
    },
    succesMessage() {
      this.succesMess = this.succesMessage;
    },
    errorMessage() {
      this.errorMess = this.errorMessage;
    },
  },
};
</script>

<style></style>
