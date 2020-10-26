<template>
  <div>
    <form-input :title="$t('job.new.jobTitle.title')" required />
    <v-text-field
      outlined
      v-model="title"
      :rules="[rules.required(title)]"
      @input="$emit('title', title)"
    />

    <form-input :title="$t('job.new.id.title')" required />
    <v-text-field
      :hint="
        $t('job.new.id.inputHint', {
          company: company,
          id:
            id
              .replace(/\//g, '-')
              .replace(/ /g, '-')
              .replace(/[-]{1,9}/g, '-')
              .replace(/[A-Z]/g, match => match.toLowerCase()) +
            '-' +
            randomId,
        })
      "
      outlined
      v-model="id"
      :rules="[rules.required(id)]"
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
    this.randomId = Math.round(Math.random() * 10000).toString();

    this.title = this.job.title
    this.experienceLevel = this.job.experienceLevel
    this.contractType = this.job.contractType
    this.id = this.job.id
  },
  data() {
    return {
      randomId: '',
      title: '',
      experienceLevel: '',
      contractType: '',
      id: '',
      company: '',
      rules: {
        required: () => true,
      },
    };
  },
  watch: {
    id() {
      const auxId =
        this.id
          .replace(/\//g, '-')
          .replace(/ /g, '-')
          .replace(/[-]{1,9}/g, '-')
          .replace(/[A-Z]/g, match => match.toLowerCase()) +
        '-' +
        this.randomId;
      this.$emit('id', auxId);
    },
    title() {
      this.id = this.title.replace(/ /g, '-');
    },
  },
};
</script>

<style></style>
