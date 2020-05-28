<template>
  <v-row class="justify-content-center text-center mt-6">
    <v-col lg="2" md="2">
      <job-dashboard />
    </v-col>
  </v-row>
</template>

<script>
import JobDashboard from './JobDashboard.vue';

export default {
  name: 'Job Description',
  components: {
    JobDashboard,
  },
};
</script>

<style>
</style>
