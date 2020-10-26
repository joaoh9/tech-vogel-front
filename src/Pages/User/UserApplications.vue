<template>
  <div class="container-fluid mx-12">
    <v-row>
      <v-col md="4" cols="12">
        <v-card color="bg">
          <v-card-text>
            <div class="d-flex flex-column align-stretch text-left flex-grow-0">
              <v-btn text block color="primary" to="dashboard">
                <v-icon left>
                  fa-angle-left
                </v-icon>
                {{ $t('user.applications.returnToDashboard') }}</v-btn
              >
              <div v-for="key in Object.keys($t('user.applications.actions'))" v-bind:key="key">
                <v-btn v-if="!$vuetify.breakpoint.mobile" text block left color="primary">
                  {{ $t('user.applications.actions.' + key) }}</v-btn
                >
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col md="8" cols="12">
        <div>
          <div class="mt-5 mb-12">
            <h4>{{ $t('user.applications.title') }}</h4>
          </div>
          <div v-for="(jobApplication, index) in jobApplications" v-bind:key="index">
            <v-card color="bg" class="primary-card my-5">
              <v-card-text>
                <v-row>
                  <v-col cols="2" v-if="!$vuetify.breakpoint.mobile">
                    <v-avatar size="90">
                      <v-img
                        v-if="jobApplication.job.company.profilePhoto"
                        :src="jobApplication.job.company.profilePhoto"
                        alt="Profile photo"
                      />
                      <v-icon v-else>
                        fa-users
                      </v-icon>
                    </v-avatar>
                  </v-col>
                  <v-col cols="12" md="6" class="d-flex flex-column justify-space-between">
                    <h5>{{ jobApplication.job.title }}</h5>
                    <div class="d-flex space-between flex-fill align-center">
                      <icon-text
                        icon="fa-building"
                        :text="(jobApplication.job.company || {}).name"
                      />
                      <icon-text
                        icon="fa-briefcase"
                        :text="
                          $t('enums.contractType').find(
                            ct => ct.value === jobApplication.job.contractType
                          ).text
                        "
                      />
                    </div>
                  </v-col>
                  <v-col
                    cols="12"
                    md="4"
                    class="d-flex flex-column justify-center align-stretch text-center"
                  >
                    <div>{{ $tc('user.applications.job.period', 1) }}</div>
                    <div class="d-flex justify-center">
                      <icon-text
                        size="10"
                        icon="fa-circle"
                        color="primary"
                        :text="jobApplication.application.status.stage"
                      />
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import JobController from 'Controllers/job';
import CompanyController from 'Controllers/company';
import StorageHelper from 'Helpers/storage';
import IconText from 'Components/Interface/IconText';

export default {
  name: 'UserApplications',
  data() {
    return {
      jobApplications: [],
    };
  },
  components: {
    IconText,
  },
  mounted() {
    this.loadUserFromStorage();
    this.getJobs();
  },
  methods: {
    loadUserFromStorage() {
      const userInfo = StorageHelper.loadState('user');
      if (!userInfo) {
        this.$toast.error('Could not retrieve user info. Please login again');
        this.$router.push({
          path: '/login',
        });
      }
      this.user = userInfo;
    },
    async getJobs() {
      const jobController = new JobController();
      try {
        const jobs = await jobController.getAll();
        const reducer = (jobs, job) => {
          const application = (job.jobApplications || []).find(application => {
            return application.username === 'brenoam';
          });
          if (application) {
            job.company = job.company || {};
            jobs.push({ job: job, application: application });
          }
          return jobs;
        };
        this.jobApplications = jobs.reduce(reducer, []);

        await this.getCompanyInfo();
        this.finishedRequests = true;
      } catch (e) {
        this.$toast.error(this.$t('job.list.error'));
      }
    },
    async getCompanyInfo() {
      const companyController = new CompanyController();
      try {
        for (let i = 0; i < this.jobApplications.length; i++) {
          this.jobApplications[i].job.company = await companyController.getById(
            this.jobApplications[i].job.companyId,
          );
        }
      } catch (e) {
        this.$toast.error('Something when wrong when getting company info for a job');
      }
    },
    goToApplications: function() {},
    goToFindJobs: function() {
      this.$router.push('/jobs/new');
    },
    goToEditProfile: function() {
      this.$router.push('/resume/new');
    },
    goToManageCredits: function() {},
  },
};
</script>

<style>
.text-icon {
  padding-right: 0.5em;
  float: left;
}
</style>
