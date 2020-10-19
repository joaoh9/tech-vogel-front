<template>
  <div>
    <form-input
      type="h6"
      :title="$t('job.new.techSkills.title')"
      :description="$t('job.new.techSkills.description')"
    />
    <v-autocomplete
      :hint="$t('job.new.techSkills.inputHint')"
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
      skillTitle="techSkills"
      :experienceLevel="$t('enums.yearsOfExperience')"
    />
    <form-input
      class="mt-2"
      type="h6"
      :title="$t('job.new.otherSkills.title')"
      :description="$t('job.new.otherSkills.description')"
    />
    <form-input class="mt-4" :title="$t('job.new.softSkills.title')" />
    <v-autocomplete
      :hint="$t('job.new.softSkills.inputHint')"
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
    <form-input class="mt-6" :title="$t('job.new.languages.title')" />
    <v-autocomplete
      class="mb-10"
      :hint="$t('job.new.languages.inputHint')"
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
    <SkillExperienceLevel
      :key="`Languages-${languages.length}`"
      :items="languages"
      skillTitle="languages"
      :experienceLevel="$t('enums.languages')"
    />
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
      skills: {
        techSkills: [],
        softSkills: [],
        languages: [],
      },
    };
  },
  watch: {
    techSkills() {
      this.skills.techSkills = this.techSkills;
      this.$emit('skills', this.skills);
    },
    softSkills() {
      this.skills.softSkills = this.softSkills;
      this.$emit('skills', this.skills);
    },
    languages() {
      this.skills.languages = this.languages;
      this.$emit('skills', this.skills);
    },
  },
};
</script>

<style>
.theme--light.v-chip:not(.v-chip--active) {
  background: #ffe8cb;
}
</style>
