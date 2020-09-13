<template>
  <div>
    <form-input class="mt-6" :title="$t('CV.register.personalInfo.fullName.title')" />
    <v-text-field outlined :label="$t('CV.register.personalInfo.fullName.title')" />
    <form-input class="mt-6" :title="$t('CV.register.personalInfo.location.title')" />
    <v-row>
      <v-col cols="12" md="8">
        <v-combobox
          class="mt-n3"
          outlined
          :placeholder="$t('CV.register.personalInfo.location.city')"
        />
      </v-col>
      <v-col cols="12" md="4">
        <v-combobox
          class="mt-n3"
          outlined
          :placeholder="$t('CV.register.personalInfo.location.country')"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'ResumePersonalInfo',
};
</script>

<style></style>
