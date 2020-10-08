<template>
  <v-card max-width="500px" min-width="300" width="90%" class="px-5" elevation="6" color="bg">
    <v-card-text>
      <h6 class="font-weight-bold text--primary">
        {{ $t('Jobs.filterSearch') }}
      </h6>
      <v-row>
        <p class="text--primary body-2 mr-4">{{ $t('Jobs.cv') }}</p>
        <v-switch v-model="switch1" color="secondary" />
        <p class="text--primary body-2">{{ $t('Jobs.showJobs') }}</p>
      </v-row>
      <v-row v-bind:key="n * 2">
        <v-combobox
          class="mr-5"
          :items="$t('Data.experienceLevel')"
          v-model="experienceLevel"
          @input="$emit('experience-level', experienceLevel)"
          outlined
        />
      </v-row>
      <v-divider class="mt-3 mb-5 mr-5" />
      <v-row>
        <v-col justify="center" align="center" class="mr-5" @click="editFilters()">
          <p class="text--secondary-lighten-1 text-center">
            {{ $t('Jobs.editFilters') }}
          </p>
          <v-icon>fa fa-angle-down</v-icon>
        </v-col>
      </v-row>
      <div v-if="editYourFilters"></div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Job Filters',
  data() {
    return {
      editYourFilters: false,
      switch1: '',
      experienceLevel: '',
    };
  },
};
</script>

<style></style>
