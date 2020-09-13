<template>
  <div>
    <v-row>
      <v-col cols="12" md="8">
        <form-input class="mt-6" :title="$t('CV.register.education.degree')" />
        <v-text-field outlined :label="$t('CV.register.education.degree')" />
      </v-col>
      <v-col cols="12" md="4">
        <form-input class="mt-6" :title="$t('CV.register.education.type')" />
        <v-combobox outlined :placeholder="$t('CV.register.education.type')" />
      </v-col>
    </v-row>

    <form-input :title="$t('CV.register.education.institution')" />
    <v-text-field outlined :label="$t('CV.register.education.institution')" />

    <v-row>
      <v-col cols="12" md="3">
        <form-input :title="$t('CV.register.education.from')" />
        <v-combobox outlined :placeholder="$t('CV.register.education.from')" />
      </v-col>
      <v-col cols="12" md="3">
        <form-input :title="$t('CV.register.education.to')" />
        <v-combobox outlined :placeholder="$t('CV.register.education.to')" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Education',
};
</script>

<style></style>
