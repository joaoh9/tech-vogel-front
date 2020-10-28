<template>
  <div>
    <v-row>
      <v-col cols="12" md="8">
        <form-input required :title="$t('resume.register.education.courseTitle.title')" />
        <v-text-field
          v-model="education.courseTitle"
          :placeholder="$t('resume.register.education.courseTitle.placeholder')"
          @input="$emit('course-title', education.courseTitle)"
          outlined
        />
      </v-col>
      <v-col cols="12" md="4">
        <form-input required :title="$t('resume.register.education.degree.title')" />
        <v-text-field
          v-model="education.degree"
          :placeholder="$t('resume.register.education.degree.placeholder')"
          @input="$emit('institution-type', education.degree)"
          outlined
        />
      </v-col>
    </v-row>

    <form-input required :title="$t('resume.register.education.institution')" />
    <v-text-field
      v-model="education.institutionName"
      :placeholder="$t('resume.register.education.placeholders.institution')"
      @input="$emit('institution-name', education.institutionName)"
      outlined
    />

    <v-row>
      <v-col cols="6" md="3">
        <form-input required :title="$t('resume.register.education.from')" />
        <v-text-field
          v-model="education.startDate"
          @input="checkYearRules(education.startDate, 'start-date')"
          outlined
          :placeholder="$t('common.year')"
          :rules="[rules.onlyNumber(education.startDate), rules.year(education.startDate)]"
        />
      </v-col>
      <v-col cols="6" md="3">
        <form-input required :title="$t('resume.register.education.to')" />
        <v-text-field
          v-model="education.endDate"
          @input="checkYearRules(education.endDate, 'end-date')"
          outlined
          :placeholder="$t('common.year')"
          :rules="[rules.onlyNumber(education.endDate), rules.year(education.endDate)]"
        />
      </v-col>
    </v-row>
    <form-input :title="$t('resume.register.education.about.title')" />
    <vue-editor
      :placeholder="$t('resume.register.education.about.placeholder')"
      :editorToolbar="$t('quill.defaultToolbar')"
      v-model="education.description"
      class="mb-6"
    />
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';

import RulesHelper from 'Helpers/rules';

export default {
  name: 'EducationItem',
  components: {
    VueEditor,
  },
  mounted() {
    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
  },
  data() {
    return {
      education: {
        courseTitle: '',
        degree: '',
        description: '',
        institutionName: '',
        startDate: 0,
        endDate: 0,
      },
      rules: {
        year: () => true,
        onlyNumber: () => true,
      },
    };
  },
  methods: {
    checkYearRules(variable, date) {
      if (this.rules.onlyNumber(variable) === true && this.rules.year(variable) === true) {
        if (date === 'start-date') {
          this.education.startDate = parseInt(variable);
          this.$emit(date, this.education.startDate);
        } else if (date === 'end-date') {
          this.education.endDate = parseInt(variable);
          this.$emit(date, this.education.endDate);
        }
      }
      return;
    },
  },
  watch: {
    'edication.description'() {
      this.$emit('description', this.education.description);
    },
  },
};
</script>

<style></style>
