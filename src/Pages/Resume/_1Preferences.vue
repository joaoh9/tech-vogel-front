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
import ResumeController from 'Controllers/resume';

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
  mounted() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;

    this.getResumeInfo();
  },
  methods: {
    async getResumeInfo() {
      const resumeController = new ResumeController();

      try {
        const data = await resumeController.getCurrentResume();

        this.jobInterests = data.jobInterests;
        this.contractType = data.contractType;
      } catch (e) {
        this.$toast.error(this.$t('toast.error.retrieveUserResume'));
      }

      this.$emit('job-interests', this.jobInterests);
      this.$emit('contract-type', this.contractType);
    },
  },
};
</script>

<style></style>
