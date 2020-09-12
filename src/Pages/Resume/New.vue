<template>
  <div>
    <v-row class="mt-12">
      <v-col cols="2"></v-col>
      <v-col cols="8">
        <v-card class="primary-card" elevation="6" color="bg">
          <Stepper
            ref="stepper"
            :stepsNames="$t('CV.register.tabs')"
            v-model="stepper"
          >
            <template v-slot:default=" { } ">
              <div
                v-if="stepper.currentStep == 0"
              >
                <Start></Start>
                <div class="d-flex justify-end flex-fill m-3">
                  <v-btn large color="primary" @click="stepper.currentStep += 1">Next</v-btn>
                </div>
              </div>
              <div
                v-if="stepper.currentStep == 1"
              >
                <Preferences></Preferences>
                <div class="d-flex justify-space-between">
                  <v-btn large outlined color="tertiary" @click="stepper.currentStep -= 1">Back</v-btn>
                  <v-btn
                    large
                    color="primary"
                    @click="stepper.currentStep += 1"
                    class="align-self-end"
                  >Next</v-btn>
                </div>
              </div>
              <div
                v-if="stepper.currentStep == 2"
              >
                <PersonalInfo></PersonalInfo>
                <div class="d-flex justify-space-between">
                  <v-btn large outlined color="tertiary" @click="stepper.currentStep -= 1">Back</v-btn>
                  <v-btn
                    large
                    color="primary"
                    @click="stepper.currentStep += 1"
                    class="align-self-end"
                  >Next</v-btn>
                </div>
              </div>
              <div
                v-if="stepper.currentStep == 3"
              >
                <WorkExperience></WorkExperience>
                <div class="d-flex justify-space-between">
                  <v-btn large outlined color="tertiary" @click="stepper.currentStep -= 1">Back</v-btn>
                  <v-btn
                    large
                    color="primary"
                    @click="stepper.currentStep += 1"
                    class="align-self-end"
                  >Next</v-btn>
                </div>
              </div>
              <div
                v-if="stepper.currentStep == 4"
              >
                <Skills></Skills>
                <div class="d-flex justify-space-between">
                  <v-btn large outlined color="tertiary" @click="stepper.currentStep -= 1">Back</v-btn>
                  <v-btn
                    large
                    color="primary"
                    @click="stepper.currentStep += 1"
                    class="align-self-end"
                  >Next</v-btn>
                </div>
              </div>
              <div
                v-if="stepper.currentStep == 5"
              >
                <Education></Education>
                <div class="d-flex justify-space-between">
                  <v-btn large outlined color="tertiary" @click="stepper.currentStep -= 1">Back</v-btn>
                  <v-btn
                    large
                    color="primary"
                    @click="stepper.currentStep += 1"
                    class="align-self-end"
                  >Next</v-btn>
                </div>
              </div>
              <div
                v-if="stepper.currentStep == 6"
              >
                <Extras></Extras>
                <div class="d-flex justify-space-between">
                  <v-btn large outlined color="tertiary" @click="stepper.currentStep -= 1">Back</v-btn>
                  <v-btn
                    large
                    color="primary"
                    @click="stepper.currentStep += 1"
                    class="align-self-end"
                  >Next</v-btn>
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
import Extras from './_6Extras';

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
    Extras,
  },
  data() {
    return {
      stepper: {
        currentStep: 0,
      },
    };
  },
  methods: {
    nextStep() {
      this.stepper.currentStep += 1;
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
