<template>
  <v-card v-if="job" :class="!$vuetify.breakpoint.smAndUp ? 'bs-none' : 'bs-none pa-8'" color="bg">
    <IconText
      v-for="(item, i) in getIconInfo()"
      :key="i"
      :icon="item.icon"
      :text="item.text"
      color="secondary-lighten-1"
      class="mb-2 ml-n3"
    />
    <v-row justify="center" class="mt-6">
      <v-dialog v-model="apply">
        <template v-slot:activator="{ on, attrs }">
          <g-btn
            v-on="on"
            v-bind="attrs"
            v-if="applyButton"
            :type="getApplicationButtonType()"
            @click="
              apply = true;
              showConfirmationDialog1 = true;
            "
            :label="$t('job.details.apply')"
          />
        </template>
        <div>
          <DefaultDialog
            v-if="showConfirmationDialog1"
            :key="showConfirmationDialog1"
            :title="$t('job.apply.title')"
            :subtitle="$t('job.apply.subtitle')"
            :btnType="$t('job.apply.btnType')"
            :btnText="$t('job.apply.btnText')"
            :secBtnText="$t('common.close')"
            @close="
              showConfirmationDialog1 = false;
              apply = false;
            "
            v-on:primary-button-click="
              showConfirmationDialog1 = false;
              showConfirmationDialog2 = true;
              applyForJob();
            "
            v-on:secondary-button-click="
              showConfirmationDialog1 = false;
              apply = false;
            "
          />
          <DefaultDialog
            :title="$t('job.applicationConfirmed.title')"
            :subtitle="$t('job.applicationConfirmed.subtitle', { companyName: company.name })"
            :btnType="$t('job.applicationConfirmed.btnType')"
            :btnText="$t('job.applicationConfirmed.btnText')"
            :secBtnText="$t('common.close')"
            v-if="showConfirmationDialog2"
            @close="
              showConfirmationDialog2 = false;
              apply = false;
            "
            v-on:primary-button-click="
              showConfirmationDialog1 = false;
              showConfirmationDialog2 = false;
              apply = true;
            "
            v-on:secondary-button-click="
              showConfirmationDialog2 = false;
              apply = false;
            "
          />
        </div>
      </v-dialog>
    </v-row>
    <v-divider :class="applyButton ? 'mt-4' : 'mt-0'" />
    <div class="d-flex align-center flex-column mt-2">
      <bdy-2>
        {{ $t('job.details.managedBy', { user: company.representative }) }}
      </bdy-2>
      <h6 class="text-capitalize">{{ company.name }}</h6>
    </div>
    <v-divider />
    <div class="d-flex align-center flex-column mt-1">
      <h6>{{ $t('job.details.aboutTheCompany') }}</h6>
      <sub-1 class="text-justify" style="display: block" v-html="company.description"></sub-1>
    </div>
    <div class="d-flex justify-center align-center flex-wrap mt-2">
      <div v-for="(icon, i) in getSocialMediaLinks()" :key="i">
        <v-icon color="secondary-lighten-2" class="mx-2" @click="newWindow(icon.link)"> {{ icon.icon }}</v-icon>
      </div>
    </div>
  </v-card>
</template>

<script>
import DefaultDialog from 'Components/Dialogs/Default';
import IconText from 'Components/Interface/IconText';

import JobController from 'Controllers/job';
import UserController from 'Controllers/user';

export default {
  name: 'JobApplicationCard',
  props: {
    job: Object,
    company: Object,
    editMode: Boolean,
    applyButton: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    IconText,
    DefaultDialog,
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
      unloggedUser: false,
    };
  },
  methods: {
    getIconInfo() {
      if (!this.job || !this.job.salary) {
        return [];
      }
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
          icon: 'fa fa-money-bill',
          text:
            new Intl.NumberFormat(this.$i18n.locale, {
              style: 'currency',
              currency: this.job.salary.currency,
            }).format(this.job.salary.min) +
            (this.job.salary.max
              ? ' - ' +
                new Intl.NumberFormat(this.$i18n.locale, {
                  style: 'currency',
                  currency: this.job.salary.currency,
                }).format(this.job.salary.max)
              : '') +
            ' ' +
            this.$t(`enums.dictionary.payCheckTimeFrame.${this.job.salary.timeFrame}`),
        },
      ];
    },
    getSocialMediaLinks() {
      const data = [];
      if (!this.company || !this.company.links) {
        return [];
      }

      for (const key of Object.keys(this.company.links)) {
        if (this.company.links[key]) {
          data.push({
            link: this.company.links[key],
            icon: this.getLinkIcon(key),
          });
        }
      }

      return data;
    },
    getLinkIcon(link) {
      console.log('🚀 ~ file: JobApplicationCard.vue ~ line 179 ~ getLinkIcon ~ link', link);
      switch (link) {
        case 'website':
          return 'mdi-web';
        case 'linkedin':
          return 'mdi-twitter';
        case 'twitter':
          return 'mdi-linkedin';
        case 'instagram':
          return 'mdi-instagram';
        default:
          return 'mdi-account';
      }
    },
    getApplicationButtonType() {
      if (this.editMode) {
        return 'disabled';
      }
      const userController = new UserController();
      try {
        const userInfo = userController.decodeUserToken();
        return userInfo.side >= 20 ? 'disabled' : 'primary';
      } catch (e) {
        if (e.message == 'Invalid token specified') {
          this.unloggedUser = true;
          return 'primary';
        }
      }
    },
    async applyForJob() {
      if (this.unloggedUser) {
        this.$router.push('/signup');
      }
      const jobController = new JobController();

      try {
        await jobController.apply(this.jobId);
        this.$toast.success(this.$t('toast.success.jobApplied'));
        this.editMode = true;
      } catch (e) {
        this.$toast.error(this.$t('toast.error.jobApplying'));
      }
    },
    newWindow(link) {
      window.open(link, '_blank');
    },
  },
};
</script>

<style>
.v-dialog {
  box-shadow: none;
}
</style>
