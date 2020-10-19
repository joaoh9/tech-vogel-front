<template>
  <div class="mx-3">
    <v-row class="d-flex flex-wrap" v-for="(skillType, i) in Object.keys(skills)" :key="i">
      <h6 class="mr-4 color-secondary">{{ $t(`enums.skills.${skillType}`) }}</h6>
      <v-row>
        <v-chip
          class="ml-2 mb-4 align-self-center"
          v-for="(skill, j) in skills[skillType]"
          :style="getStyle(skill, skillType)"
          :key="j"
        >
          {{ $t(`skills.dictionary.${skillType}.${skill.skillId}`) }}
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
      return `background-color: ${color}`;
    },
    getColor(skillType) {
      const map = {
        techSkills: '#CDE4F8',
        softSkills: '#FFF6C9',
        languages: '#E2FAF3',
      };

      return map[skillType];
    },
  },
};
</script>

<style></style>
