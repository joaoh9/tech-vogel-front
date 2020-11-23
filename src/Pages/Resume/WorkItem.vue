<template>
  <div class="mb-6">
    <form-input required class="mt-6" :title="$t('resume.register.workExperience.company.title')" />
    <v-text-field
      autofocus
      v-model="job.companyName"
      :rules="[rules.required(job.companyName)]"
      @input="$emit('company-name', job.companyName)"
      :placeholder="$t('resume.register.workExperience.placeholders.company.title')"
      outlined
    />
    <form-input required :title="$t('resume.register.workExperience.position')" />
    <v-text-field
      v-model="job.role"
      :rules="[rules.required(job.role)]"
      @input="$emit('role', job.role)"
      :placeholder="$t('resume.register.workExperience.placeholders.position')"
      outlined
    />
    <v-row class="mt-n4 mb-n4">
      <v-col cols="12" md="3">
        <form-input :title="$t('common.from')" />
        <v-text-field
          v-model="job.startDate"
          @input="checkYearRules(job.startDate, 'start-date')"
          :placeholder="$t('common.year')"
          outlined
          :rules="[rules.onlyNumber(job.startDate), rules.year(job.startDate)]"
        />
      </v-col>
      <v-col cols="12" md="3">
        <form-input :title="$t('common.to')" />
        <v-text-field
          v-model="job.endDate"
          @input="checkYearRules(job.endDate, 'end-date')"
          :placeholder="$t('common.year')"
          outlined
          :rules="[rules.onlyNumber(job.endDate), rules.year(job.endDate)]"
          :disabled="job.currentJob"
        />
      </v-col>
    </v-row>
    <div class="d-flex justify-space-between">
      <v-checkbox
        v-model="job.currentJob"
        @change="$emit('current-job', job.currentJob)"
        v-for="(options, index) in $t('resume.register.workExperience.myJob.options')"
        :label="options"
        :key="index"
      />
    </div>
    <form-input :title="$t('resume.register.workExperience.jobDescription.title')" />
    <vue-editor
      placeholder="TODO"
      :editorToolbar="$t('quill.defaultToolbar')"
      v-model="job.jobDescription"
    />
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';

import RulesHelper from 'Helpers/rules';

export default {
  name: 'WorkItem',
  mounted() {
    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
  },
  components: {
    VueEditor,
  },
  data() {
    return {
      job: {
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
      },
    };
  },
  methods: {
    checkYearRules(variable, date) {
      if (this.rules.onlyNumber(variable) === true && this.rules.year(variable) === true) {
        if (date === 'start-date') {
          this.job.startDate = parseInt(variable);
          this.$emit(date, this.job.startDate);
        } else if (date === 'end-date') {
          this.job.endDate = parseInt(variable);
          this.$emit(date, this.job.endDate);
        }
      }
      return;
    },
  },
  watch: {
    'job.currentJob'(e) {
      if (e === true) {
        this.job.endDate = new Date().getFullYear();
      }
    },
    'job.jobDescription'() {
      this.$emit('job-description', this.job.description);
    },
  },
};

</script>

<style></style>
