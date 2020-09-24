<template>
  <div>
    <g-card-header
      :title="$t('CV.register.preferences.title')"
      :description="$t('CV.register.preferences.description')"
    >
      <template v-slot:content="{}">
        <form-input class="mt-6" :title="$t('CV.register.preferences.jobInterests.title')" />
        <div class="d-flex justify-space-between">
          <v-checkbox
            v-model="jobInterests"
            v-on:input="$emit('job-interests', jobInterests)"
            v-for="(options, index) in $t('CV.register.preferences.jobInterests.options')"
            :key="index"
            :label="options"
            :value="options"
            outlined
          />
        </div>
        <form-input class="mt-6" :title="$t('CV.register.preferences.jobType.title')" />
        <div class="d-flex justify-space-between">
          <v-checkbox
            v-model="jobType"
            v-on:input="$emit('job-type', jobType)"
            v-for="(options, index) in $t('CV.register.preferences.jobType.options')"
            :label="options"
            :value="options"
            :key="index"
          />
        </div>
        <slot/>
      </template>
    </g-card-header>
  </div>
</template>

<script>
export default {
  name: 'Preferences',
  data() {
    return {
      jobInterests: '',
      jobType: [],
    };
  },
};
</script>

<style></style>
