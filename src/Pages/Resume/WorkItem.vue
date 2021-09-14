<template>
  <div class="mb-2">
    <form-input
      v-if="working"
      class="mt-6"
      :title="$t('resume.register.workExperience.company.title')"
    />
    <form-input v-if="!working" class="mt-6" title="Tempo de hiato" />
    <v-text-field
      v-if="working"
      autofocus
      v-model="workHistory.companyName"
      :data-cy="`wh-${item}-company-name`"
      :rules="[rules.max(200, workHistory.companyName)]"
      @input="$emit('update', workHistory)"
      :placeholder="$t('resume.register.workExperience.placeholders.company.title')"
      outlined
    />
    <form-input v-if="working" :title="$t('resume.register.workExperience.position')" />
    <v-text-field
      v-if="working"
      v-model="workHistory.role"
      :data-cy="`wh-${item}-role`"
      :rules="[rules.max(200, workHistory.role)]"
      @input="$emit('update', workHistory)"
      :placeholder="$t('resume.register.workExperience.placeholders.position')"
      outlined
    />
    <v-row class="mt-n4 mb-n4">
      <v-col cols="12" md="6">
        <v-menu
          v-model="startDateMenu"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="workHistory.startDate"
              :label="working ? 'Data de início' : 'De'"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="workHistory.startDate"
            type="month"
            width="250"
            color="secondary-lighten-2"
            :data-cy="`wh-${item}-start-date`"
            @input="checkYearRules(workHistory.startDate, 'start-date')"
            :placeholder="$t('common.year')"
            outlined
            :rules="[rules.onlyNumber(workHistory.startDate), rules.year(workHistory.startDate)]"
          />
        </v-menu>
      </v-col>
      <v-col cols="12" md="6">
        <v-menu
          v-model="endDateMenu"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="workHistory.endDate"
              :label="working ? 'Data de término' : 'Até'"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="workHistory.endDate"
            type="month"
            width="250"
            color="secondary-lighten-2"
            :data-cy="`wh-${item}-start-date`"
            @input="checkYearRules(workHistory.endDate, 'start-date')"
            :placeholder="$t('common.year')"
            outlined
            :rules="[rules.onlyNumber(workHistory.endDate), rules.year(workHistory.endDate)]"
          />
        </v-menu>
      </v-col>
    </v-row>
    <div v-if="working" class="d-flex justify-space-between">
      <v-checkbox
        v-model="workHistory.currentJob"
        :data-cy="`wh-${item}-current-job`"
        @change="$emit('update', workHistory)"
        :label="$t('resume.register.workExperience.myJob')"
      />
    </div>
    <form-input
      :title="
        working ? $t('resume.register.workExperience.jobDescription.title') : 'Motivo do hiato'
      "
    />
    <v-textarea
      v-model="workHistory.description"
      :placeholder="
        working
          ? 'Ex: Cuidava do backend em node.js da empresa'
          : 'Ex: Tive um filho e precisei ficar sem trabalhar'
      "
      :data-cy="`wh-${item}-description`"
      outlined
      :rules="[rules.max(5000, workHistory.description)]"
    />
  </div>
</template>

<script>
import RulesHelper from 'Helpers/rules';

export default {
  name: 'WorkItem',
  props: {
    _workHistory: Object,
    working: Boolean,
    item: Number,
  },
  mounted() {
    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
    if (this._workHistory) {
      this.workHistory = this._workHistory;
    }
  },
  data() {
    return {
      workHistory: {
        companyName: '',
        role: '',
        startDate: '',
        endDate: '',
        description: '',
        currentJob: false,
      },
      rules: {
        year: () => true,
        onlyNumber: () => true,
        required: () => true,
        max: () => true,
      },
      startDateMenu: false,
      endDateMenu: false,
    };
  },
  methods: {
    checkYearRules(variable, date) {
      if (this.rules.onlyNumber(variable) === true && this.rules.year(variable) === true) {
        if (date === 'start-date') {
          this.workHistory.startDate = parseInt(variable);
          this.$emit('update', this.workHistory);
        } else if (date === 'end-date') {
          this.workHistory.endDate = parseInt(variable);
          this.$emit('update', this.workHistory);
        }
      }
      return;
    },
  },
  watch: {
    'workHistory.currentJob'(e) {
      if (e === true) {
        const month = new Date().getMonth();
        this.workHistory.endDate = `${new Date().getFullYear().toString()}-${
          month > 9 ? '0' : '' + (month + 1).toString()
        }`;
      }
    },
    'workHistory.description'() {
      this.$emit('update', this.workHistory);
    },
  },
};
</script>

<style></style>
