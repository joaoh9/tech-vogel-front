<template>
  <div>
    <div v-for="(job, i) in workHistory" :key="i">
      <WorkItem
        :key="updatedData"
        :_workHistory="workHistory[i]"
        :working="workHistory[i].working"
        :item="i"
        v-on:update="
          e => {
            workHistory[i] = e;
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
        data-cy="work-experience-add"
        :label="$t('common.addMore')"
        @click="
          workHistory.push({
            companyName: '',
            role: '',
            startDate: '',
            endDate: '',
            description: '',
            currentJob: false,
            working: true,
          })
        "
      />
      <g-btn
        type="outlined"
        class="ml-2"
        color="secondary"
        data-cy="work-experience-add"
        label="Adicionar tempo de hiato"
        @click="
          workHistory.push({
            companyName: 'hiatus',
            role: 'hiatus',
            startDate: '',
            endDate: '',
            description: '',
            currentJob: false,
            working: false,
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
  props: {
    _workHistory: Array,
  },
  components: {
    WorkItem,
  },
  mounted() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;

    if (this._workHistory && this._workHistory.length > 0) {
      this.workHistory = this._workHistory;
      this.updatedData = !this.updatedData;
    }
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
          working: true,
        },
      ],
      updatedData: false,
    };
  },
};
</script>

<style scoped>
.v-divider {
  border: 0.9px solid #3b3973;
}
</style>
