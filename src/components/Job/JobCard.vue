'<template>
  <v-card class="pa-4 px-12 bs-primary" color="bg" :min-width="getMinWidth()">
    <div class="d-flex justify-space-between">
      <div>
        <div class="d-flex flex-column">
          <span class="overline">{{ $t('job.timePosted', { time: getDaysAgo() }) }}</span>
          <h5 class="h5-bold mt-1">{{ job.title }}</h5>
          <div class="d-flex justify-space-between ml-n2 mt-2">
            <IconText
              v-for="(item, i) in getIconInfo()"
              :key="i"
              :icon="item.icon"
              :text="item.text"
            />
          </div>
        </div>
      </div>
      <div class="d-flex justify-center align-center">
        <g-btn type="primary" :label="$t('common.viewDetails')" @click="goToJobDetails" />
      </div>
    </div>
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
          text: this.job.company.name,
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

<style></style>
