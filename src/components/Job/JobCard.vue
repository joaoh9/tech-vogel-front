<template>
  <g-card :lg="800" :md="800" :sm="700" :maxlg="1000" :maxmd="1000" class="px-5 ma-2 ml-n7">
    <template v-slot:card-content>
      <v-row :justify="$vuetify.breakpoint.mdAndUp ? '' : 'center'">
        <v-avatar color="cinza" size="70" class="mx-2"> </v-avatar>
        <v-row>
          <v-col cols="12" lg="9" xl="5">
            <v-list-item-subtitle>
              <p class="caption mr-2" v-text="job.day"></p>
            </v-list-item-subtitle>
            <v-list-item-content>
              <h5 class="font-weight-black" v-text="job.title"></h5>
            </v-list-item-content>
            <template>
              <v-col class="mt-n4">
                <v-row class="ml-0">
                  <v-row class="">
                    <v-icon size="20" color="secondary">mdi-domain</v-icon>
                    <p class="caption mr-2 mt-1">
                      {{ job.company }}
                    </p>
                    <v-icon size="20" color="secondary" class="ml-5">
                      mdi-briefcase-variant-outline
                    </v-icon>
                    <p class="caption mr-2 mt-1">
                      {{ job.jobType }}
                    </p>
                  </v-row>
                </v-row>
              </v-col>
            </template>
          </v-col>
          <v-col cols="12" lg="3" xl="7" class="align-self-center align-context-end">
            <v-btn @click="goToJobDetails()" max-width="200" width="140" large color="primary">
              {{ $t('Jobs.viewDetais') }}
            </v-btn>
          </v-col>
        </v-row>
      </v-row>
    </template>
  </g-card>
</template>

<script>
export default {
  name: 'listJobs',
  props: {
    job: {},
  },
  methods: {
    goToJobDetails() {
      this.$router.push({
        path: `/jobs/${this.job.id}`,
      });
    },
  },
};
</script>

<style></style>
