<template>
  <div>
    <CardTemplate
      :title="$t('CV.register.preferences.title')"
      :description="$t('CV.register.preferences.description')"
    >
      <template v-slot:content="{}">
        <form-input class="mt-6" :title="$t('CV.register.preferences.jobInterests.title')" />
        <v-text-field
          v-model="jobInterests"
          v-on:input="$emit('job-interests', jobInterests)"
          :placeholder="$t('CV.register.preferences.jobInterests.placeholder')"
          outlined
        />
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
      </template>
    </CardTemplate>
  </div>
</template>

<script>
import CardTemplate from 'Components/Interface/CardTemplate';

export default {
  name: 'Preferences',
  components: {
    CardTemplate,
  },
  data() {
    return {
      jobInterests: '',
      jobType: [],
    };
  },
};
</script>

<style></style>
