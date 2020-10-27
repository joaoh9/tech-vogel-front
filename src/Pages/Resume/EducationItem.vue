<template>
  <div>
    <v-row>
      <v-col cols="12" md="8">
        <form-input required :title="$t('resume.register.education.degree.title')" />
        <v-text-field
          v-model="education.degree"
          :placeholder="$t('resume.register.education.placeholders.degree')"
          @input="$emit('degree', education.degree)"
          outlined
        />
      </v-col>
      <v-col cols="12" md="4">
        <form-input required :title="$t('resume.register.education.type')" />
        <v-text-field
          v-model="education.institutionType"
          :placeholder="$t('resume.register.education.placeholders.type')"
          @input="$emit('institution-type', education.institutionType)"
          outlined
        />
      </v-col>
    </v-row>

    <form-input required :title="$t('resume.register.education.institution')" />
    <v-text-field
      v-model="education.name"
      :placeholder="$t('resume.register.education.placeholders.institution')"
      @input="$emit('name', education.name)"
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
  </div>
</template>

<script>
import RulesHelper from 'Helpers/rules';

export default {
  name: 'EducationItem',
  mounted() {
    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
  },
  data() {
    return {
      education: {
        degree: '',
        institutionType: '',
        description: '',
        name: '',
        startDate: '',
        endDate: '',
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
};
</script>

<style></style>
