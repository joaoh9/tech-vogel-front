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
          <g-btn
            v-if="editJobVerification()"
            type="text"
            color="primary"
            :label="$t('job.edit')"
            @click="editJob"
          />
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import DateHelper from 'Helpers/date';

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
  methods: {
    editJobVerification() {
      const createdInMs = new Date(this.job.createdAt).getTime();
      const dayInMs = 1000 * 60 * 60 * 24;

      return createdInMs < dayInMs;
    },
    accessReportVerification() {
      const createdInMs = new Date(this.job.createdAt).getTime();
      const dayInMs = (1000 * 60 * 60 * 24) * 15;

      return createdInMs > dayInMs;
    },
    goToJobDetails() {
      this.$router.push({
        path: `/jobs/${this.company.id}/${this.job.id}`,
      });
    },
    goToReport() {
      this.$router.push({
        path: `/report/${this.company.id}/${this.job.id}`,
      });
    },
    editJob() {
      this.$router.push({
        name: 'New Job',
        params: { job: this.job, editingJobPosted: true },
      });
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
          [ 'agora mesmo', 'agora' ],
          [ 'há %s segundos', 'em %s segundos' ],
          [ 'há um minuto', 'em um minuto' ],
          [ 'há %s minutos', 'em %s minutos' ],
          [ 'há uma hora', 'em uma hora' ],
          [ 'há %s horas', 'em %s horas' ],
          [ 'há um dia', 'em um dia' ],
          [ 'há %s dias', 'em %s dias' ],
          [ 'há uma semana', 'em uma semana' ],
          [ 'há %s semanas', 'em %s semanas' ],
          [ 'há um mês', 'em um mês' ],
          [ 'há %s meses', 'em %s meses' ],
          [ 'há um ano', 'em um ano' ],
          [ 'há %s anos', 'em %s anos' ],
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
