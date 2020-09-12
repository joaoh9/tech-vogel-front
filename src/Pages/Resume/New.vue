<template>
  <div class="mt-2 color-bg">
    <v-tabs>
      <v-tab v-for="(item, key) in $t('CV.register.tabs')" :key="key" vertical>
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
  </div>
</template>

<script>
import Start from './_0Start';
import Preferences from './_1Preferences';
import PersonalInfo from './_2PersonalInfo';
import WorkExperience from './_3WorkExperience';
import Skills from './_4Skills';
import Education from './_5Education';
import Extras from './_6Extras';

import 'Public/css/card.css';
import CardTemplate from './CardTemplate';

export default {
  name: 'NewJob',
  components: {
    Start,
    Preferences,
    PersonalInfo,
    CardTemplate,
    WorkExperience,
    Skills,
    Education,
    Extras,
  },
  data() {
    return {
      currentStep: 1,
    };
  },
  methods: {
    nextStep() {
      this.currentStep += 1;
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
