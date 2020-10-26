<template>
  <div>
    <form-input
      type="h6"
      :title="$t('job.new.techSkills.title')"
      :description="$t('job.new.techSkills.description')"
    />
    <g-autocomplete
      :hint="$t('job.new.techSkills.inputHint')"
      @input="e => (techSkills = e)"
      :items="$t('skills.techSkills')"
    />
    <sub-1>{{ $t(`${form}.new.techSkills.inputHint`) }}</sub-1>

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
    />
    <form-input
      class="mt-8"
      :title="$t('job.new.softSkills.title')"
      :description="$t('job.new.softSkills.inputHint')"
    />
    <g-autocomplete @input="e => (softSkills = e)" :items="$t('skills.softSkills')" />

    <form-input class="mt-6" :title="$t('job.new.languages.title')" />

    <g-autocomplete
      class="mb-10"
      :hint="$t('job.new.languages.inputHint')"
      @input="e => (languages = e)"
      :items="$t('skills.languages')"
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
