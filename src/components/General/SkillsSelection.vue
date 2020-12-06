<template>
  <div>
    <form-input
      type="h6"
      :title="$t('job.new.techSkills.title')"
      :description="$t('job.new.techSkills.description')"
      required
    />
    <v-select
      autofocus
      v-model="techSkills"
      @input="e => (techSkills = e)"
      :items="$t('skills.techSkills')"
      outlined
      :multiple="true"
    />

    <SkillExperienceLevel
      :key="`XP-LVL-${techSkills.length}`"
      :items="techSkills"
      skillTitle="techSkills"
      :experienceLevel="form === 'job' ? $t('enums.priorities') : $t('enums.yearsOfExperience')"
    />
    <form-input
      class="mt-6"
      type="h6"
      :title="$t('job.new.otherSkills.title')"
      :description="$t('job.new.otherSkills.description')"
      required
    />
    <form-input
      class="mt-8"
      :title="$t('job.new.softSkills.title')"
      :description="$t('job.new.softSkills.inputHint')"
    />
    <v-select
      v-model="softSkills"
      @input="e => (softSkills = e)"
      :items="$t('skills.softSkills')"
      outlined
      :multiple="true"
    />

    <form-input
      class="mt-6"
      :title="$t('job.new.languages.title')"
      :description="$t('job.new.language.inputHint')"
    />

    <v-select
      class="mb-10"
      :label="$t('job.new.languages.inputHint')"
      v-model="languages"
      @input="e => (languages = e)"
      :items="$t('skills.languages')"
      outlined
      :multiple="true"
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
  props: {
    form: {
      type: String,
      default: 'job',
    },
    job: {
      type: Object,
    },
  },
  mounted() {
    if (this.job && this.job.skills) {
      this.skills = this.job.skills;
      this.techSkills = this.job.techSkills;
      this.softSkills = this.job.softSkills;
      this.languages = this.job.languages;
    }
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
