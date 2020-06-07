<template>
  <div class="d-flex justify-space-between mt-12">
    <filters-card></filters-card>
    <div>
      <job-card class="mt-4"></job-card>
      <job-card class="mt-4"></job-card>
      <job-card class="mt-4"></job-card>
      <job-card class="mt-4"></job-card>
    </div>
    <div>div</div>
  </div>
</template>

<script>
import JobCard from '../Card/JobCard';
import FiltersCard from './FiltersCard';

export default {
  name: 'JobListing',
  components: {
    JobCard,
    FiltersCard,
  },
};
</script>

<style>
</style>
