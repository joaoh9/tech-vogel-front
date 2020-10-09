<template>
  <div>
    <v-parallax
      style="opacity: 60%; background-color: black"
      height="250"
      src="https://suzanadeoliveira.com/wp-content/uploads/2017/06/Google-Office-HD-Wallpapers-Backgrounds-Wallpaper-Abyss-scaled.jpg"
    />
    <div class="container mt-6 px-10 px-md-5">
      <v-row justify="center">
        <v-col cols="12" lg="8" xl="9" style="max-width: 1000px">
          <p class="overline">Posted 5 days ago</p>
          <h4 class="h4-bold">{{ job.title }}</h4>
          <h6 class="h6">At {{ company.name }}</h6>
          <div></div>
          <div class="body-1 d-block mt-4" v-html="job.description"></div>
        </v-col>
        <v-col cols="12" lg="4" xl="3" class="mt-6">
          <v-card max-width="620px" width="100%" class="px-4" elevation="3" color="bg">
            <v-card-text>
              <v-row>
                <v-icon>fa fa-briefcase</v-icon>
                <v-card-subtitle>{{ job.experienceLevel }}</v-card-subtitle>
              </v-row>
              <v-row>
                <v-icon>far fa-clock</v-icon>
                <v-card-subtitle>{{ job.contractType }}</v-card-subtitle>
              </v-row>
              <v-row>
                <v-icon>fas fa-globe-americas</v-icon>
                <v-card-subtitle v-for="lan of job.languages" :key="lan">{{ lan }}</v-card-subtitle>
              </v-row>
              <v-row v-if="job.salary">
                <v-icon class="ml-1">fas fa-dollar-sign</v-icon>
                <v-card-subtitle class="ml-2">{{ job.salary.price }}</v-card-subtitle>
              </v-row>
              <v-row justify="center" class="mt-3">
                <v-btn large color="primary" width="98%">
                  Apply For this position
                </v-btn>
              </v-row>
              <v-divider class="mt-4" />
              <v-row class="mt-5">
                <div class="d-flex">
                  <v-avatar height="80" width="80" color="cinza-lighten-2" class="ml-1"> </v-avatar>
                  <div class="d-flex justify-center ml-4" style="flex-direction: column">
                    <h6>{{ company.name }}</h6>
                    <v-card-subtitle class="body-2 ma-n3 "
                      >Job managed by {{ company.manager }}</v-card-subtitle
                    >
                  </div>
                </div>
              </v-row>
              <v-row class="mt-4">
                <v-col cols="12">
                  <h6>About the company</h6>
                </v-col>
                <v-card-subtitle
                  class="mt-n4 body-1 d-block"
                  v-for="ab of company.about.split('\n')"
                  :key="ab"
                >
                  {{ ab }}
                </v-card-subtitle>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import CompanyController from 'Controllers/company';
import JobController from 'Controllers/job';

export default {
  name: 'JobDescription',
  props: {
    confirm: Boolean,
  },
  mounted() {
    this.companyId = this.$route.params.companyId;
    this.jobId = this.$route.params.jobId;
    this.getJobData();
    this.getCompanyData();
  },
  data() {
    return {
      jobId: '',
      job: {},
      companyId: '',
      company: {},
    };
  },
  methods: {
    async getCompanyData() {
      const companyController = new CompanyController();

      try {
        this.company = await companyController.getById(this.companyId);
      } catch (e) {
        this.companyError = true;
      }
    },
    async getJobData() {
      const jobController = new JobController();

      try {
        this.job = await jobController.getById(this.jobId);
      } catch (e) {
        this.jobError = true;
      }
    },
  },
};
</script>

<style scoped>
h2 {
  color: #424242 !important;
  margin-top: 1.4rem;
}
p {
  color: #757575 !important;
  margin-top: 0.8rem;
}
</style>
