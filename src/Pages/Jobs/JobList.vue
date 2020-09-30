<template>
  <div>
    <v-row class="container">
      <v-col cols="12" lg="4" xl="3" class="ml-md-0 ml-n11">
        <v-card max-width="500px" min-width="300" width="90%" class="px-5" elevation="6" color="bg">
          <v-card-text>
            <h4 class="font-weight-bold text--primary ml-n7">
              {{ $t('Jobs.filterSearch') }}
            </h4>
            <v-row>
              <h4 class="text--primary  ml-n4">{{ $t('Jobs.cv') }}</h4>
              <v-switch v-model="switch1" color="secondary" inset />
              <h4 class="text--primary ml-n4">{{ $t('Jobs.showJobs') }}</h4>
            </v-row>
            <template v-for="n in 3">
              <v-row v-bind:key="n * 2">
                <v-combobox
                  class="mr-5"
                  :rules="[rules.required]"
                  :items="$t('Data.experienceLevel')"
                  v-model="experienceLevel"
                  @input="$emit('experience-level', experienceLevel)"
                  outlined
                />
                <v-divider v-if="n % 2 == 0" class="mb-5 mt-n1 mr-5" />
              </v-row>
            </template>
            <v-row>
              <v-slider
                class="mr-5 mt-n2"
                v-model="slider"
                :tick-labels="ticksLabels"
                :max="8"
                step="1"
              />
            </v-row>
            <v-row>
              <v-divider class="mt-3 mb-5 mr-5" />
            </v-row>
            <v-row>
              <v-combobox
                class="mr-5"
                :rules="[rules.required]"
                :items="$t('Data.experienceLevel')"
                v-model="experienceLevel"
                @input="$emit('experience-level', experienceLevel)"
                outlined
              />
            </v-row>
            <v-row>
              <v-col justify="center" align="center" class="mt-n6 mr-5" @click="editFilters()">
                <h4 class="text--primary d-block text-center">
                  {{ $t('Jobs.editFilters') }}
                </h4>
                <v-icon>fa fa-angle-down</v-icon>
              </v-col>
            </v-row>
            <div v-if="editYourFilters">
              <v-row>
                <v-divider class="mt-3 mb-5 mr-5" />
              </v-row>
              <v-row>
                <v-col justify="start" align="start" class="mt-n6 mr-5">
                  <h4 class="text--primary ml-n7">
                    {{ $t('Jobs.editYFilter.knowledgeAreas') }}
                  </h4>
                  <checkbox-list
                    :items="skills.knowledgeAreas"
                    :subtitle="$t('Jobs.editYFilter.showMore')"
                  >
                  </checkbox-list>
                </v-col>
              </v-row>
              <v-row>
                <v-col justify="start" align="start" class="mt-n6">
                  <h4 class="text--primary ml-n7">
                    {{ $t('Jobs.editYFilter.programmingLanguages') }}
                  </h4>
                  <checkbox-list
                    :items="skills.programmingLanguages"
                    :subtitle="$t('Jobs.editYFilter.showMore')"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col justify="start" align="start" class="mt-n6 mr-5">
                  <h4 class="text--primary ml-n7">
                    {{ $t('Jobs.editYFilter.frameworks') }}
                  </h4>
                  <checkbox-list
                    :items="skills.frameworks"
                    :subtitle="$t('Jobs.editYFilter.showMore')"
                  >
                  </checkbox-list>
                </v-col>
              </v-row>
              <v-row>
                <v-col justify="start" align="start" class="mt-n6 mr-5">
                  <h4 class="text--primary ml-n7">
                    {{ $t('Jobs.editYFilter.softSkills') }}
                  </h4>
                  <checkbox-list
                    :items="skills.softSkills"
                    :subtitle="$t('Jobs.editYFilter.showMore')"
                  />
                </v-col>
              </v-row>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" lg="8" xl="9" :class="$vuetify.breakpoint.mdAndUp ? 'ml-0' : 'ml-n5'">
        <v-row>
          <v-col cols="12" lg="9" xl="9">
            <v-row>
              <p class="caption mr-2">
                {{ $t('Jobs.filters') }}
              </p>
              <v-chip
                class="mr-2 mb-1 mt-1"
                color="tag1"
                v-for="(k, i) in skills.frameworks"
                :key="i"
                >{{ k }}
              </v-chip>
            </v-row>
          </v-col>
          <v-col cols="12" lg="3" xl="4">
            <v-combobox
              label="texto campo"
              :rules="[rules.required]"
              :items="$t('Data.experienceLevel')"
              v-model="experienceLevel"
              @input="$emit('experience-level', experienceLevel)"
              outlined
              single-line
            />
          </v-col>
        </v-row>
        <v-list>
          <v-list-item v-for="(job, i) in jobInfo" :key="i">
            <JobCard :job="job" />
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import JobController from 'Controllers/job';
import JobCard from 'Components/Job/JobCard';
import CheckboxList from 'Components/Interface/CheckboxList';

export default {
  name: 'JobDescription',
  mounted() {
    this.getJobs();
  },
  props: {
    job: Object,
    company: Object,
    confirm: Boolean,
  },
  components: {
    JobCard,
    CheckboxList,
  },
  data() {
    return {
      switch1: false,
      slider: 1,
      editYourFilters: false,
      ticksLabels: [ 'x', '', '', '', '', '', '', '', 'y' ],
      skills: {
        knowledgeAreas: [ 'JavaScript', 'Java', 'PHP', 'Python', 'Swift' ],
        programmingLanguages: [ 'JavaScript', 'Java', 'PHP', 'Python', 'Swift' ],
        frameworks: [ 'JavaScript', 'Java', 'PHP', 'Python', 'Swift' ],
        softSkills: [ 'JavaScript', 'Java', 'PHP', 'Python', 'Swift' ],
      },
      rules: {
        required: t => t.length > 3 || 'Please write something',
      },
      experienceLevel: '',
      jobInfo: '',
    };
  },
  methods: {
    editFilters() {
      this.editYourFilters = !this.editYourFilters;
    },
    async getJobs() {
      const jobController = new JobController();
      try {
        this.jobInfo = await jobController.getAll();
      } catch (e) {
        // TODO: G-alert
        // exemplo em src/Pages/User/ConfirmRegistration.vue
      }
    },
  },
};
</script>

<style scoped>
h2 {
  color: #424242 !important;
  margin-top: 1.4rem;
}
p {
  color: #757575 !important;
  margin-top: 0.8rem;
}
</style>
