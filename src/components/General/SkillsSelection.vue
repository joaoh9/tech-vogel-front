<template>
  <div>
    <form-input
      type="h6"
      :title="$t('job.new.techSkills.title')"
      :description="
        from === 'job'
          ? $t('job.new.techSkills.description')
          : $t('resume.register.skills.techSkillsDescription')
      "
      required
    />
    <v-autocomplete
      class="mb-8"
      outlined
      small-chips
      deletable-chips
      item-text="text"
      item-value="value"
      hide-selected
      hide-details
      autofocus
      v-model="techSkills"
      @input="e => (techSkills = e)"
      :items="$t('skills.techSkills')"
      multiple
    />

    <SkillExperienceLevel
      :explanation="techSkills.length > 0"
      :explanationText="$t('resume.register.skills.explanation')"
      :key="`XP-LVL-${techSkills.length}`"
      :items="techSkills"
      skillTitle="techSkills"
      :experienceLevel="from === 'job' ? $t('enums.priorities') : $t('enums.yearsOfExperience')"
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
      :description="$t('job.new.softSkills.inputHint', { max: 7 })"
    />
    <v-autocomplete
      class="mb-8"
      outlined
      small-chips
      deletable-chips
      item-text="text"
      item-value="value"
      hide-selected
      hide-details
      v-model="softSkills"
      @input="e => (softSkills = e)"
      :items="$t('skills.softSkills')"
      multiple
    />

    <form-input
      class="mt-6"
      :title="$t('job.new.languages.title')"
      :description="$t('job.new.language.inputHint')"
    />

    <v-autocomplete
      class="mb-8"
      outlined
      small-chips
      deletable-chips
      item-text="text"
      item-value="value"
      hide-selected
      hide-details
      :label="$t('job.new.languages.inputHint')"
      v-model="languages"
      @input="e => (languages = e)"
      :items="$t('skills.languages')"
      multiple
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

import config from '@config';

export default {
  name: 'NewJob3',
  components: {
    SkillExperienceLevel,
  },
  props: {
    from: {
      type: String,
      default: 'job',
    },
    job: {
      type: Object,
    },
    _techSkills: Array,
    _softSkills: Array,
    _languages: Array,
  },
  mounted() {
    if (this.job && this.job.skills) {
      this.skills = this.job.skills;
      this.techSkills = this.job.techSkills;
      this.softSkills = this.job.softSkills;
      this.languages = this.job.languages;
    }
    if (this._techSkills) {
      this.techSkills = this._techSkills;
      this.skills.techSkills = this._techSkills;
    }
    if (this._softSkills) {
      this.softSkills = this._softSkills;
      this.skills.softSkills = this._softSkills;
    }
    if (this._languages) {
      this.languages = this._languages;
      this.skills.languages = this._languages;
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
      config: config,
    };
  },

  methods: {
    validateSkills(skill, skillName) {
      if (skill.length > config.skills[skillName].max) {
        this.$toast.warning(
          this.$t('job.selectMaximum', {
            max: config.skills[skillName].max,
            skillName: this.$t(`enums.skills.${skillName}`),
          }),
        );
        this[skillName].pop();
      }
      return true;
    },
  },

  watch: {
    techSkills() {
      this.skills.techSkills = this.techSkills;
      this.validateSkills(this.skills.techSkills, 'techSkills');
      this.$emit('skills', this.skills);
    },
    softSkills() {
      this.skills.softSkills = this.softSkills;
      this.validateSkills(this.skills.softSkills, 'softSkills');
      this.$emit('skills', this.skills);
    },
    languages() {
      this.skills.languages = this.languages;
      this.validateSkills(this.skills.languages, 'languages');
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
