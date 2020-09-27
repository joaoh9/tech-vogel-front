<template>
  <div>
    <form-input
      position="left"
      :title="$t('Job.new.jobTitle.title')"
      :tooltip="$t('Job.new.jobTitle.tooltip')"
    />
    <v-text-field
      :rules="[rules.required]"
      v-model="title"
      @input="$emit('title', title)"
      outlined
    />
    <form-input
      position="right"
      :title="$t('Job.new.experienceLevel.title')"
      :tooltip="$t('Job.new.experienceLevel.tooltip')"
    ></form-input>
    <v-combobox
      class="border-lg"
      multiple
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
    <v-combobox
      :items="$t('Data.contractType')"
      v-model="contractType"
      @input="$emit('contract-type', contractType)"
      outlined
    />
  </div>
</template>

<script>
export default {
  name: 'NewJob1',
  data() {
    return {
      title: '',
      experienceLevel: '',
      contractType: '',
      rules: {
        required: t => t.length > 3 || 'Please write something',
      },
    };
  },
};
</script>

<style></style>
