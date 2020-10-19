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
    <v-autocomplete
      v-model="experienceLevel"
      :rules="[rules.required(experienceLevel)]"
      item-value="value"
      item-text="text"
      class="border-lg"
      :items="$t('enums.experienceLevel')"
      @input="$emit('experience-level', experienceLevel)"
      outlined
    />
    <form-input required :title="$t('job.new.contractType.title')" />
    <v-autocomplete
      v-model="contractType"
      @input="$emit('contract-type', contractType)"
      :rules="[rules.required(contractType)]"
      item-value="value"
      item-text="text"
      :items="$t('enums.contractType')"
      outlined
    />
  </div>
</template>

<script>
import RulesHelper from 'Helpers/rules';
import StorageHelper from 'Helpers/storage';

export default {
  name: 'NewJob1',
  mounted() {
    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
    this.company = StorageHelper.loadState('companyId');
    this.randomId = Math.round(Math.random() * 10000).toString();
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
