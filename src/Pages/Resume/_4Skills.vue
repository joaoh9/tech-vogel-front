<template>
  <div>
    <form-input :title="$t('CV.register.skills.programmingLanguages')" />
    <v-text-field
      v-model="skills.programmingLanguages"
      v-on:input="$emit('skills', skills)"
      outlined
    />
    <form-input :title="$t('CV.register.skills.frameworks')" />
    <v-text-field v-model="skills.frameworks" v-on:input="$emit('skills', skills)" outlined />
    <form-input :title="$t('CV.register.skills.knowledgeAreas')" />
    <v-combobox
      v-model="skills.knowledgeAreas"
      v-on:input="$emit('skills', skills)"
      outlined
      :items="$t('Data.softSkills')"
    />
    <form-input :title="$t('CV.register.skills.softSkills')" />
    <v-text-field v-model="skills.softSkills" v-on:input="$emit('skills', skills)" outlined />
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skills: {
        programmingLanguages: '',
        frameworks: '',
        knowledgeAreas: '',
        softSkills: '',
      },
    };
  },
};
</script>

<style></style>
