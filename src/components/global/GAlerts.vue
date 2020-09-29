<template>
  <div class="d-flex flex-wrap justify-center mt-6">
    <v-alert
      transition="scroll-y-transition"
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
      transition="scroll-y-transition"
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
  mounted() {
    this.succesMess = this.succesMessage;
    this.errorMess = this.errorMessage;
    this.success = this.successVar;
    this.error = this.errorVar;
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
      if (this.success) {
        setTimeout(() => {
          this.success = false;
        }, 10 * 1000);
      }
    },
    errorVar() {
      this.error = this.errorVar;
      if (this.error) {
        setTimeout(() => {
          this.error = false;
        }, 10 * 1000);
      }
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
