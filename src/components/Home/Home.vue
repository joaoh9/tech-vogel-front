<template>
  <div class="mt-4">
    <div class="d-flex justify-space-around">
      <div class="align-self-center">
        <h1 class="text-center display-4">Connect your company with Global talents</h1>
        <h1 class="text-center mt-10 display-3">Go remote.</h1>
        <h1 class="text-center mt-10 display-3">Go beyond.</h1>
        <v-row justify="center">
          <v-btn min-width="175" elevation="8" x-large tile color="primary" class="mt-10 title">Apply</v-btn>
        </v-row>
        <v-row justify="center" >
          <v-btn
            min-width="150"
            elevation="8"
            x-large
            tile
            color="primary"
            class="mt-10 font-weight-black"
          >Hire</v-btn>
        </v-row>
      </div>
      <div class="align-end">
        <v-img class="text-right" max-width="800" src="../../assets/home-01.png"></v-img>
      </div>
    </div>
    <JobCard class="mt-5"></JobCard>
    <JobCard class="mt-5"></JobCard>
    <JobCard class="mt-5"></JobCard>

    <section>
      <div class='container'>
        <PricingCard></PricingCard>
      </div>
    </section>
  </div>
</template>

<script>
import JobCard from '../Card/JobCard.vue';
import PricingCard from '../Card/PricingCard.vue';

export default {
  name: 'Home',
  components: {
    JobCard,
    PricingCard,
  },
};
</script>
