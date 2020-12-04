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
        label="Add more"
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
import WorkItem from './WorkItem';

export default {
  name: 'WorkExperience',
  components: {
    WorkItem,
  },
  mounted() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
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
      j: [
        { companyName: '', role: '', startDate: '', endDate: '', description: '', currentJob: '' },
        {
          companyName: '',
          role: '',
          startDate: 0,
          endDate: {
            companyName: '',
            role: '',
            startDate: 2020,
            endDate: 2020,
            description: '',
            currentJob: true,
            jobDescription: '<p>rafae</p>',
          },
          description: {
            companyName: '',
            role: '',
            startDate: 2020,
            endDate: 2020,
            description: '',
            currentJob: true,
            jobDescription: '<p>rafae</p>',
          },
          currentJob: '',
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-divider {
  border: 0.9px solid #3b3973;
}
</style>
