<template>
  <div>
    <v-row
      justify="center"
      align="center"
      v-for="(skill, i) in items"
      :key="i"
      :class="i !== 0 ? 'mt-n6' : ''"
    >
      <v-col class="d-flex" cols="12" md="4">
        <v-icon @click="deleteSkills(i)" class="align-self-center mr-2">
          mdi-close
        </v-icon>
        <div class="bdy-1 align-self-center" style="line-height: 100% !important">
          {{ $t(`skills.dictionary.${skillTitle}.${skill.skillId}`) }}
        </div>
      </v-col>
      <v-col cols="12" md="8" class="mt-n6 mt-md-0 mb-4 mb-md-0">
        <v-radio-group :row="$vuetify.breakpoint.mdAndUp" v-model="items[i]['experienceLevel']">
          <v-radio
            color="primary"
            :class="`mx-md-${experienceLevel.length >= 3 ? '3' : '6'} mx-0 my-2`"
            v-for="(check, j) in experienceLevel"
            :key="j"
            :label="check.text"
            :value="check.value"
          />
        </v-radio-group>
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
  },
  methods: {
    deleteSkills(index) {
      this.items.splice(index, 1);
    },
  },
};
</script>

<style></style>
