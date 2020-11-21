<template>
  <div>
    <form-input :title="$t('job.new.jobTitle.title')" required />
    <v-text-field
      outlined
      v-model="title"
      :rules="[rules.required(title)]"
      @input="$emit('title', title)"
    />
    <form-input required :title="$t('job.new.experienceLevel.title')" />
    <g-autocomplete
      @input="
        e => {
          experienceLevel = e;
          $emit('experience-level', experienceLevel);
        }
      "
      :multiple="false"
      :rules="[rules.required(experienceLevel)]"
      :items="$t('enums.experienceLevel')"
    />
    <form-input required :title="$t('job.new.contractType.title')" />
    <g-autocomplete
      @input="
        e => {
          contractType = e;
          $emit('contract-type', contractType);
        }
      "
      :multiple="false"
      :rules="[rules.required(contractType)]"
      :items="$t('enums.contractType')"
    />
  </div>
</template>

<script>
import RulesHelper from 'Helpers/rules';
import StorageHelper from 'Helpers/storage';

export default {
  name: 'NewJob1',
  props: {
    job: Object,
  },
  mounted() {
    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
    this.company = StorageHelper.loadState('companyId');

    this.title = this.job.title
    this.experienceLevel = this.job.experienceLevel
    this.contractType = this.job.contractType
  },
  data() {
    return {
      title: '',
      experienceLevel: '',
      contractType: '',
      company: '',
      rules: {
        required: () => true,
      },
    };
  },
  watch: {
  },
};

</script>

<style></style>
