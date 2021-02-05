<template>
  <div>
    <v-row>
      <v-col cols="12" md="8">
        <form-input :title="$t('resume.register.education.courseTitle.title')" />
        <v-text-field
          autofocus
          v-model="education.courseTitle"
          :placeholder="$t('resume.register.education.courseTitle.placeholder')"
          @input="$emit('update', education)"
          outlined
          :rules="[rules.max(200, education.courseTitle)]"
        />
      </v-col>
      <v-col cols="12" md="4">
        <form-input :title="$t('resume.register.education.degree.title')" />
        <v-text-field
          v-model="education.degree"
          :placeholder="$t('resume.register.education.degree.placeholder')"
          @input="$emit('update', education)"
          outlined
          :rules="[rules.max(200, education.degree)]"
        />
      </v-col>
    </v-row>

    <form-input :title="$t('resume.register.education.institution')" />
    <v-text-field
      v-model="education.institutionName"
      :placeholder="$t('resume.register.education.placeholders.institution')"
      @input="$emit('update', education)"
      outlined
      :rules="[rules.max(200, education.institutionName)]"
    />

    <v-row>
      <v-col cols="6" md="3">
        <form-input :title="$t('resume.register.education.from')" />
        <v-text-field
          v-model="education.startDate"
          @input="checkYearRules(education.startDate, 'start-date')"
          outlined
          :placeholder="$t('common.year')"
          :rules="[rules.onlyNumber(education.startDate), rules.year(education.startDate)]"
        />
      </v-col>
      <v-col cols="6" md="3">
        <form-input :title="$t('common.until')" />
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
      :editorToolbar="$t('quill.defaultToolbar')"
      v-model="education.description"
      class="mb-6"
      :rules="[rules.max(20000, education.description)]"
    />
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';

import RulesHelper from 'Helpers/rules';

export default {
  name: 'EducationItem',
  props: {
    _education: Object,
  },
  components: {
    VueEditor,
  },
  mounted() {
    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
    if (this._education) {
      this.education = this._education;
    }
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
        max: () => true,
      },
    };
  },
  methods: {
    checkYearRules(variable, date) {
      if (this.rules.onlyNumber(variable) === true && this.rules.year(variable) === true) {
        if (date === 'start-date') {
          this.education.startDate = parseInt(variable);
          this.$emit('update', this.education);
        } else if (date === 'end-date') {
          this.education.endDate = parseInt(variable);
          this.$emit('update', this.education);
        }
      }
      return;
    },
  },
  watch: {
    'education.description'() {
      this.$emit('update', this.education);
    },
  },
};
</script>

<style>
.ql-editor {
  min-height: 300px !important;
}
</style>
