<template>
  <v-card class="border-primary bs-primary pa-4 px-12 mt-10" color="bg">
    <div class="d-flex justify-start flex-wrap align-center">
      <v-avatar class="align-self-center mr-15" size="90" color="cinza-lighten-3">
        <v-img
          :src="
            'https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png' ||
              profilePic.data64
          "
        />
      </v-avatar>
      <div class="d-flex flex-column flex-fill">
        <h5 class="h5-bold color-secondary text-capitalize">{{ userInfo.name }}</h5>
        <sub-1 class="mb-2 text-capitalize">{{ resumeInfo.mainRole }}</sub-1>
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
        text
        class="text-none"
        :label="$t('company.report.candidates.viewCandidate')"
      >
        <!-- :icon="'fas fa-angle-down'" -->
      </g-btn>
      <!-- <CandidateProfile :user="user" :resume="resume" :profilePic="profilePic" /> -->
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'CandidateCard',
  props: {
    userInfo: Object,
    resumeInfo: Object,
    profilePic: Object,
  },
  mounted() {
    this.jobId = this.$route.params.jobId;
  },
  components: {
    // CandidateProfile,
  },
  methods: {
    getIcons() {
      return [
        {
          text: this.$t('common.links.github.title'),
          icon: 'fas fa-external-link-alt',
          link: this.resumeInfo.links.github,
        },
        {
          text: this.$t('common.links.linkedin.title'),
          icon: 'fas fa-external-link-alt',
          link: this.resumeInfo.links.linkedin,
        },
      ];
    },
  },
};
</script>

<style scoped>
p {
  display: inline;
}
</style>
