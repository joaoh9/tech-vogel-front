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
      data-cy="tech-skills"
      :loading="techSkillsLoaded"
      :items="techSkillsData"
      multiple
    />
    <SkillExperienceLevel
      :explanation="techSkills.length > 0"
      :explanationText="$t('resume.register.skills.explanation')"
      :key="`XP-LVL-${techSkills.length}`"
      :items="techSkills"
      :textMapping="techSkillsMapping"
      skillTitle="techSkills"
      v-on:xp-level="handleChangeOnXPLevel"
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
      data-cy="soft-skills"
      @input="e => (softSkills = e)"
      :loading="softSkillsLoaded"
      :items="softSkillsData"
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
      data-cy="languages"
      @input="e => (languages = e)"
      :loading="languagesLoaded"
      :items="languagesData"
      multiple
    />

    <SkillExperienceLevel
      :key="`Languages-${languages.length}`"
      :items="languages"
      v-on:xp-level="handleChangeOnXPLevel"
      :textMapping="languagesMapping"
      skillTitle="languages"
      :experienceLevel="$t('enums.languages')"
    />
  </div>
</template>

<script>
import SkillExperienceLevel from 'Components/Interface/SkillExperienceLevel';
import TagsController from 'Controllers/tags';

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
    }
    if (this._skills) {
      this.skills = this._skills;
    }
    this.getSkills();
  },
  data() {
    return {
      techSkills: [],
      softSkills: [],
      languages: [],
      skills: [],
      config: config,
      techSkillsLoaded: true,
      softSkillsLoaded: true,
      languagesLoaded: true,
      techSkillsData: [],
      softSkillsData: [],
      languagesData: [],
      techSkillsMapping: {},
      softSkillsMapping: {},
      languagesMapping: {},
    };
  },

  methods: {
    log(e) {
      console.log(...e);
    },
    async getSkills() {
      const tagsController = new TagsController();
      this.techSkillsData = await tagsController.getSkillsTags('TECH');
      this.techSkillsMapping = await tagsController.getSkillsMapping('TECH');

      this.techSkillsLoaded = false;

      this.softSkillsData = await tagsController.getSkillsTags('SOFT');
      this.softSkillsMapping = await tagsController.getSkillsMapping('SOFT');

      this.softSkillsLoaded = false;

      this.languagesData = await tagsController.getSkillsTags('LANGUAGE');
      this.languagesMapping = await tagsController.getSkillsMapping('LANGUAGE');

      this.languagesLoaded = false;
    },
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
    handleChangeOnXPLevel(xpLevel, skillId, skillType) {
      console.log(
        '🚀 ~ file: SkillsSelection.vue ~ line 191 ~ handleChangeOnXPLevel ~ xpLevel, skillId, skillType',
        xpLevel,
        skillId,
        skillType,
      );

      const index = this[skillType].findIndex(el => el.skillId === skillId);

      if (index >= 0) {
        this[skillType][index].experienceLevel = xpLevel;
      }

      this.$emit(skillType, this[skillType]);
    },
  },
  watch: {
    techSkills(e) {
      // this.validateSkills(this.skills, 'techSkills');
      this.$emit('techSkills', this.techSkills);
    },
    softSkills() {
      // this.validateSkills(this.skills, 'softSkills');
      this.$emit('softSkills', this.softSkills);
    },
    languages() {
      // this.validateSkills(this.skills, 'languages');
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
