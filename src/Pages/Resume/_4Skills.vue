<template>
  <div class="">
    <form-input
      type="h6"
      :title="$t('Job.new.techSkills.title')"
      :description="$t('Job.new.techSkills.description')"
    />
    <v-autocomplete
      :hint="$t('Job.new.techSkills.inputHint')"
      v-model="techSkills"
      :items="$t('skills.techSkills')"
      hide-details
      hide-selected
      outlined
      multiple
      small-chips
      deletable-chips
      item-text="text"
      item-value="value"
    />
    <SkillExperienceLevel
      :key="`XP-LVL-${techSkills.length}`"
      :items="techSkills"
      :experienceLevel="$t('skills.yearsOfExperience')"
    />
    <form-input
      class="mt-2"
      type="h6"
      :title="$t('Job.new.otherSkills.title')"
      :description="$t('Job.new.otherSkills.description')"
    />
    <form-input class="mt-4" :title="$t('Job.new.softSkills.title')" />
    <v-autocomplete
      :hint="$t('Job.new.softSkills.inputHint')"
      hide-selected
      v-model="softSkills"
      item-text="text"
      item-value="value"
      :items="$t('skills.softSkills')"
      outlined
      multiple
      small-chips
      deletable-chips
      hide-details
    />
    <SkillExperienceLevel
      :key="`Soft-${softSkills.length}`"
      :items="softSkills"
      :experienceLevel="$t('skills.priorities')"
    />
    <form-input class="mt-6" :title="$t('Job.new.languages.title')" />
    <v-autocomplete
      class="mb-10"
      :hint="$t('Job.new.languages.inputHint')"
      hide-selected
      v-model="languages"
      item-text="text"
      item-value="value"
      :items="$t('skills.languages')"
      outlined
      multiple
      small-chips
      deletable-chips
      hide-details
    />
    <v-row
      justify="center"
      align="center"
      v-for="(language, i) in languages"
      :key="`Lan-${i}`"
      :class="i === 0 ? 'mt-4' : 'mt-n0'"
    >
      <v-col class="d-flex" cols="12" md="4">
        <v-icon @click="languages.splice(i, 1)" class="align-self-center mr-2">
          mdi-close
        </v-icon>
        <div class="bdy-1 align-self-center" style="line-height: 100% !important">
          {{ language.id }}
        </div>
      </v-col>
      <v-col cols="12" md="8" class="mt-n6 mt-md-0 mb-4 mb-md-0">
        <v-btn-toggle
          v-model="languages[i]['experienceLevel']"
          color="primary"
          class=" bg-color-bg d-inline-flex justify-center flex-wrap "
        >
          <v-btn
            class="bg-color-bg flex-fill ma-1"
            outlined
            input-value="value"
            :value="fluency.value"
            v-for="(fluency, index) in $t('skills.languages')"
            :key="`L-${index}`"
          >
            {{ fluency.text }}
          </v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SkillExperienceLevel from 'Components/Interface/SkillExperienceLevel';

export default {
  name: 'NewJob3',
  components: {
    SkillExperienceLevel,
  },
  data() {
    return {
      techSkills: [],
      softSkills: [],
      languages: [],
    };
  },
  methods: {
    getSkillsPriorities() {
      return this.$t('skills.priorities');
    },
    treatSkillInput(e) {
      alert(e);
      this.skills.push({ id: e, priority: 0 });
    },
  },
  watch: {
    techSkills() {
      this.$emit('tech-skills', this.techSkills);
    },
    softSkills() {
      this.$emit('soft-skills', this.softSkills);
    },
    languages() {
      this.$emit('languages', this.languages);
    },
  },
};
</script>

<style>
.theme--light.v-chip:not(.v-chip--active) {
  background: #ffe8cb;
}
</style>
