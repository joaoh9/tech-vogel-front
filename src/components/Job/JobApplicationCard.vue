<template>
  <v-card v-if="job" :class="$vuetify.breakpoint.mobile ? 'bs-none' : 'bs-none pa-8'" color="bg">
    <IconText
      v-for="(item, i) in getIconInfo()"
      :key="i"
      :icon="item.icon"
      :text="item.text"
      class="mb-2 ml-n3"
    />
    <v-row justify="center" class="mt-6">
      <g-btn
        :type="getApplicationButtonType()"
        @click="applyForJob()"
        :label="$t('job.details.apply')"
      />
      <!--
      <v-dialog v-model="apply">
        <template v-slot:activator="{ on, attrs }">
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
        -->
    </v-row>
    <v-divider class="mt-4" />
    <div class="d-flex align-center flex-column mt-4">
      <h6 class="text-capitalize">{{ company.name }}</h6>
      <bdy-2>
        {{ $t('job.details.managedBy', { user: company.representative }) }}
      </bdy-2>
    </div>
    <div class="d-flex align-center flex-column mt-4">
      <h6>{{ $t('job.details.aboutTheCompany') }}</h6>
      <sub-1 style="display: block" v-html="company.companyDescription"></sub-1>
    </div>
  </v-card>
</template>

<script>
// import DefaultDialog from 'Components/Dialogs/Default';
import IconText from 'Components/Interface/IconText';

import JobController from 'Controllers/job';

import StorageHelper from 'Helpers/storage';

export default {
  name: 'JobApplicationCard',
  props: {
    job: Object,
    company: Object,
  },
  components: {
    IconText,
    // DefaultDialog,
  },
  mounted() {
    this.jobId = this.$route.params.jobId;
    this.companyId = this.$route.params.companyId;
  },
  data() {
    return {
      companyId: null,
      jobId: null,
      apply: false,
      showConfirmationDialog2: false,
      showConfirmationDialog1: false,
    };
  },
  methods: {
    getIconInfo() {
      if (!this.job || !this.job.salary) {
        return [];
      }
      const currencySymbol = this.getPrefix(this.job.salary.currency);
      return [
        {
          icon: 'fa fa-briefcase',
          text: this.$t(`enums.dictionary.experienceLevel.${this.job.experienceLevel || 'junior'}`),
        },
        {
          icon: 'far fa-clock',
          text: this.$t(`enums.dictionary.contractType.${this.job.contractType}`),
        },
        {
          icon: 'fa fa-money-bill-wave',
          text:
            currencySymbol +
            this.job.salary.min +
            (this.job.salary.max ? ' - ' + currencySymbol + this.job.salary.max : '') +
            ' ' +
            this.$t(`enums.dictionary.payCheckTimeFrame.${this.job.salary.timeFrame}`),
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
        this.$toast.error(this.$t('toast.error.retrieveUser'));
        this.$router.push({
          path: '/login',
        });
      }

      try {
        await jobController.apply(user.username, this.jobId);
        this.$toast.success(this.$t('toast.success.jobApplied'));
      } catch (e) {
        this.$toast.error(this.$t('toast.error.jobApplying'));
      }
    },
    getPrefix(currency) {
      switch (currency) {
        case 'USD':
          return '$';
        case 'GBP':
          return '£';
        case 'EUR':
          return '€';
        case 'BRL':
          return 'R$';
      }
    },
  },
};
</script>

<style></style>
