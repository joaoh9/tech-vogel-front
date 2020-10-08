<template>
  <div>
    <form-input
      position="left"
      :title="$t('Job.new.jobTitle.title')"
      :tooltip="$t('Job.new.jobTitle.tooltip')"
      required
    />
    <v-text-field
      :rules="[rules.required]"
      v-model="title"
      @input="$emit('title', title)"
      outlined
    />

    <form-input position="left" :title="$t('Job.new.id.title')" required />
    <v-text-field
      :hint="$t('Job.new.id.inputHint', { id: id })"
      :rules="[rules.required]"
      outlined
      v-model="id"
      @input="$emit('id', id)"
    />
    <form-input
      position="right"
      :title="$t('Job.new.experienceLevel.title')"
      :tooltip="$t('Job.new.experienceLevel.tooltip')"
    ></form-input>
    <v-autocomplete
      item-value="value"
      item-text="text"
      class="border-lg"
      :rules="[rules.required]"
      :items="$t('Data.experienceLevel')"
      v-model="experienceLevel"
      @input="$emit('experience-level', experienceLevel)"
      outlined
    />
    <form-input
      position="right"
      :title="$t('Job.new.contractType.title')"
      :tooltip="$t('Job.new.contractType.tooltip')"
    />
    <v-autocomplete
      item-value="value"
      item-text="text"
      :items="$t('Data.contractType')"
      v-model="contractType"
      @input="$emit('contract-type', contractType)"
      outlined
    />
  </div>
</template>

<script>
import RulesHelper from 'Helpers/rules';

export default {
  name: 'NewJob1',
  mounted() {
    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
  },
  data() {
    return {
      title: '',
      experienceLevel: '',
      contractType: '',
      id: '',
      rules: {
        required: () => true,
      },
    };
  },
};
</script>

<style></style>
