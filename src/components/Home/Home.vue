<template>
  <div class="mt-4">
    <div class="d-flex justify-space-around">
      <div class="align-self-center">
        <h1 class="text-center display-4 ma-4">Connect your company with Global talents</h1>
        <h1 class="text-center mt-10 display-3">Go remote.</h1>
        <h1 class="text-center mt-10 display-3">Go beyond.</h1>
        <v-row justify="center">
          <v-btn
            min-width="175"
            elevation="8"
            x-large
            tile
            color="primary"
            class="mt-10 title"
          >Apply</v-btn>
        </v-row>
        <v-row justify="center">
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
        <v-img class="text-right ma-7" max-width="780" src="../../assets/24.png"></v-img>
      </div>
    </div>
    <JobCard v-for="n in 5" :key="n" class="mt-5"></JobCard>
    <!-- TODO: Pegar esses 5 jobs do banco ordenados por alguma métrica (a definir) -->
    <div class="d-flex justify-space-between mt-10">
      <div class="align-self-center ma-6">
        <v-img class="text-left" max-width="780" src="../../assets/31.png"></v-img>
      </div>
      <div class="align-self-center">
        <h1 class="text-center display-4">Why Remote</h1>
        <p class="text-center ma-10">{{$t('WhyRemote._1')}}</p>
        <p class="text-center ma-10">{{$t('WhyRemote._2')}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import JobCard from 'Components/Card/JobCard';

export default {
  name: 'Home',
  components: {
    JobCard,
  },
};
</script>
