<template>
  <v-card v-if="filtersImplemented" max-width="500px" min-width="300" class="px-5 bs-primary" color="bg">
    <v-card-text>
      <h6 class="font-weight-bold text--primary">
        TODO
        <!-- TODO -->
      </h6>
      <v-row align="center">
        <p class="text--primary bdy-2 mr-4">TODO</p>
        <v-switch v-model="switch1" color="secondary" />
        <p class="text--primary bdy-2">TODO</p>
      </v-row>
      <v-row>
        <v-combobox
          class="mr-5"
          :items="$t('enums.experienceLevel')"
          v-model="experienceLevel"
          @input="$emit('experience-level', experienceLevel)"
          outlined
        />
      </v-row>
      <v-divider class="mt-3 mb-5 mr-5" />
      <v-row>
        <v-col justify="center" align="center" class="mr-5" @click="editFilters()">
          <p class="text--secondary-lighten-1 text-center">
            TODO
            <!-- TODO -->
          </p>
          <v-icon>fa fa-angle-down</v-icon>
        </v-col>
      </v-row>
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
      filtersImplemented: false,
    };
  },
};

</script>

<style></style>
