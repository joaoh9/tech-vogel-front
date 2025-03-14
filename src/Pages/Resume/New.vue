<template>
  <div class="d-flex justify-center mt-4 mt-sm-12">
    <Stepper :stepsNames="$t('resume.register.tabs').map(s => s.name)" v-model="currentStep">
      <g-card>
        <template v-slot:card-header>
          <g-card-header :title="getPageTitle()" :description="getPageDescription()" />
        </template>
        <template v-slot:card-content>
          <div v-bind:style="{ display: currentStep == 0 ? 'block' : 'none' }">
            <Start
              v-on:manual-register="currentStep += 1"
              v-on:github-info="
                githubInfo => {
                  resume.location.city = githubInfo.location;
                  resume.personalBio = githubInfo.bio;
                  currentStep += 1;
                }
              "
              v-on:go-to-dashboard="goToDashboard()"
            />
          </div>
          <div v-bind:style="{ display: currentStep == 1 ? 'block' : 'none' }">
            <Preferences
              :key="dataUpdated"
              :_companySize="resume.companySize"
              :_contractType="resume.contractType"
              v-on:job-interests="e => (resume.companySize = e)"
              v-on:contract-type="e => (resume.contractType = e)"
              v-on:job-type="e => (resume.jobType = e)"
              v-on:relocation-options="e => (resume.relocationOptions = e)"
            />
          </div>
          <div v-bind:style="{ display: currentStep == 2 ? 'block' : 'none' }">
            <PersonalInfo
              :key="dataUpdated"
              :_data64="currentProfilePic64"
              :_mainRole="resume.mainRole"
              :_personalBio="resume.personalBio"
              :_location="{ city: resume.location.city, country: resume.location.country }"
              :_links="{
                website: resume.links.website,
                github: resume.links.github,
                linkedin: resume.links.linkedin,
                behance: resume.links.behance,
              }"
              v-on:main-role="e => (resume.mainRole = e)"
              v-on:location="e => (resume.location = e)"
              v-on:links="e => (resume.links = e)"
              v-on:profile-picture="e => (profilePicture = e)"
              v-on:personal-bio="e => (resume.personalBio = e)"
              v-on:updates-location="e => (resume.location = e)"
            />
          </div>
          <div v-bind:style="{ display: currentStep == 3 ? 'block' : 'none' }">
            <WorkExperience
              :key="dataUpdated"
              :_workHistory="resume.workHistory"
              v-on:update-item="e => (resume.workHistory = e)"
            />
          </div>
          <div v-bind:style="{ display: currentStep == 4 ? 'block' : 'none' }">
            <Skills
              :_skills="resume.skills"
              :key="dataUpdated"
              from="resume"
              v-on:techSkills="e => (techSkills = e)"
              v-on:softSkills="e => (softSkills = e)"
              v-on:languages="e => (languages = e)"
            />
          </div>
          <div v-bind:style="{ display: currentStep == 5 ? 'block' : 'none' }">
            <Education
              :key="dataUpdated"
              :_education="resume.education"
              v-on:update-item="e => (resume.education = e)"
            />
          </div>
        </template>
        <template v-slot:buttons>
          <div class="d-flex justify-space-between my-6" style="z-index: -1">
            <g-btn
              :label="$t('common.back')"
              data-cy="cv-back"
              v-if="currentStep >= 0"
              type="secondary"
              @click="currentStep === 0 ? $router.go(-1) : currentStep--"
            />
            <g-btn
              :label="$t('common.save')"
              v-if="currentStep !== 0"
              data-cy="cv-next"
              type="primary"
              @click="checkInputsAndFollowUp()"
            />
          </div>
        </template>
      </g-card>
    </Stepper>
  </div>
</template>

<script>
import Stepper from 'Components/Interface/Stepper';
import Skills from 'Components/General/SkillsSelection';
import ResumeController from 'Controllers/resume';
import UserController from 'Controllers/user';
import Start from './_0Start';
import Preferences from './_1Preferences';
import PersonalInfo from './_2PersonalInfo';
import WorkExperience from './_3WorkExperience';
import Education from './_5Education';
import RulesHelper from 'Helpers/rules';
import config from '@config';

export default {
  name: 'NewResume',
  props: {
    editMode: Boolean,
  },
  components: {
    Stepper,
    Start,
    Preferences,
    PersonalInfo,
    WorkExperience,
    Skills,
    Education,
  },
  async mounted() {
    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
    await this.getCurrentResume();
  },
  data() {
    return {
      educationComponent: Education,
      currentStep: 0,
      currentProfilePic64: '',
      profilePicture: {},
      resume: {
        personalBio: '',
        companySize: [],
        contractType: [],
        jobType: [],
        relocationOptions: '',
        mainRole: '',
        location: {
          city: '',
          country: '',
        },
        workHistory: [],
        skills: [],
        education: [
          {
            degree: '',
            institutionType: '',
            description: '',
            name: '',
            institution: '',
            startDate: '',
            endDate: '',
          },
        ],
        links: {
          website: '',
          github: '',
          linkedin: '',
          behance: '',
        },
      },
      techSkills: [],
      softSkills: [],
      languages: [],
      dataUpdated: false,
    };
  },
  computed: {
    lastStep: function _() {
      return (this.$t('resume.register.tabs') || []).length - 1;
    },
  },
  methods: {
    async getCurrentResume() {
      const userController = new UserController();
      try {
        const user = userController.decodeUserToken();
        if (user.side === 11) {
          const resumeController = new ResumeController();
          const data = await resumeController.getCurrentResume();
          this.resume = data;
          this.resume.personalBio = data.personalBio;
          this.currentProfilePic64 = (await userController.getProfilePicture()).profilePicture;
          this.dataUpdated = !this.dataUpdated;
        }
      } catch (e) {
        this.$toast.info(this.$t('toast.info.retrieveUserResume'));
      }
    },
    async saveResume() {
      const resumeController = new ResumeController();
      const userController = new UserController();

      try {
        await resumeController.save(this.resume);
        if (this.profilePicture && Object.keys(this.profilePicture).length > 0) {
          await userController.update({ profilePicture: this.profilePicture });
        }
        this.$toast.success(this.$t('toast.success.saveResume'));
        this.$router.push({
          name: 'User Dashboard',
        });
      } catch (e) {
        this.$toast.error(this.$t('toast.error.saveResume'));
      }
    },
    async updateResume() {
      const resumeController = new ResumeController();
      const userController = new UserController();

      try {
        await resumeController.update(this.resume);
        if (
          this.profilePicture &&
          Object.keys(this.profilePicture).length > 0 &&
          this.profilePicture.data64
        ) {
          await userController.update({ profilePicture: this.profilePicture });
        }
        this.$toast.success(this.$t('toast.success.updatedData'));
      } catch (e) {
        this.$toast.error(this.$t('toast.error.update'));
      }
    },
    async checkInputsAndFollowUp() {
      const userController = new UserController();
      const user = userController.decodeUserToken();

      switch (this.currentStep) {
        case 0:
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0;

          this.currentStep++;
          break;
        case 1:
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0;
          await this.updateResume();
          this.currentStep++;
          break;

        case 2:
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0;
          await this.updateResume();
          this.currentStep++;

          break;

        case 3:
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0;
          await this.updateResume();
          this.currentStep++;
          break;

        case 4:
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0;

          for (const skill of [ 'techSkills', 'softSkills', 'languages' ]) {
            const skillValidated = this.validateSkills(skill);

            if (!skillValidated) {
              return this.$toast.warning(skillValidated);
            }
          }

          await this.updateResume();
          this.currentStep++;
          break;

        case 5:
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0;

          if (user.side === 10 && this.validateRules()) {
            return await this.saveResume();
          } else if (user.side > 10 && this.validateRules()) {
            return await this.updateResume();
          } else {
            this.$toast.warning(this.$t('toast.warning.fillAll'));
          }
          await this.updateResume();

          break;
      }
    },
    validateSkills(skill) {
      if (this[skill].length < config.skills[skill].min) {
        this.$t('job.selectAtLeast', {
          min: config.skills[skill].min,
          skillName: this.$t(`enums.skills.${skill}`),
        });
      }
      if (this[skill].length > config.skills[skill].max) {
        this.$t('job.selectMaximum', {
          max: config.skills[skill].max,
          skillName: this.$t(`enums.skills.${skill}`),
        });
      }
      return true;
    },
    getPageTitle() {
      return this.$t(
        `resume.register.${this.$t('resume.register.tabs')[this.currentStep]['identifier']}.title`,
      );
    },
    getPageDescription() {
      return this.$t(
        `resume.register.${
          this.$t('resume.register.tabs')[this.currentStep]['identifier']
        }.description`,
      );
    },
    goToDashboard() {
      this.$router.push({
        name: 'User Dashboard',
      });
    },
  },
  watch: {
    techSkills() {
      this.resume.skills = [ ...this.techSkills, ...this.softSkills, ...this.languages ];
    },
    softSkills() {
      this.resume.skills = [ ...this.techSkills, ...this.softSkills, ...this.languages ];
    },
    languages() {
      this.resume.skills = [ ...this.techSkills, ...this.softSkills, ...this.languages ];
    },
  },
};
</script>

<style>
.v-text-field {
  width: 100%;
}

.ql-container {
  font-family: Open Sans !important;
}
</style>
