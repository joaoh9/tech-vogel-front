<template>
  <v-card class="border-primary bs-primary pa-4 px-12 mt-10" color="bg">
    <div class="d-flex justify-start flex-wrap align-center">
      <v-avatar class="blur align-self-center mr-15" size="90" color="cinza-lighten-3">
        <v-img :src="getImage()" />
      </v-avatar>
      <div class="">
        <h5 class="blur h5-bold color-secondary text-capitalize">{{ userInfo.name }}</h5>
        <sub-1 class="mb-2 text-capitalize">{{ resumeInfo.mainRole }}</sub-1>
        <v-chip pill> {{ $n(resumeInfo.match, { style: 'percent' }) }} Match</v-chip>
      </div>
      <div class="">
        <SkillPresentation class="my-6" :skills="getBestSkills()" />
        {{ resumeInfo.links }}
        {{ getIcons() }}
        <div class="d-flex align-center">
          <div v-for="(item, index) in getIcons()" :key="index">
            <v-btn
              class="pa-0 text-capitalize"
              color="secondary"
              text
              :to="item.link"
              v-if="item.link"
            >
              <v-icon size="16" class="mr-2">
                {{ item.icon }}
              </v-icon>
              <div class="mr-4">
                {{ item.text }}
              </div>
            </v-btn>
          </div>
        </div>
      </div>
      <g-btn
        color="secondary"
        type="outlined"
        :label="$t('company.report.candidates.viewCandidate')"
      >
      </g-btn>
    </div>
  </v-card>
</template>

<script>
import SkillPresentation from 'Components/Job/SkillPresentation';

export default {
  name: 'CandidateCard',
  props: {
    userInfo: Object,
    resumeInfo: Object,
  },
  mounted() {
    this.jobId = this.$route.params.jobId;
  },
  components: {
    SkillPresentation,
  },
  methods: {
    getIcons() {
      const links = [ 'github', 'linkedin', 'website', 'facebook', 'twitter' ];
      const result = [];
      if (!this.resumeInfo.links) {
        return [];
      }
      for (const link of links) {
        // eslint-disable-next-line no-prototype-builtins
        if (this.resumeInfo.links.hasOwnProperty(link)) {
          result.push({
            text: this.$t(`common.links.${link}.title`),
            icon: `mdi-${link}`,
            link: this.resumeInfo.links.github,
          });
        }
      }
      return result;
    },
    getImage() {
      return this.userInfo.profilePicture || 'https://www.thispersondoesnotexist.com/image';
    },
    getBestSkills() {
      const skills = [ 'techSkills', 'softSkills', 'languages' ];

      const getBestSkills = {};

      for (const skill of skills) {
        const section = this.resumeInfo.skills[skill].map(el => {
          if (el.experienceLevel >= 3) {
            return el;
          }
          else {
            return {
              experienceLevel: el.experienceLevel,
              skillId: 'blocked',
            }
          }
        });
        if (section.length) {
          getBestSkills[skill] = section;
        }
      }
      return getBestSkills;
    },
  },
};
</script>

<style scoped>
p {
  display: inline;
}
</style>
