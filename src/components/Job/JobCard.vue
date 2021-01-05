'<template>
  <div>
    <v-card class="pa-4 px-12 bs-primary" color="bg" :min-width="getMinWidth()">
      <div class="d-flex justify-space-between">
        <div>
          <div class="d-flex flex-column" style="width: 400px">
            <span class="overline">{{ $t('job.timePosted', { time: getDaysAgo() }) }}</span>
            <h5 class="mt-1">{{ job.title }}</h5>
            <div class="d-flex justify-space-between mt-4">
              <IconText
                v-for="(item, i) in getIconInfo()"
                :key="i"
                :icon="item.icon"
                :text="item.text"
                style="margin: 0 !important;"
              />
            </div>
          </div>
        </div>
        <div class="d-flex justify-center align-center">
          <g-btn type="primary" :label="$t('common.viewDetails')" @click="goToJobDetails" />
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import IconText from 'Components/Interface/IconText';

import DateHelper from 'Helpers/date';

export default {
  name: 'JobCard',
  props: {
    job: {
      type: Object,
    },
  },
  components: {
    IconText,
  },
  methods: {
    goToJobDetails() {
      this.$router.push({
        path: `/jobs/${this.job.companyId}/${this.job.id}`,
      });
    },
    getMinWidth() {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return 770;
      }

      return this.$vuetify.breakpoint.width * 0.6;
    },
    currencyConverter() {
      return this.$t(`dictionary.currency.${this.job.salary.currency}`);
    },
    getSalaryInfo() {
      return (
        this.$n(`${this.job.salary.min}`, 'currency', this.currencyConverter()) +
        `/${this.$t(`enums.dictionary.payCheckTimeFrame.${this.job.salary.timeFrame}`)}`
      );
    },

    getIconInfo() {
      return [
        {
          icon: 'mdi-office-building',
          text: this.job.companyName,
        },
        {
          icon: 'mdi-briefcase-variant-outline',
          text: this.$t(`enums.dictionary.contractType.${this.job.contractType}`),
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

<style scoped>
.overline {
  font-size: 0.95rem !important;
}
</style>
