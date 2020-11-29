<template>
  <div>
    <form-input class="mt-6" :title="$t('resume.register.preferences.jobInterests.title')" />
    <div class="d-flex justify-space-between flex-wrap">
      <v-checkbox
        v-model="jobInterests"
        @change="$emit('job-interests', jobInterests)"
        v-for="(option, index) in $t('enums.jobInterests')"
        :key="index"
        :label="option.text"
        :value="option.value"
        :rules="[rules.required(jobInterests)]"
      />
    </div>
    <form-input class="mt-6" :title="$t('resume.register.preferences.jobType.title')" />
    <div class="d-flex justify-space-between flex-wrap">
      <v-checkbox
        v-model="contractType"
        @change="$emit('contract-type', contractType)"
        v-for="(option, index) in $t('enums.contractType')"
        :label="option.text"
        :value="option.value"
        :key="index"
        :rules="[rules.required(contractType)]"
      />
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Preferences',
  data() {
    return {
      jobInterests: [],
      contractType: [],
      rules: {
        required: () => true,
      },
    };
  },
};
</script>

<style></style>
