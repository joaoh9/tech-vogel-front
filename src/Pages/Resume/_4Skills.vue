<template>
  <div>
    <form-input :title="$t('CV.register.skills.knowledgeAreas')" />
    <v-combobox
      v-model="skills.knowledgeAreas"
      v-on:input="$emit('skills', skills)"
      :items="$t('Data.knowledgeAreas')"
      multiple
      outlined
      chips
      deletable-chips
    />
    <form-input :title="$t('CV.register.skills.programmingLanguages')" />
    <v-combobox
      v-model="skills.programmingLanguages"
      v-on:input="$emit('skills', skills)"
      :items="$t('Data.programmingLanguages')"
      outlined
      multiple
      chips
      deletable-chips
    />
    <form-input :title="$t('CV.register.skills.frameworks')" />
    <v-combobox
      v-model="skills.frameworks"
      v-on:input="$emit('skills', skills)"
      :items="$t('Data.frameworks')"
      item-text="name"
      item-value="name"
      multiple
      outlined
      chips
      deletable-chips
    />
    <form-input :title="$t('CV.register.skills.softSkills')" />
    <v-combobox
      v-model="skills.softSkills"
      v-on:input="$emit('skills', skills)"
      :items="$t('Data.softSkills')"
      item-text="name"
      item-value="name"
      multiple
      outlined
      chips
      deletable-chips
    />
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
