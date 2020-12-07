<template>
  <div>
    <div class="mx-12 d-flex justify-center flex-wrap">
      <div class="mt-10" v-if="finishedRequests" :key="finishedRequests">
        <div v-for="(job, i) in jobs" :key="i" class="color-white">
          <JobCard :job="job" class="mb-6" v-if="$vuetify.breakpoint.smAndUp" />
          <JobCardMobile :job="job" class="mb-6" v-else />
        </div>
      </div>
    </div>
    <div
      :class="
        `d-flex ${
          $vuetify.breakpoint.smAndUp ? 'justify-center' : 'align-center flex-column'
        } mt-10 my-16`
      "
    >
      <g-btn
        :class="`${$vuetify.breakpoint.smAndUp ? 'mx-2 my-16' : 'my-12 mb-4'}`"
        style="height: 56px; width: 270px;"
        type="primary"
        :label="$t('common.seeMoreJobs')"
        to="/signup"
        data-cy="home-signup"
      />
      <g-btn
        :class="`${$vuetify.breakpoint.smAndUp ? 'mx-2 my-16' : 'my-2'} mb-16`"
        style="height: 56px; width: 270px;"
        type="outline"
        color="light"
        :label="$t('common.postAJob')"
        to="/signup"
        data-cy="home-signup"
      />
    </div>
  </div>
</template>

<script>
import JobController from 'Controllers/job';
import JobCard from './JobCard';
import JobCardMobile from './JobCardMobile';

export default {
  name: 'MainJobs',
  components: {
    JobCard,
    JobCardMobile,
  },
  mounted() {
    this.getJobs();
  },
  data() {
    return {
      jobs: [],
      finishedRequests: false,
    };
  },
  methods: {
    async getJobs() {
      const jobController = new JobController();
      try {
        this.jobs = await jobController.getAll({ limit: 6 });
        this.finishedRequests = true;
      } catch (e) {
        this.$toast.error(this.$t('toast.error.retrieveJob'));
      }
    },
  },
};
</script>

<style></style>
