<template>
  <div>
    <CardTemplate
      :title="$t('CV.register.skills.title')"
      :description="$t('CV.register.skills.description')"
    >
      <template v-slot:content="{}">
        <form-input :title="$t('CV.register.skills.programmingLanguages')" />
        <v-text-field
          v-model="skills.programmingLanguages"
          v-on:input="$emit('skills', skills)"
          outlined
        />
        <form-input :title="$t('CV.register.skills.frameworks')" />
        <v-text-field v-model="skills.frameworks" v-on:input="$emit('skills', skills)" outlined />
        <form-input :title="$t('CV.register.skills.knowledgeAreas')" />
        <v-text-field
          v-model="skills.knowledgeAreas"
          v-on:input="$emit('skills', skills)"
          outlined
        />
        <form-input :title="$t('CV.register.skills.softSkills')" />
        <v-text-field v-model="skills.softSkills" v-on:input="$emit('skills', skills)" outlined />
      </template>
    </CardTemplate>
  </div>
</template>

<script>
import CardTemplate from './CardTemplate';

export default {
  name: 'Skills',
  components: {
    CardTemplate,
  },
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
