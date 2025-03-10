<template>
  <div>
    <PrimaryHeader
      v-if="editMode"
      :title="$t('job.confirmJob.title')"
      :subtitle="$t('job.confirmJob.subtitle')"
      :cols="true"
    >
      <div class="d-flex justify-center mt-8">
        <g-btn
          @click="goBackAndEdit()"
          class="mx-12"
          type="outline"
          color="light"
          :label="$t('common.backChange')"
        />
        <g-btn
          @click="runAction()"
          type="outline"
          color="light"
          textColor="secondary"
          :label="savedJobId ? $t('common.confirmEdit') : $t('common.postJob')"
        />
      </div>
    </PrimaryHeader>
    <div class="container mt-6 px-10 px-sm-5">
      <v-row justify="center">
        <v-col cols="12" lg="8" xl="9" style="max-width: 1000px">
          <p class="overline">{{ getTimePosted() }}</p>
          <h4 class="h4-bold text-capitalize">{{ job.title }}</h4>
          <h6 class="h6">{{ $t('common.at') + ' ' }} {{ company.name }}</h6>
          <div class="my-8">
            <v-card
              color="bg"
              :class="!$vuetify.breakpoint.smAndUp ? 'bs-none' : 'bs-primary pa-6'"
            >
              <SkillPresentation :skills="job.skills" />
            </v-card>
          </div>
          <h4 class="h4-bold-alternative">{{ $t('job.details.description') }}</h4>
          <div class="bdy-1 d-block mt-4" v-html="job.description"></div>
          <h4 v-if="job.perks" class="h4-bold-alternative mt-4">{{ $t('job.details.perks') }}</h4>
          <div class="bdy-1 d-block mt-4" v-html="job.perks"></div>
        </v-col>
        <v-col cols="12" lg="4" xl="3">
          <JobApplicationCard
            :applyButton="applyButton"
            :userApplied="job.applied"
            :editMode="editMode"
            :job="job"
            :company="company"
          />
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
import StorageHelper from 'Helpers/storage';

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
    savedJobId: {
      type: String,
      default: '',
    },
    applyButton: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    SkillPresentation,
    PrimaryHeader,
    JobApplicationCard,
  },
  mounted() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
    this.companyId = this.$route.params.companyId;
    this.jobId = this.$route.params.jobId;

    if (this.job_ && this.company_) {
      this.job = this.job_;
      this.company = this.company_;
    } else {
      this.getJobData();
      this.getCompanyData();
    }
    console.log('applyButton', this.applyButton);
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
        this.$toast.error(this.$t('toast.error.companyData', { companyId: this.companyId }));
      }
    },
    async getJobData() {
      const jobController = new JobController();

      try {
        this.job = await jobController.getById(this.jobId);
      } catch (e) {
        this.$toast.error(this.$t('toast.error.jobData', { jobId: this.jobId }));
      }
    },
    getTimePosted() {
      if (this.editMode) {
        return this.$t('common.postedNow');
      } else {
        return DateHelper.format(this.job.createdAt);
      }
    },
    runAction() {
      return this.savedJobId ? this.editJob() : this.saveJob();
    },
    async saveJob() {
      const jobController = new JobController();

      try {
        const { applications: _, ...updates } = this.job;
        const savedJob = await jobController.save({ ...updates, status: 'enabled' });
        StorageHelper.saveState('jobId', savedJob.id);
        this.$toast.success(this.$t('toast.success.jobSaved'));

        this.$router.push({
          path: '/company/dashboard',
        });
      } catch (e) {
        this.$toast.warning(this.$t('toast.error.saveJob'));
      }
    },
    async editJob() {
      const jobController = new JobController();

      try {
        const { applications: _, ...updates } = this.job;
        await jobController.update(this.savedJobId, { ...updates, status: 'enabled' });
        this.$toast.success(this.$t('toast.success.jobEdit'));
        this.$router.push({
          path: '/company/dashboard',
        });
      } catch (e) {
        this.$toast.warning(this.$t('toast.error.saveJob'));
      }
    },
    async goBackAndEdit() {
      const jobController = new JobController();
      try {
        if (this.savedJobId) {
          const { applications: _, ...updates } = this.job;
          const savedJob = await jobController.update(this.savedJobId, {
            ...updates,
            status: 'waiting-confirmation',
          });

          this.$router.push(`/jobs/edit/${savedJob.id}`);
        } else {
          const savedJob = await jobController.save({
            ...this.job,
            status: 'waiting-confirmation',
          });

          this.$router.push(`/jobs/edit/${savedJob.id}`);
        }
      } catch (e) {
        this.$toast.warning(this.$t('toast.error.saveJob'));
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
