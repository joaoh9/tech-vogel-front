<template>
  <div>
    <form-input :title="$t('CV.register.skills.programmingLanguages')" />
    <v-text-field outlined />
    <form-input :title="$t('CV.register.skills.frameworks')" />
    <v-text-field outlined />
    <form-input :title="$t('CV.register.skills.knowledgeAreas')" />
    <v-text-field outlined />
    <form-input :title="$t('CV.register.skills.softSkills')" />
    <v-text-field outlined />
    <v-row class="d-flex justify-end">
      <v-btn max-width="400" class="align-self-center mt-4" color="primary" large>
        {{ $t('CV.register.skills.button') }}
      </v-btn>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
