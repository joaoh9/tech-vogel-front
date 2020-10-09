'<template>
  <v-card class="pa-4 px-12" elevation="3" color="bg" :min-width="getMinWidth()">
    <div class="d-flex justify-space-between">
      <div>
        <div class="d-flex flex-column">
          <span class="overline">Posted x days ago</span>
          <h5 class="h5-bold">{{ job.title }}</h5>
          <div class="d-flex justify-space-between">
            <icon-text
              v-for="(item, i) in getIconInfo()"
              :key="i"
              :icon="item.icon"
              :text="item.text"
            />
          </div>
        </div>
      </div>
      <div class="d-flex justify-center align-center">
        <g-btn type="primary" label="View Details" @click="goToJobDetails" />
      </div>
    </div>
  </v-card>
</template>

<script>
import IconText from 'Components/Interface/IconText';
export default {
  name: 'listJobs',
  props: {
    job: {
      type: Object,
    },
    company: {
      type: Object,
    },
  },
  components: {
    IconText,
  },
  mounted() {
    console.log('this.job');
    console.log(this.job);
    console.log('this.company');
    console.log(this.company);
  },
  methods: {
    goToJobDetails() {
      this.$router.push({
        path: `/jobs/${this.company.companyId}/${this.job.id}`,
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
          text: this.$t(`Dictionary.contractType.${this.job.contractType}`),
        },
      ];
    },
  },
};
</script>

<style></style>
