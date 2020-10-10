<template>
  <div
    style="min-height:100vh;"
    class="container-fluid d-flex flex-column align-center justify-center"
  >
    <h1 class="mb-3">Tech Vogel</h1>
    <h4 class="mx-5 mb-5 color-white">
      We connect I.T. professionals from around the globe to companies looking for remote employees.
    </h4>
    <div>
      <v-row claess="">
        <v-col cols="12" md="6">
          <g-btn-primary label="I want to hire" to="/signup" />
        </v-col>
        <v-col cols="12" md="6">
          <g-btn-primary label="I'm looking for a job" to="/signup" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import backgroudCompanies from 'Assets/office-wp-1.jpg';
import backgroudProfessionals from 'Assets/office-wp-2.jpg';

export default {
  name: 'Home',
  data() {
    return {
      backgroudCompanies,
      backgroudProfessionals,
    };
  },
};
</script>

<style scoped>
h1 {
  color: white !important;
  font-weight: bold;
}
h6 {
  color: white;
}
</style>
