<template>
  <div>
    <div v-for="(job, i) in workHistory" :key="i">
      <WorkItem
        v-on:company-name="
          e => {
            workHistory[i].companyName = e;
            $emit('update-item', workHistory);
          }
        "
        v-on:role="
          e => {
            workHistory[i].role = e;
            $emit('update-item', workHistory);
          }
        "
        v-on:current-job="
          e => {
            workHistory[i].currentJob = e;
            $emit('update-item', workHistory);
          }
        "
        v-on:start-date="
          e => {
            workHistory[i].startDate = e;
            $emit('update-item', workHistory);
          }
        "
        v-on:end-date="
          e => {
            workHistory[i].endDate = e;
            $emit('update-item', workHistory);
          }
        "
        v-on:job-description="
          e => {
            workHistory[i].description = e;
            $emit('update-item', workHistory);
          }
        "
      />
      <v-divider v-if="i < workHistory.length - 1" />
    </div>
    <div class="d-flex justify-center">
      <g-btn
        type="outlined"
        color="primary"
        :label="$t('common.addMore')"
        @click="
          workHistory.push({
            companyName: '',
            role: '',
            startDate: '',
            endDate: '',
            description: '',
            currentJob: false,
          })
        "
      />
    </div>
  </div>
</template>

<script>
import ResumeController from 'Controllers/resume';
import WorkItem from './WorkItem';

export default {
  name: 'WorkExperience',
  components: {
    WorkItem,
  },
  mounted() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;

    this.getResumeInfo();
  },
  data() {
    return {
      workComponent: WorkItem,
      workHistory: [
        {
          companyName: '',
          role: '',
          startDate: '',
          endDate: '',
          description: '',
          currentJob: false,
        },
      ],
    };
  },
  methods: {
    async getResumeInfo() {
      const resumeController = new ResumeController();

      try {
        const data = await resumeController.getCurrentResume();

        for (const index in this.workHistory) {
          this.workHistory[index].companyName = data.workHistory[index].companyName || '';
          this.workHistory[index].role = data.workHistory[index].role || '';
          this.workHistory[index].startDate = data.workHistory[index].startDate || '';
          this.workHistory[index].endDate = data.workHistory[index].endDate || '';
          this.workHistory[index].description = data.workHistory[index].description || '';
          this.workHistory[index].currentJob = data.workHistory[index].currentJob || false;
        }
      } catch (e) {
        this.$toast.error(this.$t('toast.error.retrieveUserResume'));
      }

      this.$emit('update-item', this.workHistory);
    },
  },
};
</script>

<style scoped>
.v-divider {
  border: 0.9px solid #3b3973;
}
</style>
