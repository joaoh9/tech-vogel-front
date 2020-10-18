<template>
  <div>
    <v-row>
      <v-col cols="12" md="8">
        <form-input class="mt-6" :title="$t('resume.register.education.degree.title')" />
        <v-text-field
          v-model="education.degree"
          :placeholder="$t('resume.register.education.placeholders.degree')"
          @input="$emit('update-item', education)"
          outlined
        />
      </v-col>
      <v-col cols="12" md="4">
        <form-input class="mt-6" :title="$t('resume.register.education.type')" />
        <v-text-field
          v-model="education.institutionType"
          :placeholder="$t('resume.register.education.placeholders.type')"
          @input="$emit('update-item', education)"
          outlined
        />
      </v-col>
    </v-row>

    <form-input :title="$t('resume.register.education.institution')" />
    <v-text-field
      v-model="education.name"
      :placeholder="$t('resume.register.education.placeholders.institution')"
      @input="$emit('update-item', education)"
      outlined
    />

    <v-row>
      <v-col cols="6" md="3">
        <form-input :title="$t('resume.register.education.from')" />
        <v-text-field
          v-model="education.startDate"
          @input="$emit('update-item', education)"
          outlined
          :placeholder="$t('common.year')"
          :rules="[rules.year(education.startDate)]"
        />
      </v-col>
      <v-col cols="6" md="3">
        <form-input :title="$t('resume.register.education.to')" />
        <v-text-field
          v-model="education.endDate"
          @input="$emit('update-item', education)"
          outlined
          :placeholder="$t('common.year')"
          :rules="[rules.year(education.endDate)]"
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
};
</script>

<style></style>
