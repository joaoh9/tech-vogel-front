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
          <h6 class="h6">{{ $t('common.at') + ' ' }} {{ company.name }}</h6>
          <v-card color="bg" class="pa-6">
            <SkillPresentation :skills="job.skills" />
          </v-card>
          <div></div>
          <div class="bdy-1 d-block mt-4" v-html="job.description"></div>
        </v-col>
        <v-col cols="12" lg="4" xl="3" class="mt-6">
          <v-card class="px-10 py-6" elevation="3" color="bg">
            <IconText
              v-for="(item, i) in getIconInfo()"
              :key="i"
              :icon="item.icon"
              :text="item.text"
              class="mb-2 ml-n3"
            />
            <v-row justify="center" class="mt-3">
              <v-dialog v-model="apply">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    v-on="on"
                    v-bind="attrs"
                    large
                    color="primary"
                    @click="showConfirmationDialog1 = true"
                  >
                    {{ $t('Job.details.apply') }}
                  </v-btn>
                </template>
                <DefaultDialog
                  v-if="showConfirmationDialog1"
                  :title="$t('Job.apply.title')"
                  :subtitle="$t('Job.apply.subtitle')"
                  :btnType="$t('Job.apply.btnType')"
                  :btnText="$t('Job.apply.btnText')"
                  @close="showConfirmationDialog1 = false"
                  @confirm="
                    showConfirmationDialog1 = false;
                    showConfirmationDialog2 = true;
                    applyForJob();
                  "
                />
                <DefaultDialog
                  :img="applicationConfirmedImg"
                  :title="$t('Job.applicationConfirmed.title')"
                  :subtitle="$t('Job.applicationConfirmed.subtitle')"
                  :btnType="$t('Job.applicationConfirmed.btnType')"
                  :btnText="$t('Job.applicationConfirmed.btnText')"
                  v-if="showConfirmationDialog2"
                  @confirm="
                    showConfirmationDialog1 = false;
                    showConfirmationDialog2 = false;
                    apply = true;
                  "
                  @close="
                    showConfirmationDialog2 = false;
                    apply = false;
                  "
                />
              </v-dialog>
            </v-row>
            <v-divider class="mt-4" />
            <v-row class="mt-5">
              <div class="d-flex">
                <v-avatar height="80" :width="80" color="cinza-lighten-2"> </v-avatar>
                <div class="d-flex justify-center flex-column">
                  <h6 class="text-capitalize">{{ company.name }}</h6>
                  <v-card-subtitle class="bdy-2 ma-n3 ">
                    {{ $t('Job.details.managedBy', { user: company.representative }) }}
                  </v-card-subtitle>
                </div>
              </div>
            </v-row>
            <v-row class="mt-4">
              <v-col cols="12">
                <h6>{{ $t('Job.details.aboutTheCompany') }}</h6>
              </v-col>
              <v-card-subtitle v-html="company.companyDescription"> </v-card-subtitle>
            </v-row>
          </v-card>
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
import IconText from 'Components/Interface/IconText';
import DefaultDialog from 'Components/Dialogs/Default';
import StorageHelper from 'Helpers/storage';

export default {
  name: 'JobDescription',
  props: {
    confirm: Boolean,
  },
  components: {
    SkillPresentation,
    IconText,
    DefaultDialog,
  },
  mounted() {
    this.companyId = this.$route.params.companyId;
    this.jobId = this.$route.params.jobId;

    this.getJobData();
    this.getCompanyData();
  },
  data() {
    return {
      applicationConfirmedImg,
      showConfirmationDialog2: false,
      showConfirmationDialog1: false,
      apply: false,
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
    getIconInfo() {
      return [
        {
          icon: 'fa fa-briefcase',
          text: this.$t(`enums.dictionary.experienceLevel.${this.job.experienceLevel || 'junior'}`),
        },
        {
          icon: 'far fa-clock',
          text: this.$t(`enums.dictionary.contractType.${this.job.contractType}`),
        },
      ];
    },
    async applyForJob() {
      const jobController = new JobController();
      const user = StorageHelper.loadState('user');
      if (!user) {
        this.$toast.error('Could not retrieve user info. Please login again');
        this.$router.push({
          path: '/login',
        });
      }
      try {
        await jobController.apply(user.username, this.jobId);
      } catch (e) {
        this.$toast.error('An error occured when applying for this job');
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
