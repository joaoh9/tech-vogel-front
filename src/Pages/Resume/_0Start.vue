<template>
  <div>
    <div class="d-flex justify-center align-center mt-12 mx-12 flex-column">
      <g-btn
        class="mt-4"
        type="primary"
        :minwidth="300"
        data-cy="cv-manual"
        @click="$emit('manual-register', 'manual-register')"
        :label="$t('resume.register.start.registerManually.title')"
      />
      <g-btn
        class="mt-4"
        type="outlined"
        color="primary"
        :minwidth="300"
        data-cy="cv-go-to-dashboard"
        @click="$emit('go-to-dashboard')"
        :label="$t('resume.register.start.goToDashboard')"
      />
      <g-btn
        class="mt-4"
        type="outlined"
        color="primary"
        :minwidth="300"
        data-cy="cv-github-integration"
        @click="getRepoInfo()"
        :label="$t('resume.register.start.linkGithub.title')"
      />
      <!-- <overline class="mt-10" color="primary">{{ $t('common.comingSoon') }}</overline> -->
      <!-- <sub-2 color="primary">{{ $t('common.integration') }}</sub-2> -->
    </div>
    <slot />
  </div>
</template>

<script>
import GithubOauthController from 'Controllers/githubOauth';

import settings from '@config';

export default {
  name: 'Start',
  mounted() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    async getRepoInfo() {
      const githubOauthController = new GithubOauthController();
      this.loading = true;
      try {
        await githubOauthController.getRepoInfo();

        const githubInfo = await githubOauthController.getUserInfo();

        this.$emit('update-profile-picture');

        this.loading = false;

        this.$toast.success(this.$t('toast.success.githubRetrieve'));

        this.$emit('github-info', githubInfo);
      } catch (e) {
        if (e.status === 403) {
          this.$toast.error(this.$t('oAuth.github.accessFirst'));
          this.goToAuthGithubLink();
        }
        this.loading = false;
        this.$toast.error(this.$t('toast.error.githubRetrieve'));
      }
    },
    goToAuthGithubLink() {
      const scopes = [ 'read:user', 'user:email', 'read:org', 'repo' ];

      const url = `https://github.com/login/oauth/authorize?client_id=${
        settings.github.client_id
      }&scope=${scopes.join('%20')}`;
      console.log('🚀 ~ file: _0Start.vue ~ line 91 ~ goToAuthGithubLink ~ url', url);

      window.open(url, '_blank');
    },
  },
};
</script>

<style></style>
