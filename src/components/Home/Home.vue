<template>
  <div class="mt-4">
    <JobCard class="mt-5"></JobCard>
    <JobCard class="mt-5"></JobCard>
    <JobCard class="mt-5"></JobCard>
  </div>
</template>

<script>
import JobCard from '../Card/JobCard.vue';

export default {
  name: 'Home',
  components: {
    JobCard,
  },
};
</script>
