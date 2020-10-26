<template>
  <div class="d-flex">
    <v-card class="px-16 job-card-mobile">
      <div class="d-flex align-center justify-center flex-column mt-6">
        <span class="overline primary--text">{{ getJobInformation() }}</span>
        <h5 class="pa-0 my-2">{{ job.title }}</h5>

        <div class="d-flex">
          <div class="d-flex align-center">
            <IconText
              v-for="(item, index) in getIconInfo()"
              :key="index"
              :icon="item.icon"
              :text="item.text"
              textSize="bdy-2"
            />
          </div>
        </div>
        <div class="d-flex justify-center align-center my-8">
          <g-btn type="primary" label="View Details" @click="goToJobDetails" />
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import IconText from 'Components/Interface/IconText';
import CompanyController from 'Controllers/company';

export default {
  name: 'JobCardMobile',
  components: {
    IconText,
  },
  props: {
    job: {
      type: Object,
    },
  },
  mounted() {
    this.getCompanyInfo();
  },
  data() {
    return {
      company: {},
    };
  },
  methods: {
    currencyConverter() {
      return this.$t(`Dictionary.currency.${this.job.salary.currency}`);
    },
    getJobInformation() {
      return (
        this.$n(`${this.job.salary.min}`, 'currency', this.currencyConverter()) +
        `/${this.$t(`enums.dictionary.payCheckTimeFrame.${this.job.salary.timeFrame}`)}` +
        ' | ' +
        this.$t('Job.jobType.title').toUpperCase()
      );
    },
    getIconInfo() {
      return [
        {
          icon: 'mdi-domain',
          text: this.job.companyName,
        },
        {
          icon: 'mdi-wallet-travel',
          text: this.$t(`enums.dictionary.contractType.${this.job.contractType}`),
        },
      ];
    },
    async getCompanyInfo() {
      const companyController = new CompanyController();
      try {
        this.company = await companyController.getById(this.job.companyId);
      } catch (e) {
        this.$toast.error('Something when wrong when getting company info for a job');
      }
    },
    goToJobDetails() {
      this.$router.push({
        path: `/jobs/${this.company.companyId}/${this.job.id}`,
      });
    },
  },
};
</script>

<style></style>
