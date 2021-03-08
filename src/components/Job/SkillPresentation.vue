<template>
  <div class="mx-3" v-if="skills" :key="skills.length">
    <v-row
      :class="`d-flex ${i == Object.keys(skills).length - 1 ? 'mb-0' : 'mb-0'} flex-wrap`"
      v-for="(skillType, i) in Object.keys(skills)"
      :key="i"
    >
      <h6 v-if="skills[skillType].length" class="mr-4 mb-2 color-secondary">
        {{ $t(`enums.skills.${skillType}`) }}
      </h6>
      <v-row v-if="skills[skillType].length">
        <v-chip
          :class="`mx-2 my-2 align-self-center ${j < skills[skillType] ? 'mb-0' : ''}`"
          v-for="(skill, j) in skills[skillType]"
          :style="getStyle(skill, skillType)"
          :key="j"
        >
          {{
            skill.skillId === 'blocked'
              ? 'blocked'
              : $t(`skills.dictionary.${skillType}.${skill.skillId}`)
          }}
        </v-chip>

        <bdy-1 v-if="others"> + {{ others[skillType] }} outras</bdy-1>
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
    others: Object,
  },
  methods: {
    getStyle(skill, skillType) {
      const color = this.getColor(skillType);
      return skill.skillId === 'blocked'
        ? 'filter: blur(6px); background-color: white'
        : `background-color: ${color}`;
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
