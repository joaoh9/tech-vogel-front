<template>
  <div>
    <form-input class="mt-6" :title="$t('CV.register.preferences.jobInterests.title')" />
    <div class="d-flex justify-space-between flex-wrap">
      <v-checkbox
        v-model="jobInterests"
        v-on:input="$emit('job-interests', jobInterests)"
        v-for="(option, index) in $t('Data.jobInterests')"
        :key="index"
        :label="option"
        :value="option"
      />
    </div>
    <form-input class="mt-6" :title="$t('CV.register.preferences.jobType.title')" />
    <div class="d-flex justify-space-between flex-wrap">
      <v-checkbox
        v-model="contractType"
        v-on:input="$emit('contract-type', contractType)"
        v-for="(option, index) in $t('Data.contractType')"
        :label="option"
        :value="option"
        :key="index"
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
    };
  },
};

</script>

<style></style>


