<template>
  <div>
    <div class="mx-12 d-flex justify-center flex-wrap">
      <div class="mt-10" v-if="finishedRequests" :key="finishedRequests">
        <div v-for="(job, index) in jobs" :key="index" class="color-white">
          <JobCard :job="job" class="mb-6" />
        </div>
      </div>
    </div>
    <div
      :class="
        `d-flex ${
          $vuetify.breakpoint.smAndUp ? 'justify-center' : 'align-center flex-column'
        } mt-10 my-4`
      "
    >
      <g-btn
        :class="`${$vuetify.breakpoint.smAndUp ? 'mx-2 my-4' : 'my-12 mb-4'}`"
        style="height: 56px; width: 270px;"
        type="primary"
        :label="$t('common.seeMoreJobs')"
        to="/signup"
        data-cy="home-signup"
      />
      <g-btn
        :class="`${$vuetify.breakpoint.smAndUp ? 'mx-2 my-4' : 'my-2'} mb-16`"
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

export default {
  name: 'MainJobs',
  components: {
    JobCard,
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
        this.jobs = await jobController.getCardJobs({ limit: 6 });
        this.finishedRequests = true;
      } catch (e) {
        this.$toast.error(this.$t('toast.error.retrieveJob'));
      }
    },
  },
};
</script>

<style></style>
