<template>
  <div>
    <div v-for="(job, i) in jobs" :key="i">
      <WorkItem
        v-on:company-name="
          e => {
            jobs[i].companyName = e;
            $emit('update-item', jobs);
          }
        "
        v-on:role="
          e => {
            jobs[i].role = e;
            $emit('update-item', jobs);
          }
        "
        v-on:current-job="
          e => {
            jobs[i].currentJob = e;
            $emit('update-item', jobs);
          }
        "
        v-on:start-date="
          e => {
            jobs[i].startDate = e;
            $emit('update-item', jobs);
          }
        "
        v-on:end-date="
          e => {
            jobs[i].endDate = e;
            $emit('update-item', jobs);
          }
        "
        v-on:job-description="
          e => {
            jobs[i].description = e;
            $emit('update-item', jobs);
          }
        "
      />
      <v-divider v-if="i < jobs.length - 1" />
    </div>
    <div class="d-flex justify-center">
      <g-btn
        type="outlined"
        color="primary"
        label="Add more"
        @click="
          jobs.push({
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
  data() {
    return {
      workComponent: WorkItem,
      jobs: [
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
  border: 1px solid #3b3973;
}
</style>
