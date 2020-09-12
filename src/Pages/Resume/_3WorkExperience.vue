<template>
  <div>
    <form-input class="mt-6" :title="$t('CV.register.workExperience.company.title')" />
    <v-text-field outlined />
    <form-input class="mt-6" :title="$t('CV.register.workExperience.position')" />
    <v-text-field outlined />
    <v-row>
      <v-col>
        <form-input class="mt-4" :title="$t('Common.from')" />
        <v-row>
          <v-col cols="12" md="6">
            <v-combobox :placeholder="$t('Common.month')" outlined />
          </v-col>
          <v-col cols="12" md="6">
            <v-combobox :placeholder="$t('Common.year')" outlined />
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <form-input class="mt-4" :title="$t('Common.to')" />
        <v-row>
          <v-col cols="12" md="6">
            <v-combobox :placeholder="$t('Common.month')" outlined />
          </v-col>
          <v-col cols="12" md="6">
            <v-combobox :placeholder="$t('Common.year')" outlined />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <div class="d-flex justify-space-between mt-n12">
      <v-checkbox
        v-for="(options, index) in $t('CV.register.workExperience.myJob.options')"
        :label="options"
        :key="index"
      />
    </div>
    <form-input :title="$t('CV.register.workExperience.position')" />
    <v-textarea height="100" outlined />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
