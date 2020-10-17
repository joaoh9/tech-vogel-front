<template>
  <div>
    <form-input :title="$t('job.new.jobTitle.title')" required />
    <v-text-field
      outlined
      :rules="[rules.required]"
      v-model="title"
      @input="$emit('title', title)"
    />

    <form-input :title="$t('job.new.id.title')" required />
    <v-text-field
      :hint="
        $t('job.new.id.inputHint', {
          company: company,
          id: id
            .replace(/\//g, '-')
            .replace(/ /g, '-')
            .replace(/[-]{1,9}/g, '-'),
        })
      "
      :rules="[rules.required]"
      outlined
      v-model="id"
      @input="$emit('id', id)"
    />
    <form-input required :title="$t('job.new.experienceLevel.title')" />
    <v-autocomplete
      item-value="value"
      item-text="text"
      class="border-lg"
      :rules="[rules.required]"
      :items="$t('enums.experienceLevel')"
      v-model="experienceLevel"
      @input="$emit('experience-level', experienceLevel)"
      outlined
    />
    <form-input :title="$t('job.new.contractType.title')" />
    <v-autocomplete
      item-value="value"
      item-text="text"
      :items="$t('enums.contractType')"
      v-model="contractType"
      @input="$emit('contract-type', contractType)"
      outlined
    />
  </div>
</template>

<script>
import RulesHelper from 'Helpers/rules';
import JwtHelper from 'Helpers/jwt';

export default {
  name: 'NewJob1',
  mounted() {
    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
    const jwtHelper = new JwtHelper();
    //  TODO: tratar erro de jwt
    const companyInfo = jwtHelper.getData('company');
    console.log('companyInfo', companyInfo);
    this.company = companyInfo.companyId;
  },
  data() {
    return {
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
    title() {
      this.id = this.title.replace(/ /g, '-');
      this.$emit('id', this.id);
    },
  },
};
</script>

<style></style>
