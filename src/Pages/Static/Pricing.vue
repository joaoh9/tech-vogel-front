<template>
  <div class="d-flex mt-14 justify-center flex-wrap mb-10">
    <CompanyPlan class="mr-12" />
    <DevsPlan />
  </div>
</template>

<script>
import CompanyPlan from 'Components/Dashboard/CompanyPlan';
import DevsPlan from 'Components/Dashboard/DevsPlan';
export default {
  name: 'Pricing',
  mounted() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  },
  components: {
    CompanyPlan,
    DevsPlan,
  },
};
</script>

<style></style>
