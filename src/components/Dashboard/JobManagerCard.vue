'<template>
  <v-card class="border-primary bs-primary pa-4 px-12 mt-6" color="bg" :min-width="getMinWidth()">
    <v-row>
      <v-col cols="8">
        <div class="d-flex flex-column">
          <span class="overline">{{ $t('job.posted') }} {{ getDaysAgo() }}</span>
          <h5 class="h5-bold">{{ job.title }}</h5>
          <span class="caption-1 color-primary"> {{ $t('job.seeReport') }} ></span>
        </div>
      </v-col>
      <v-col cols="1">
        <v-divider vertical />
      </v-col>
      <v-col cols="3">
        <div class="d-flex justify-center flex-column align-center">
          <g-btn type="text" color="primary" :label="$t('job.see')" @click="goToJobDetails" />
          <g-btn type="text" color="primary" :label="$t('job.edit')" @click="editJob" />
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>

import DateHelper from 'Helpers/date';

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
        path: `/jobs/${this.company.id}/${this.job.id}`,
      });
    },
    editJob() {
      this.$router.push({
        name: 'New Job',
        params: { job: this.job, editingJobPosted: true },
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
    getDaysAgo() {
      return DateHelper.format(new Date(this.job.createdAt));
    },
  },
};

</script>

<style></style>
