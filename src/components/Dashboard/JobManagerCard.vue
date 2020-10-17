'<template>
  <v-card class="pa-4 px-12 mt-6" elevation="6" color="bg" :min-width="getMinWidth()">
    <v-row>
      <v-col cols="7">
        <div class="d-flex flex-column">
          <span class="overline">Posted x days ago</span>
          <h5 class="h5-bold">{{ job.title }}</h5>
          <!-- TODO: interncaionalização -->
          <span class="caption-1 color-primary">See report ></span>
        </div>
      </v-col>
      <v-col cols="1">
        <v-divider vertical />
      </v-col>
      <v-col cols="4">
        <div class="d-flex justify-center flex-column align-center">
          <g-btn type="text" color="primary" label="See Job >" @click="goToJobDetails" />
          <g-btn type="text" color="primary" label="Edit Job" @click="editJob" />
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'JobManagerCard',
  props: {
    job: {
      type: Object,
    },
    company: {
      type: Object,
    },
  },
  methods: {
    goToJobDetails() {
      this.$router.push({
        path: `/jobs/${this.company.companyId}/${this.job.id}`,
      });
    },
    editJob() {
      this.$router.push({
        path: '/jobs/new',
        params: { job: this.job },
      });
    },
    getMinWidth() {
      if (this.$vuetify.breakpoint.lgAndUp) {
        return 870;
      }
      if (this.$vuetify.breakpoint.mdAndUp) {
        return 660;
      }
      if (this.$vuetify.breakpoint.smAndUp) {
        return 500;
      }
      return 500;
    },
    getIconInfo() {
      return [
        {
          icon: 'mdi-office-building',
          text: this.company.name,
        },
        {
          icon: 'mdi-briefcase-variant-outline',
          text: this.$t(`enums.contractType.${this.job.contractType}`),
        },
      ];
    },
  },
};
</script>

<style></style>
