<template>
  <div class="mb-6">
    <form-input class="mt-6" :title="$t('resume.register.workExperience.company.title')" />
    <v-text-field
      v-model="job.companyName"
      v-on:input="$emit('update-item', job)"
      :placeholder="$t('resume.register.workExperience.placeholders.company.title')"
      outlined
    />
    <form-input class="" :title="$t('resume.register.workExperience.position')" />
    <v-text-field
      v-model="job.role"
      v-on:input="$emit('update-item', job)"
      :placeholder="$t('resume.register.workExperience.placeholders.position')"
      outlined
    />
    <v-row>
      <v-col cols="12" md="3">
        <form-input class="" :title="$t('common.from')" />
        <v-text-field
          v-model="job.startDate"
          v-on:input="$emit('update-item', job)"
          :placeholder="$t('common.year')"
          outlined
          :rules="[rules.onlyNumber(job.startDate), rules.year(job.startDate)]"
        />
      </v-col>
      <v-col cols="12" md="3">
        <form-input class="" :title="$t('common.to')" />
        <v-text-field
          v-model="job.endDate"
          v-on:input="$emit('update-item', job)"
          :placeholder="$t('common.year')"
          outlined
          :rules="[rules.onlyNumber(job.endDate), rules.year(job.endDate)]"
          :disabled="job.currentJob"
        />
      </v-col>
    </v-row>
    <div class="d-flex justify-space-between mt-12">
      <v-checkbox
        v-model="job.currentJob"
        v-on:input="$emit('job', job)"
        v-for="(options, index) in $t('resume.register.workExperience.myJob.options')"
        :label="options"
        :key="index"
      />
    </div>
    <form-input :title="$t('resume.register.workExperience.jobDescription.title')" />
    <!-- TODO: mudar para vue-editor -->
    <vue-editor
      :placeholder="$t('resume.register.workEperience.jobDescription')"
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
        startDate: 0,
        endDate: 0,
        description: '',
        currentJob: false,
      },
      rules: {
        year: () => true,
        onlyNumber: () => true,
      },
    };
  },
  watch: {
    'job.currentJob'(e) {
      if (e === true) {
        this.job.endDate = new Date().getFullYear();
      }
    },
    'job.jobDescription'() {
      this.$emit('update-item', this.job);
    },
  },
};
</script>

<style></style>
