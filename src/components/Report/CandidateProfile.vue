<template>
  <v-card class="border-primary bs-primary pa-4 px-12 " color="bg">
    <div class="d-flex justify-start flex-wrap align-center">
      <v-avatar class="align-self-center mr-15" size="90" color="cinza-lighten-3">
        <v-img v-if="user.profilePicture" :src="user.profilePicture" />
      </v-avatar>
      <div class="d-flex flex-column flex-fill">
        <h4 class="mt-2">{{ user.name }}</h4>
        <h6 style="font-weight:normal; color:gray" class="mb-2">{{ resume.mainRole }}</h6>
        <div class="d-flex flex-wrap">
          <v-btn :disabled="resume.github" class="" text>
            <v-icon left>
              fab fa-github
            </v-icon>
            Github
          </v-btn>
          <v-btn :disabled="!resume.linkedin" class="" text>
            <v-icon left>
              fab fa-linkedin
            </v-icon>
            Linkedin
          </v-btn>
        </div>
      </div>
      <v-btn
        outlined
        color="secondary"
        class="my-10 align-self-center flex-fill "
        @click="copyToClipboard(user.email)"
      >
        {{ $t('company.report.candidateProfile.copyEmail') }}
      </v-btn>
    </div>
    <v-divider class="my-10"></v-divider>
    <div class="d-flex flex-wrap justify-space-between">
      <div class="d-flex flex-column flex-wrap mx-2 my-3">
        <div style="font-weight:bold">{{ $t('company.report.candidateProfile.location') }}</div>
        <div>{{ resume.location.city + ', ' + resume.location.country }}</div>
      </div>
      <div class="d-flex flex-column flex-wrap mx-2 my-3">
        <div style="font-weight:bold">{{ $t('company.report.candidateProfile.email') }}</div>
        <div>{{ user.email }}</div>
      </div>
    </div>
    <div class="d-flex flex-wrap justify-space-between">
      <div class="d-flex flex-column flex-wrap mx-2 my-3">
        <div style="font-weight:bold">
          {{ $t('company.report.candidateProfile.experienceLevel') }}
        </div>
        <div>{{ resume.experienceLevel }}</div>
      </div>
      <div class="d-flex flex-column flex-wrap mx-2 my-3">
        <div style="font-weight:bold">{{ $t('company.report.candidateProfile.memberSince') }}</div>
        <div>{{ formatDate(user.creationDate || new Date(), 'YYYY') }}</div>
      </div>
    </div>
    <v-divider class="my-10"></v-divider>
    <div v-if="resume && resume.skills">
      <Skills
        v-for="(skillType, i) in Object.keys(resume.skills)"
        :key="i + 'skill'"
        :skillTitle="$t(`enums.skills.${skillType}`)"
        :skills="resume.skills[skillType]"
        :skillType="skillType"
        :githubLanguages="resume.gitHubProgrammingLanguages"
        class="mb-6"
      />
    </div>
  </v-card>
</template>

<script>
import moment from 'moment';

import Skills from 'Components/User/Skills';

export default {
  name: 'CandidateProfile',
  props: {
    candidate: [Object],
    userId: String,
    user: Object,
    resume: Object,
  },
  components: {
    Skills,
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    formatDate(date, format) {
      return moment(date).format(format || 'll');
    },
    copyToClipboard(text) {
      const dummy = document.createElement('input');
      document.body.appendChild(dummy);
      dummy.value = text;
      dummy.select();
      const copied = document.execCommand('copy');
      document.body.removeChild(dummy);

      if (copied) {
        this.$toast.success(this.$t('company.report.candidateProfile.copySuccess'));
      }
    },
  },
};
</script>

<style>
p {
  display: inline;
}
</style>
