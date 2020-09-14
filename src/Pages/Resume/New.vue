<template>
  <div>
    <v-row class="mt-12">
      <v-col cols="2"></v-col>
      <v-col cols="8">
        <v-card class="primary-card" elevation="6" color="bg">
          <Stepper ref="stepper" :stepsNames="$t('CV.register.tabs')" v-model="currentStep">
            <template v-slot:default=" { } ">
              <div v-bind:style="{display: currentStep == 0? 'block': 'none'}">
                <Start v-on:manual-register="currentStep += 1"></Start>
              </div>
              <div v-bind:style="{display: currentStep == 1? 'block': 'none'}">
                <Preferences
                  v-on:job-category="e => (resume.jobCategory = e)"
                  v-on:job-type="e => (resume.jobType = e)"
                ></Preferences>
                <div class="d-flex justify-space-between">
                  <v-btn large outlined color="tertiary" @click="currentStep -= 1">Back</v-btn>
                  <v-btn large color="primary" @click="currentStep += 1" class="align-self-end">Next</v-btn>
                </div>
              </div>
              <div v-bind:style="{display: currentStep == 2? 'block': 'none'}">
                <PersonalInfo
                  v-on:full-name="e => (resume.fullName = e)"
                  v-on:location="e => {resume.location = e}"
                ></PersonalInfo>
                <div class="d-flex justify-space-between">
                  <v-btn large outlined color="tertiary" @click="currentStep -= 1">Back</v-btn>
                  <v-btn large color="primary" @click="currentStep += 1" class="align-self-end">Next</v-btn>
                </div>
              </div>
              <div v-bind:style="{display: currentStep == 3? 'block': 'none'}">
                <WorkExperience v-on:job="e => {resume.jobDescription = e}"></WorkExperience>
                <div class="d-flex justify-space-between">
                  <v-btn large outlined color="tertiary" @click="currentStep -= 1">Back</v-btn>
                  <v-btn large color="primary" @click="currentStep += 1" class="align-self-end">Next</v-btn>
                </div>
              </div>
              <div v-bind:style="{display: currentStep == 4? 'block': 'none'}">
                <Skills v-on:skills="e => (resume.skills = e)"></Skills>
                <div class="d-flex justify-space-between">
                  <v-btn large outlined color="tertiary" @click="currentStep -= 1">Back</v-btn>
                  <v-btn large color="primary" @click="currentStep += 1" class="align-self-end">Next</v-btn>
                </div>
              </div>
              <div v-bind:style="{display: currentStep == 5? 'block': 'none'}">
                <Education v-on:education="e => (resume.education = e)"></Education>
                <div class="d-flex justify-space-between">
                  <v-btn large outlined color="tertiary" @click="currentStep -= 1">Back</v-btn>
                  <v-btn
                    large
                    color="primary"
                    @click="register"
                    class="align-self-end"
                  >{{ $t('CV.register.extras.button') }}</v-btn>
                </div>
              </div>
            </template>
          </Stepper>
        </v-card>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
  </div>
  <!-- <div class="mt-2 color-bg">
    <v-tabs vertical>
      <v-tab v-for="(item, key) in $t('CV.register.tabs')" :key="key">
        {{ item }}
      </v-tab>
      <v-tab-item class="d-flex justify-center mt-12 color-bg">
        <card-template :title="$t('CV.register.start.title')">
          <template v-slot:content="{}">
            <Start />
          </template>
        </card-template>
      </v-tab-item>
      <v-tab-item class="d-flex justify-center mt-12 color-bg">
        <card-template
          :title="$t('CV.register.preferences.title')"
          :description="$t('CV.register.preferences.description')"
        >
          <template v-slot:content="{}">
            <Preferences />
          </template>
        </card-template>
      </v-tab-item>
      <v-tab-item class="d-flex justify-center mt-12 color-bg">
        <card-template
          :title="$t('CV.register.personalInfo.title')"
          :description="$t('CV.register.personalInfo.description')"
        >
          <template v-slot:content="{}">
            <PersonalInfo />
          </template>
        </card-template>
      </v-tab-item>
      <v-tab-item class="d-flex justify-center mt-12 color-bg">
        <card-template
          :title="$t('CV.register.workExperience.title')"
          :description="$t('CV.register.workExperience.description')"
        >
          <template v-slot:content="{}">
            <WorkExperience />
          </template>
        </card-template>
      </v-tab-item>
      <v-tab-item class="d-flex justify-center mt-12 color-bg">
        <card-template
          :title="$t('CV.register.skills.title')"
          :description="$t('CV.register.skills.description')"
        >
          <template v-slot:content="{}">
            <Skills />
          </template>
        </card-template>
      </v-tab-item>
      <v-tab-item class="d-flex justify-center mt-12 color-bg">
        <card-template
          :title="$t('CV.register.education.title')"
          :description="$t('CV.register.education.description')"
        >
          <template v-slot:content="{}">
            <Education />
          </template>
        </card-template>
      </v-tab-item>
      <v-tab-item class="d-flex justify-center mt-12 color-bg">
        <card-template
          :title="$t('CV.register.extras.title')"
          :description="$t('CV.register.extras.description')"
        >
          <template v-slot:content="{}">
            <Extras />
          </template>
        </card-template>
      </v-tab-item>
    </v-tabs>
  </div>-->
</template>

<script>
import Stepper from 'Components/Interface/Stepper';
import Start from './_0Start';
import Preferences from './_1Preferences';
import PersonalInfo from './_2PersonalInfo';
import WorkExperience from './_3WorkExperience';
import Skills from './_4Skills';
import Education from './_5Education';

import ResumeController from 'Controllers/resume';
import 'Public/css/card.css';

export default {
  name: 'NewJob',
  components: {
    Stepper,
    Start,
    Preferences,
    PersonalInfo,
    WorkExperience,
    Skills,
    Education,
  },
  data() {
    return {
      currentStep: 0,
      resume: {
        location: {
          city: '',
          country: '',
        },
        job: {
          company: {
            title: '',
          },
          position: '',
          from: {
            month: '',
            year: '',
          },
          to: {
            month: '',
            year: '',
          },
          jobDescription: '',
          currentJob: '',
        },
        skills: {
          programmingLanguages: '',
          frameworks: '',
          knowledgeAreas: '',
          softSkills: '',
        },
        education: {
          degree: '',
          type: '',
          description: '',
          institution: '',
          from: {
            year: '',
          },
          to: {
            year: '',
          },
        },
      },
    };
  },
  methods: {
    register() {
      const resumeController = ResumeController();
      if (this.resume) {
        resumeController
          .register({
            resume: this.resume,
          })
          .then(res => {
            console.log('res');
            console.log(res);
          })
          .catch(e => {
            console.log('e');
            console.log(e);
          });
      }
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
