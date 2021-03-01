<template>
  <v-card class="border-primary bs-primary pa-4 px-12 mt-10" color="bg">
    <div class="d-flex justify-start flex-wrap align-center">
      <v-avatar
        :class="reportPayedFor ? '' : 'blur' + 'align-self-center mr-15'"
        size="90"
        color="cinza-lighten-3"
      >
        <v-img :src="getImage()" />
      </v-avatar>

      <div class="ml-4">
        <h5 :class="reportPayedFor ? '' : 'blur' + 'h5-bold color-secondary text-capitalize'">
          {{ userInfo.name }}
        </h5>
        <sub-1 class="mb-2 text-capitalize">{{ resumeInfo.mainRole }}</sub-1>
        <v-chip pill> {{ $n(resumeInfo.match, { style: 'percent' }) }} Match</v-chip>
      </div>
      <div class="">
        <SkillPresentation class="my-6" :skills="getBestSkills()" />
        <div class="d-flex align-center">
          <div v-for="(item, index) in getIcons()" :key="index">
            <v-btn
              class="pa-0 text-capitalize"
              color="secondary"
              text
              @click="reportPayedFor ? goToLink(item.link) : (buy = !buy)"
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

      <v-dialog v-model="buy">
        <template v-slot:activator="{ on, attrs }">
          <g-btn
            v-on="on"
            v-bind="attrs"
            color="secondary"
            type="outlined"
            :label="$t('company.report.candidates.viewCandidate')"
            @click="buy = !buy"
            v-if="!reportPayedFor"
          />
          <g-btn
            v-else
            v-on="on"
            v-bind="attrs"
            color="secondary"
            type="outlined"
            :label="$t('company.report.candidates.viewCandidate')"
            :to="`/user/id/${userInfo.id}`"
          />
        </template>
        <div>
          <DefaultDialog
            v-if="buy"
            :key="buy"
            :title="$t('company.report.unlock')"
            :btnText="$t('company.report.paymentProceed')"
            :btnType="$t('job.apply.btnType')"
            :secBtnText="$t('common.close')"
            @close="buy = false"
            v-on:primary-button-click="goToPagarme"
            v-on:secondary-button-click="buy = false"
          />
        </div>
      </v-dialog>
    </div>
  </v-card>
</template>

<script>
import DefaultDialog from 'Components/Dialogs/Default';
import SkillPresentation from 'Components/Job/SkillPresentation';

export default {
  name: 'CandidateCard',
  props: {
    userInfo: Object,
    resumeInfo: Object,
    company: Object,
    reportPayedFor: Boolean,
  },
  mounted() {
    this.jobId = this.$route.params.jobId;
  },
  components: {
    SkillPresentation,
    DefaultDialog,
  },
  data() {
    return {
      buy: false,
    };
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
          if (!this.reportPayedFor) {
            result.push({
              text: this.$t(`common.links.${link}.title`),
              icon: this.getIcon(link),
              link: this.resumeInfo.links[link],
            });
          } else {
            result.push({
              text: this.$t(`common.links.${link}.title`),
              icon: this.getIcon(link),
              link: this.resumeInfo.links[link],
            });
          }
        }
      }
      return result;
    },
    getIcon(icon) {
      const map = {
        website: 'web',
        github: 'github',
        linkedin: 'linkedin',
        twitter: 'twitter',
      };

      return 'mdi-' + map[icon];
    },
    getImage() {
      return this.userInfo.profilePicture || '';
    },
    getBestSkills() {
      const skills = [ 'techSkills', 'softSkills', 'languages' ];

      const getBestSkills = {};

      for (const skill of skills) {
        const section = this.resumeInfo.skills[skill].map(el => {
          if (el.experienceLevel >= 3 || this.reportPayedFor) {
            return el;
          } else {
            return {
              experienceLevel: el.experienceLevel,
              skillId: 'blocked',
            };
          }
        });
        if (section.length) {
          getBestSkills[skill] = section;
        }
      }
      return getBestSkills;
    },
    goToPagarme() {
      window.open(this.company.pagarmeLink, '_blank');
    },
    goToLink(link) {
      window.open(link, '_blank');
    },
  },
};
</script>

<style scoped>
p {
  display: inline;
}
</style>
