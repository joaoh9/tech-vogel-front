<template>
  <div>
    <form-input
      :title="$t('job.new.jobTitle.title')"
      :description="$t('job.new.jobTitle.inputHint')"
      required
    />
    <v-text-field
      outlined
      v-model="title"
      :rules="[rules.required(title), rules.max(50, title)]"
      @input="$emit('title', title)"
    />

    <form-input
      :title="$t('job.new.contractType.title')"
      :description="$t('job.new.contractType.inputHint')"
      required
    />
    <v-select
      outlined
      v-model="contractType"
      @input="
        e => {
          contractType = e;
          $emit('contract-type', contractType);
        }
      "
      :multiple="false"
      :rules="[rules.required(contractType)]"
      :items="$t('enums.contractType')"
      :label="$t('job.new.contractType.label')"
    />

    <form-input
      :title="$t('job.new.experienceLevel.title')"
      :description="$t('job.new.experienceLevel.inputHint')"
      required
    />
    <v-select
      outlined
      v-model="experienceLevel"
      @input="
        e => {
          experienceLevel = e;
          $emit('experience-level', experienceLevel);
        }
      "
      :multiple="false"
      :rules="[rules.required(experienceLevel)]"
      :items="$t('enums.experienceLevel')"
      :label="$t('job.new.experienceLevel.label')"
    />
  </div>
</template>

<script>
import RulesHelper from 'Helpers/rules';

export default {
  name: 'NewJob1',
  props: {
    job: Object,
  },
  mounted() {
    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  },
  computed: {
    title() {
      if (this.job.title) {
        return this.job.title;
      }
      return '';
    },
    experienceLevel() {
      if (this.job.experienceLevel) {
        return this.job.experienceLevel;
      }
      return '';
    },
    contractType() {
      if (this.job.contractType) {
        return this.job.contractType;
      }
      return '';
    },
  },
  data() {
    return {
      rules: {
        required: () => true,
        max: () => true,
      },
    };
  },
  watch: {},
};
</script>

<style></style>
