<template>
  <div class="mb-6">
    <form-input class="mt-6" :title="$t('resume.register.workExperience.company.title')" />
    <v-text-field
      autofocus
      v-model="workHistory.companyName"
      :rules="[rules.max(200, workHistory.companyName)]"
      @input="$emit('update', workHistory)"
      :placeholder="$t('resume.register.workExperience.placeholders.company.title')"
      outlined
    />
    <form-input :title="$t('resume.register.workExperience.position')" />
    <v-text-field
      v-model="workHistory.role"
      :rules="[rules.max(200, workHistory.role)]"
      @input="$emit('update', workHistory)"
      :placeholder="$t('resume.register.workExperience.placeholders.position')"
      outlined
    />
    <v-row class="mt-n4 mb-n4">
      <v-col cols="12" md="3">
        <form-input :title="$t('common.from')" />
        <v-text-field
          v-model="workHistory.startDate"
          @input="checkYearRules(workHistory.startDate, 'start-date')"
          :placeholder="$t('common.year')"
          outlined
          :rules="[rules.onlyNumber(workHistory.startDate), rules.year(workHistory.startDate)]"
        />
      </v-col>
      <v-col cols="12" md="3">
        <form-input :title="$t('common.until')" />
        <v-text-field
          v-model="workHistory.endDate"
          @input="checkYearRules(workHistory.endDate, 'end-date')"
          :placeholder="$t('common.year')"
          outlined
          :rules="[rules.onlyNumber(workHistory.endDate), rules.year(workHistory.endDate)]"
          :disabled="workHistory.currentJob"
        />
      </v-col>
    </v-row>
    <div class="d-flex justify-space-between">
      <v-checkbox
        v-model="workHistory.currentJob"
        @change="$emit('update', workHistory)"
        v-for="(option, index) in $t('resume.register.workExperience.myJob.options')"
        :label="option"
        :key="index"
      />
    </div>
    <form-input :title="$t('resume.register.workExperience.jobDescription.title')" />
    <v-textarea
      v-model="workHistory.description"
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
        this.workHistory.endDate = new Date().getFullYear();
      }
    },
    'workHistory.description'() {
      this.$emit('update', this.workHistory);
    },
  },
};
</script>

<style></style>
