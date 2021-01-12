'<template>
  <v-card
    class="bs-primary pa-4 px-6 px-md-12"
    color="bg"
    :min-width="getMinWidth()"
    @click="!$vuetify.breakpoint.mdAndUp && goToJobDetails()"
  >
    <v-row align="center" justify="center">
      <v-col :cols="$vuetify.breakpoint.mdAndUp ? '9' : '12'">
        <div class="d-flex flex-column">
          <div class="d-flex justify-space-between">
            <span class="overline color-primary" style="font-size: 1.4rem">
              {{ getSalaryInfo() }}
            </span>
          </div>
          <h5 class="h5-bold">{{ job.title }}</h5>
          <span class="mt-n1 bdy-2 color-cinza-lighten-1">
            {{ $t('job.timePosted', { time: getDaysAgo() }) }}
          </span>
          <div
            :class="
              $vuetify.breakpoint.mdAndUp
                ? 'd-flex justify-start ml-n2 mt-2'
                : 'd-flex flex-column ml-n2'
            "
          >
            <IconText
              color="primary"
              v-for="(item, i) in getIconInfo()"
              :class="$vuetify.breakpoint.mdAndUp ? 'mr-2' : 'mt-2'"
              :key="i"
              :icon="item.icon"
              :text="item.text"
            />
          </div>
        </div>
      </v-col>
      <v-col :cols="$vuetify.breakpoint.mdAndUp ? 3 : 0" v-if="$vuetify.breakpoint.mdAndUp">
        <v-btn large @click="goToJobDetails" color="primary" elevation="0" class="button-text">
          {{ $t('common.viewDetails') }}
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
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
    minWidth: Number,
    applyButton: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    IconText,
  },
  methods: {
    goToJobDetails() {
      this.$router.push({
        name: 'Job Description',
        params: {
          companyId: this.job.companyId,
          jobId: this.job.id,
          applyButton: this.applyButton,
        },
      });
    },
    getMinWidth() {
      if (this.minWidth) {
        return this.minWidth;
      }

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
