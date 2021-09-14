<template>
  <div>
    <h6 v-if="explanation" class="color-cinza-lighten-1">{{ explanationText }}</h6>
    <v-row
      justify="center"
      align="center"
      v-for="(skill, i) in items"
      :key="i"
      :class="i !== 0 ? 'mt-n6' : ''"
    >
      <v-col cols="12" md="12" class="mt-n6 mt-sm-0 mb-2 mb-sm-0">
        <v-slider
          class="mb-5"
          color="secondary"
          track-color="secondary-lighten-3"
          step="1"
          :max="5"
          :min="0"
          persistent-hint
          :key="skill.skillId"
          v-model="xpLevel[skill.skillId]"
          :label="textMapping[skill.skillId]"
          :hint="getXPLabel(xpLevel[skill.skillId])"
          @change="$emit('xp-level', xpLevel[skill.skillId], skill.skillId, skillTitle)"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'SkillExperienceLevel',
  props: {
    items: Array,
    experienceLevel: Array,
    skillTitle: String,
    textMapping: Object,
    explanation: {
      type: Boolean,
      default: false,
    },
    explanationText: String,
  },
  mounted() {
    if (this.items) {
      for (const el of this.items) {
        if (!(el in this.xpLevel)) {
          this.xpLevel[el.skillId] = el.experienceLevel;
        }
      }
    }
  },
  data() {
    return {
      xpLevel: {},
    };
  },
  methods: {
    deleteSkills(index) {
      this.items.splice(index, 1);
    },
    getXPLabel(value) {
      if (!value) {
        value = 0;
      }
      const map = {
        0: '1 ano ou menos',
        1: '1 a 2 anos',
        2: '2 a 3 anos',
        3: '3 a 4 anos',
        4: '4 a 5 anos',
        5: '5+ anos',
      };

      return map[value];
    },
  },
  watch: {
    'xpLevel.length'() {
      this.$emit('xp-level', this.xpLevel);
    },
  },
};
</script>

<style></style>
