<template>
  <v-card :class="$vuetify.breakpoint.mobile ? 'bs-none' : 'bs-none pa-8'" color="bg">
    <IconText
      v-for="(item, i) in getIconInfo()"
      :key="i"
      :icon="item.icon"
      :text="item.text"
      class="mb-2 ml-n3"
    />
    <v-row justify="center" class="mt-6">
      <v-dialog v-model="apply">
        <template v-slot:activator="{ on, attrs }">
          <g-btn
            v-on="on"
            v-bind="attrs"
            :type="getApplicationButtonType()"
            @click="showConfirmationDialog1 = true"
            :label="$t('job.details.apply')"
          />
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
        <!-- <v-avatar height="80" width="80" color="cinza-lighten-2"> </v-avatar> -->
        <div class="d-flex justify-center flex-column">
          <h6 class="text-capitalize">{{ company.name }}</h6>
          <bdy-2>
            {{ $t('job.details.managedBy', { user: company.representative }) }}
          </bdy-2>
        </div>
      </div>
    </v-row>
    <v-row class="mt-4">
      <h6>{{ $t('job.details.aboutTheCompany') }}</h6>
      <div class="color-cinza-lighten-1" v-html="company.companyDescription"></div>
    </v-row>
  </v-card>
</template>

<script>
import StorageHelper from 'Helpers/storage';
import DefaultDialog from 'Components/Dialogs/Default';
import IconText from 'Components/Interface/IconText';
import JobController from 'Controllers/job';

export default {
  name: 'JobApplicationCard',
  props: {
    job: Object,
    company: Object,
  },
  components: {
    IconText,
    DefaultDialog,
  },
  data() {
    return {
      apply: false,
      showConfirmationDialog2: false,
      showConfirmationDialog1: false,
    };
  },
  methods: {
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
    getApplicationButtonType() {
      return StorageHelper.loadState('companyId') ? 'disabled' : 'primary';
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

<style></style>
