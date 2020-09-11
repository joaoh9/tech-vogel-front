<template>
  <div class="d-flex justify-center ma-12" style="flex-direction: column">
    <h4 class="h4-bold align-self-center">{{ $t('CV.register.workExperience.title') }}</h4>
    <form-input :title="$t('CV.register.workExperience.company.title')" />
    <v-text-field outlined>
    <form-input :title="$t('CV.register.workExperience.position.title')" />
    <v-text-field outlined>
    <v-row>
      <v-col>
        <form-input :title="$t('Common.from')" />
        <v-row>
          <v-col>
          </v-col>
          <v-col>
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <v-row>
          <v-col>
          </v-col>
          <v-col>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
