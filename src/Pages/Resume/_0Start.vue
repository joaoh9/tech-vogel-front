<template>
  <div>
    <div class="d-flex justify-center align-center mt-12 mx-12 flex-column">
      <g-btn
        class="mt-4"
        type="primary"
        :minwidth="300"
        @click="$emit('manual-register', 'manual-register')"
        :label="$t('resume.register.start.registerManually.title')"
      />
      <g-btn
        type="primary"
        :minwidth="300"
        class="mt-4"
        disabled
        :loading="loading"
        :label="$t('resume.register.start.linkGithub.title')"
        @click="getRepoInfo()"
      />
      <g-btn
        type="disabled"
        :minwidth="300"
        class="mt-4"
        :label="$t('resume.register.start.linkLinkedIn.title')"
      />
    </div>
    <slot />
  </div>
</template>

<script>
import GithubOauthController from 'Controllers/githubOauth';

import settings from '@config';

export default {
  name: 'Start',
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
        this.$emit('update-profile-picture')

        console.log(githubInfo);

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
        console.log(e);
      }
    },
    goToAuthGithubLink() {
      window.open(
        `https://github.com/login/oauth/authorize?client_id=${settings.github.client_id}`,
        '_blank',
      );
    },
  },
};
</script>

<style></style>
