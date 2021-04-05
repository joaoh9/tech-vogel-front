<template>
  <v-card class="border-primary bs-primary pa-4 px-12 mt-10" color="bg">
    <div class="d-flex justify-start flex-wrap align-center">
      <v-avatar
        :class="reportPayedFor ? 'align-self-center mr-2' : 'blur align-self-center mr-2'"
        size="90"
        color="cinza-lighten-3"
      >
        <v-img :src="getImage()" />
      </v-avatar>

      <div class="ml-4">
        <h5
          :class="
            reportPayedFor
              ? 'h5-bold color-secondary text-capitalize'
              : 'blur h5-bold color-secondary text-capitalize'
          "
        >
          {{ userInfo.name }}
        </h5>
        <sub-1 class="mb-2 text-capitalize">{{ resumeInfo.mainRole }}</sub-1>
        <v-chip pill> {{ $n(resumeInfo.match, { style: 'percent' }) }} Match</v-chip>
        <bdy-1 class="d-flex mt-3" :style="reportPayedFor ? '' : 'filter: blur(4px);'">
          <v-icon class="mr-2"> mdi-email </v-icon> {{ userInfo.email }}
        </bdy-1>
      </div>
      <div class="">
        <SkillPresentation class="my-6" :skills="getBestSkills()" :others="getOtherSkillsCount()" />
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
            @click="goToUserProfile()"
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
      return (
        this.userInfo.profilePicture ||
        'https://www.pathcenter.co.il/wp-content/uploads/2014/03/user_icon-263x263.png'
      );
    },
    getBestSkills() {
      const skills = [ 'techSkills', 'softSkills', 'languages' ];

      const getBestSkills = {};

      for (const skill of skills) {
        const section = this.resumeInfo.skills[skill].filter((el, i) => {
          if (i < 3) {
            return el;
          }
        });
        if (section.length) {
          getBestSkills[skill] = section;
        }
      }
      return getBestSkills;
    },
    getOtherSkillsCount() {
      const skills = [ 'techSkills', 'softSkills', 'languages' ];

      const skillCount = {};

      for (const skill of skills) {
        skillCount[skill] =
          this.resumeInfo.skills[skill].length - 3 < 0
            ? 0
            : this.resumeInfo.skills[skill].length - 3;
      }
      return skillCount;
    },
    goToUserProfile() {
      return this.$router.push({
        name: 'User Profile',
        params: {
          userId: this.resumeInfo.id,
          reportPayedFor: this.reportPayedFor,
          pagarmeLink: this.company.pagarmeLink,
        },
      });
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
