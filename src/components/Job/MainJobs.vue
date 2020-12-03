<template>
  <div>
    <div class="mx-12 d-flex justify-center flex-wrap">
      <div class="mt-10" v-if="finishedRequests" :key="finishedRequests">
        <div v-for="(job, i) in jobs" :key="i" class="color-white">
          <JobCard :job="job" class="mb-6" v-if="$vuetify.breakpoint.mdAndUp" />
          <JobCardMobile :job="job" class="mb-6" v-else />
        </div>
      </div>
    </div>
    <div
      :class="
        `d-flex ${
          $vuetify.breakpoint.mdAndUp ? 'justify-center' : 'align-center flex-column'
        } mt-10`
      "
    >
      <g-btn
        :class="`${$vuetify.breakpoint.mdAndUp ? 'mx-2 mb-10' : 'my-2'}`"
        style="height: 56px; width: 270px;"
        type="primary"
        :label="$t('common.hireCTA')"
        to="/signup"
        data-cy="home-signup"
      />
      <g-btn
        :class="`${$vuetify.breakpoint.mdAndUp ? 'mx-2 mb-10' : 'my-2 mb-10'}`"
        style="height: 56px; width: 270px;"
        type="outline"
        color="light"
        :label="$t('common.applyCTA')"
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
    // this.getJobs();
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
