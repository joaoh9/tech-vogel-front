<template>
  <div>
    <form-input class="mt-6" :title="$t('resume.register.preferences.companySize.title')" />
    <div class="d-flex justify-space-between flex-wrap">
      <v-checkbox
        :data-cy="option.value"
        v-model="companySize"
        @change="$emit('job-interests', companySize)"
        v-for="(option, index) in $t('enums.companySize')"
        :key="index"
        :label="option.text"
        :value="option.value"
        :rules="[rules.required(companySize)]"
      />
    </div>
    <form-input class="mt-6" :title="$t('resume.register.preferences.contractType.title')" />
    <div class="d-flex justify-space-between flex-wrap">
      <v-checkbox
        :data-cy="option.value"
        v-model="contractType"
        class="mr-2"
        @change="$emit('contract-type', contractType)"
        v-for="(option, index) in $t('enums.contractType')"
        :label="option.text"
        :value="option.value"
        :key="index"
        :rules="[rules.required(contractType)]"
      />
    </div>
    <form-input class="mt-6" :title="$t('resume.register.preferences.jobType.title')" />
    <div class="d-flex justify-space-between flex-wrap">
      <v-checkbox
        :data-cy="option.value"
        v-model="jobType"
        class="mr-2"
        @change="$emit('job-type', jobType)"
        v-for="(option, index) in $t('enums.jobType')"
        :label="option.text"
        :value="option.value"
        :key="index"
        :rules="[rules.required(jobType)]"
      />
    </div>
    <form-input
      v-if="jobType.filter(el => el === '2' || el === '3').length"
      class="mt-6"
      :title="$t('resume.register.preferences.relocationOptions.title')"
    />
    <div
      class="d-flex justify-space-between flex-wrap"
      v-if="jobType.filter(el => el === '2' || el === '3').length"
    >
      <v-radio-group
        v-model="relocationOptions"
        @change="$emit('relocation-options', (relocationOptions + 1).toString())"
      >
        <div
          class="d-flex align-center my-2"
          v-for="(item, i) in $t('enums.relocationOptions')"
          :key="i"
        >
          <v-radio class="ml-2" :label="item.text"> </v-radio>
        </div>
      </v-radio-group>
    </div>

    <slot />
  </div>
</template>

<script>
export default {
  name: 'Preferences',
  props: {
    _companySize: Array,
    _contractType: Array,
    _jobType: Array,
    _relocationOptions: Array,
  },
  mounted() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
    if (this._companySize) {
      this.companySize = this._companySize;
    }
    if (this._contractType) {
      this.contractType = this._contractType;
    }
    if (this._jobType) {
      this.jobType = this._jobType;
    }
    if (this._relocationOptions) {
      this.relocationOptions = this._relocationOptions;
    }
  },
  data() {
    return {
      companySize: [],
      contractType: [],
      jobType: [],
      relocationOptions: '',
      rules: {
        required: () => true,
      },
    };
  },
};
</script>

<style></style>
