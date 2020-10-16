<template>
  <div class="mx-3">
    <v-row class="d-flex flex-wrap" v-for="(skillType, i) in Object.keys(skills)" :key="i">
      <h6 class="mr-4">{{ $t(`dictionary.${skillTitle}.${skillType}`) }}</h6>
      <v-row>
        <v-chip
          class="ml-2 mb-2 align-self-center"
          :style="getStyle(skill, skillType)"
          v-for="(skill, j) in skills[skillType]"
          :key="j"
        >
          {{ $t(`Dictionary.${skillType}.${skill.skillId}`) }}
        </v-chip>
      </v-row>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'SkillPresentation',
  props: {
    skills: Object,
    skillTitle: String,
  },
  methods: {
    getStyle(skill, skillType) {
      const color = this.getColor(skillType);
      return `background-color: ${color}; opacity: ${skill.experienceLevel * 10 + 50}%`;
    },
    getColor(skillType) {
      const map = {
        techSkills: 'white',
        softSkills: 'white',
        languages: 'white',
      };

      return map[skillType];
    },
  },
};
</script>

<style></style>
