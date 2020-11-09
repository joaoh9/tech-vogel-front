<template>
  <div>
    <v-parallax
      style="opacity: 60%; background-color: black"
      height="250"
      v-if="!editMode"
      src="https://suzanadeoliveira.com/wp-content/uploads/2017/06/Google-Office-HD-Wallpapers-Backgrounds-Wallpaper-Abyss-scaled.jpg"
    />
    <PrimaryHeader
      v-if="editMode"
      :title="$t('job.confirmJob.title')"
      :subtitle="$t('job.confirmJob.subtitle')"
      :cols="true"
    >
      <div class="d-flex mt-8">
        <g-btn
          @click="goBackAndEdit"
          class="mx-4"
          type="outline"
          color="light"
          label="Go back & change"
        />
        <g-btn
          @click="runAction"
          type="filled"
          color="light"
          textColor="primary"
          :label="editingJobPosted ? 'Confirm Edit' : 'Post Job'"
        />
      </div>
    </PrimaryHeader>
    <div class="container mt-6 px-10 px-md-5">
      <v-row justify="center">
        <v-col cols="12" lg="8" xl="9" style="max-width: 1000px">
          <p class="overline">{{ getTimePosted() }}</p>
          <h4 class="h4-bold text-capitalize">{{ job.title }}</h4>
          <h6 class="h6">{{ $t('common.at') + ' ' }} {{ company.name }}</h6>
          <div class="my-8">
            <v-card color="bg" :class="$vuetify.breakpoint.mobile ? 'bs-none' : 'bs-primary pa-6'">
              <SkillPresentation :skills="job.skills" />
            </v-card>
            <div class="d-flex align-center justify-center">
              <span v-for="(item, index) in getIcons()" :key="index" class="mx-4 mt-6">
                <v-avatar color="orange" size="40">
                  <v-icon color="white">
                    {{ item.icon }}
                  </v-icon>
                </v-avatar>
                {{ item.text }}
              </span>
            </div>
          </div>
          <h4 class="h4-bold-alternative">Job Description</h4>
          <div class="bdy-1 d-block mt-4" v-html="job.description"></div>
          <h4 class="h4-bold-alternative mt-4">Perks & benefits</h4>
          <div class="bdy-1 d-block mt-4" v-html="job.benefits"></div>
        </v-col>
        <v-col cols="12" lg="4" xl="3" class="mt-6">
          <JobApplicationCard :job="job" :company="company" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import applicationConfirmedImg from 'Assets/application-confirmed.svg';
import CompanyController from 'Controllers/company';
import JobController from 'Controllers/job';
import SkillPresentation from 'Components/Job/SkillPresentation';
import JobApplicationCard from 'Components/Job/JobApplicationCard';
import DateHelper from 'Helpers/date';
import PrimaryHeader from 'Components/Interface/PrimaryHeader';

export default {
  name: 'JobDescription',
  props: {
    selectedJob: Object,
    confirm: Boolean,
    job_: Object,
    company_: Object,
    editMode: {
      type: Boolean,
      default: false,
    },
    editingJobPosted: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    SkillPresentation,
    PrimaryHeader,
    JobApplicationCard,
  },
  mounted() {
    this.companyId = this.$route.params.companyId;
    this.jobId = this.$route.params.jobId;
    if (this.job_ && this.company_) {
      this.job = this.job_;
      this.company = this.company_;
    } else {
      this.getJobData();
      this.getCompanyData();
    }
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  },
  data() {
    return {
      applicationConfirmedImg,
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
        this.$toast.error(`Something went wrong when retrieving company ${this.companyId} data`);
      }
    },
    async getJobData() {
      const jobController = new JobController();

      try {
        this.job = await jobController.getById(this.jobId);
      } catch (e) {
        this.$toast.error(`Something went wrong when retrieving job ${this.jobId} data`);
      }
    },
    getTimePosted() {
      if (this.editMode) {
        return 'Posted just now';
      } else {
        return DateHelper.format(this.job.createdAt);
      }
    },
    runAction() {
      return this.editingJobPosted ? this.editJob() : this.saveJob();
    },
    async saveJob() {
      const jobController = new JobController();

      try {
        await jobController.save(this.job);
        this.$toast.success('Job saved successfully');
        this.$router.push({
          path: '/company/dashboard',
        });
      } catch (e) {
        this.$toast.error('There was an error when saving the job');
      }
    },
    async editJob() {
      const jobController = new JobController();

      try {
        await jobController.patch(this.job);
        this.$toast.success('Job edited successfully');
        this.$router.push({
          path: '/company/dashboard',
        });
      } catch (e) {
        this.$toast.error('There was an error when saving the job');
      }
    },
    goBackAndEdit() {
      this.$router.push({
        name: 'New Job',
        params: {
          job: this.job,
        },
      });
    },
    currencyConverter() {
      return this.$t(`dictionary.currency.${this.selectedJob.salary.currency}`);
    },
    getJobInformation() {
      return (
        this.$n(`${this.selectedJob.salary.min}`, 'currency', this.currencyConverter()) +
        `/${this.$t(`enums.dictionary.payCheckTimeFrame.${this.selectedJob.salary.timeFrame}`)}`
      );
    },
    getIcons() {
      return [
        { icon: 'mdi-currency-usd', text: this.getJobInformation()},
        { icon: 'mdi-clock', text: this.$t(`enums.contractType.${this.selectedJob.contractType}`) },
        { icon: 'mdi-message-outline', text: this.$t('skills.dictionary.techSkills.javaScript') },
      ];
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
