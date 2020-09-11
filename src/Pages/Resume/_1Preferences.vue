<template>
  <div>
    <form-input class="mt-6" :title="$t('CV.register.preferences.jobInterests.title')" />
    <v-combobox :placeholder="$t('CV.register.preferences.jobInterests.placeholder')" outlined />
    <div class="d-flex justify-space-between">
      <v-checkbox
        v-for="(options, index) in $t('CV.register.preferences.jobType.options')"
        :label="options"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Preferences',
  components: {},
};
</script>

<style></style>
