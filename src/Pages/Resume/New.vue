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
                  dataUpdated = !dataUpdated;
                }
              "
            />
          </div>
          <div v-bind:style="{ display: currentStep == 1 ? 'block' : 'none' }">
            <Preferences
              :key="dataUpdated"
              v-on:job-interests="e => (resume.jobInterests = e)"
              v-on:contract-type="e => (resume.contractType = e)"
            />
          </div>
          <div v-bind:style="{ display: currentStep == 2 ? 'block' : 'none' }">
            <PersonalInfo
              :key="dataUpdated"
              :_personalBio="resume.personalBio"
              :_locationCity="resume.location.city"
              :_locationCountry="resume.location.country"
              v-on:profile-picture="e => (profilePicture = e)"
              v-on:main-role="e => (resume.mainRole = e)"
              v-on:location="e => (resume.location = e)"
              v-on:personal-bio="e => (resume.personalBio = e)"
              v-on:website="e => (resume.links.website = e)"
              v-on:linkedin="e => (resume.links.linkedin = e)"
              v-on:github="e => (resume.links.github = e)"
              v-on:behance="e => (resume.links.behance = e)"
            >
            </PersonalInfo>
          </div>
          <div v-bind:style="{ display: currentStep == 3 ? 'block' : 'none' }">
            <WorkExperience v-on:update-item="e => (resume.workHistory = e)" />
          </div>
          <div v-bind:style="{ display: currentStep == 4 ? 'block' : 'none' }">
            <Skills form="resume" v-on:skills="e => (resume.skills = e)" />
          </div>
          <div v-bind:style="{ display: currentStep == 5 ? 'block' : 'none' }">
            <Education v-on:update-item="e => (resume.education = e)" />
          </div>
        </template>
        <template v-slot:buttons>
          <div class="d-flex justify-space-between my-6" style="z-index: -1">
            <g-btn
              :label="$t('common.back')"
              v-if="currentStep >= 0"
              type="secondary"
              @click="currentStep === 0 ? $router.push({ name: 'Side Pick' }) : currentStep--"
            />
            <g-btn
              v-if="currentStep > 0"
              :label="currentStep === 5 ? $t('common.finish') : $t('common.next')"
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
import ProfilePictureController from 'Controllers/profilePic';
import UserController from 'Controllers/user';
import Start from './_0Start';
import Preferences from './_1Preferences';
import PersonalInfo from './_2PersonalInfo';
import WorkExperience from './_3WorkExperience';
import Education from './_5Education';
import RulesHelper from 'Helpers/rules';
import Settings from '@config';

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
  mounted() {
    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);

    const userController = new UserController();
    const company = userController.decodeUserToken();

    if (company.side === 20) {
      this.$router.push('/404');
    }
  },
  data() {
    return {
      educationComponent: Education,
      currentStep: 0,
      dataUpdated: false,
      profilePicture: {},
      resume: {
        personalBio: '',
        jobInterests: [],
        contractType: [],
        mainRole: '',
        location: {
          city: '',
          country: '',
        },
        workHistory: [],
        skills: {
          techSkills: [],
          softSkills: [],
          languages: [],
        },
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
    };
  },
  computed: {
    lastStep: function _() {
      return (this.$t('resume.register.tabs') || []).length - 1;
    },
  },
  methods: {
    async saveResume() {
      const resumeController = new ResumeController();
      const profilePictureController = new ProfilePictureController();
      const userController = new UserController();

      try {
        await resumeController.save(this.resume);
        await profilePictureController.save(this.profilePicture);
        await userController.update({ side: 11 });
        this.$toast.success(this.$t('toast.success.saveResume'));
        this.$router.push({
          path: '/dashboard',
        });
      } catch (e) {
        this.$toast.error(this.$t('toast.error.saveResume'));
      }
    },

    async checkInputsAndFollowUp() {
      const resumeController = new ResumeController();
      const profilePictureController = new ProfilePictureController();
      const userController = new UserController();

      switch (this.currentStep) {
        case 1:
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0;

          this.currentStep++;
          break;

        case 2:
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0;

          if (this.validateRules()) {
            this.currentStep++;
          } else {
            this.$toast.warning(this.$t('toast.warning.fillAll'));
          }

          break;

        case 3:
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0;

          this.currentStep++;
          break;

        case 4:
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0;

          for (const skill of Object.keys(this.resume.skills)) {
            const skillValidated = this.validateSkills(skill);
            if (skillValidated !== true) {
              return this.$toast.warning(skillValidated);
            }
          }
          this.currentStep++;
          break;

        case 5:
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0;

          try {
            await resumeController.save(this.resume);
            await profilePictureController.save(this.profilePicture);
            await userController.update({ side: 11 });
            this.$toast.success(this.$t('toast.success.saveResume'));
            this.$router.push({
              path: '/dashboard',
            });
          } catch (e) {
            this.$toast.error(this.$t('toast.error.saveResume'));
          }

          break;
      }
    },
    validateSkills(skill) {
      if (this.resume.skills[skill].length < Settings.skills[skill].min) {
        this.$t('job.selectAtLeast', {
          min: Settings.skills[skill].min,
          skillName: this.$t(`enums.skills.${skill}`),
        });
      }
      if (this.resume.skills[skill].length > Settings.skills[skill].max) {
        this.$t('job.selectMaximum', {
          max: Settings.skills[skill].max,
          skillName: this.$t(`enums.skills.${skill}`),
        });
      }
      return true;
    },
    validateRules() {
      const rules = [
        this.resume.mainRole,
        this.resume.location.city,
        this.resume.location.country,
        this.resume.personalBio,
        this.rules.max(200, this.resume.mainRole) === true,
        this.rules.max(200, this.resume.location.city) === true,
        this.rules.max(200, this.resume.location.country) === true,
        this.rules.max(20000, this.resume.personalBio) === true,
      ];

      return rules.every(rule => rule);
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
