<template>
  <v-card class="border-primary bs-primary pa-4 px-12 mt-6" color="bg">
    <v-row>
      <v-col cols="8">
        <div class="d-flex flex-column">
          <span class="overline">{{ $t('job.posted') }} {{ getDaysAgo() }}</span>
          <h5 class="h5-bold">{{ job.title }}</h5>
          <div>
            <g-btn
              v-if="accessReportVerification()"
              class="mt-2"
              type="outlined"
              dense
              color="primary"
              :label="$t('job.seeReport')"
              @click="goToReport"
            />
          </div>
        </div>
      </v-col>
      <v-col cols="1">
        <v-divider vertical />
      </v-col>
      <v-col cols="3">
        <div class="d-flex justify-center flex-column align-center">
          <g-btn type="text" color="primary" :label="$t('job.see')" @click="goToJobDetails" />
          <g-btn type="text" color="primary" :label="$t('job.edit')" @click="editJob" />
          <g-btn
            type="text"
            color="primary"
            :label="$t('job.remove')"
            @click="showJobDeleteDialog = true"
          />
        </div>
      </v-col>
      <DefaultDialog
        v-if="showJobDeleteDialog"
        :key="showJobDeleteDialog"
        :title="$t('job.delete.title')"
        :subtitle="$t('job.delete.subtitle')"
        :btnType="$t('job.delete.btnType')"
        :btnText="$t('job.delete.btnText')"
        :secBtnText="$t('common.close')"
        @close="
          showJobDeleteDialog = false;
          apply = false;
        "
        v-on:primary-button-click="
          showJobDeleteDialog = false;
          deleteJob();
        "
        v-on:secondary-button-click="showJobDeleteDialog = false"
      />
    </v-row>
  </v-card>
</template>

<script>
import DateHelper from 'Helpers/date';
import JobController from 'Controllers/job';
import config from '@config';
import DefaultDialog from 'Components/Dialogs/Default';

export default {
  name: 'JobManagerCard',
  props: {
    job: {
      type: Object,
    },
    company: {
      type: Object,
    },
  },
  components: {
    DefaultDialog,
  },
  data() {
    return {
      showJobDeleteDialog: false,
    };
  },
  methods: {
    editJobVerification() {
      const createdAt = new Date(this.job.createdAt);
      const now = new Date();

      return now - createdAt <= config.dayInMs;
    },
    accessReportVerification() {
      const createdAt = new Date(this.job.createdAt);
      const now = new Date();

      return now - createdAt >= config.dayInMs * 4;
    },
    goToJobDetails() {
      this.$router.push({
        path: `/jobs/${this.company.id}/${this.job.id}`,
      });
    },
    goToReport() {
      this.$router.push({
        path: `/company/report/${this.job.id}`,
      });
    },
    editJob() {
      this.$router.push(`/jobs/edit/${this.job.id}`);
    },
    async deleteJob() {
      const jobController = new JobController();

      try {
        await jobController.remove(this.job.id);

        this.$emit('job-deleted');
      } catch (e) {
        this.$toast.warning(e);
      }
    },
    getMinWidth() {
      if (this.$vuetify.breakpoint.lgAndUp) {
        return 870;
      }
      if (this.$vuetify.breakpoint.smAndUp) {
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
          text: this.$t(`enums.contractType.${this.job.contractType}`),
        },
      ];
    },
    getDaysAgo() {
      const localeFunc = (number, index) => {
        return [
          ['agora mesmo', 'agora'],
          ['há %s segundos', 'em %s segundos'],
          ['há um minuto', 'em um minuto'],
          ['há %s minutos', 'em %s minutos'],
          ['há uma hora', 'em uma hora'],
          ['há %s horas', 'em %s horas'],
          ['há um dia', 'em um dia'],
          ['há %s dias', 'em %s dias'],
          ['há uma semana', 'em uma semana'],
          ['há %s semanas', 'em %s semanas'],
          ['há um mês', 'em um mês'],
          ['há %s meses', 'em %s meses'],
          ['há um ano', 'em um ano'],
          ['há %s anos', 'em %s anos'],
        ][index];
      };

      DateHelper.register('pt_BR', localeFunc);

      return this.$i18n.locale === 'pt-br'
        ? DateHelper.format(this.job.createdAt, 'pt_BR')
        : DateHelper.format(this.job.createdAt, 'en_US');
    },
  },
};
</script>

<style></style>
