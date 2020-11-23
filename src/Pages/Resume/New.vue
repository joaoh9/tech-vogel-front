<template>
  <div class="d-flex justify-center mt-4 mt-md-12">
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
            >
            </PersonalInfo>
          </div>
          <div v-bind:style="{ display: currentStep == 3 ? 'block' : 'none' }">
            <WorkExperience v-on:update-item="e => (resume.workHistory = e)"> </WorkExperience>
          </div>
          <div v-bind:style="{ display: currentStep == 4 ? 'block' : 'none' }">
            <Skills form="resume" v-on:skills="e => (resume.skills = e)" />
          </div>
          <div v-bind:style="{ display: currentStep == 5 ? 'block' : 'none' }">
            <Education v-on:update-item="e => (resume.education = e)"> </Education>
          </div>
        </template>
        <template v-slot:buttons>
          <div
            :class="`d-flex ${currentStep === 1 ? 'justify-end' : 'justify-space-between'}  my-6`"
            style="z-index: -1"
          >
            <g-btn
              :label="$t('common.back')"
              v-if="currentStep > 1"
              type="secondary"
              @click="currentStep--"
            />
            <g-btn
              v-if="currentStep > 0 && currentStep < lastStep"
              :label="$t('common.next')"
              type="primary"
              @click="currentStep++"
            />
            <g-btn
              v-if="currentStep === lastStep"
              :label="$t('common.finish')"
              type="primary"
              @click="saveResume"
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
    const userController = new UserController();
    const company = userController.decodeUserToken();

    if (company.side === 2) {
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

      try {
        await resumeController.save(this.resume);
        await profilePictureController.save(this.profilePicture);
        this.$toast.success(this.$t('toast.success.saveResume'));
        this.$router.push({
          path: '/dashboard',
        });
      } catch (e) {
        this.$toast.error(this.$t('toast.error.saveResume'));
      }
    },
    validateResume() {
      return true; // TODO
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
