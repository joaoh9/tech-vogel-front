<template>
  <div class="mt-2" style="background-color: #FCFCFF">
    <v-tabs>
      <v-tab v-for="(item, key) in $t('CV.register.tabs')" :key="key" vertical>
        {{ item }}
      </v-tab>
      <v-tab-item class="d-flex justify-center mt-12" style="background-color: #FCFCFF">
        <card-template :title="$t('CV.register.start.title')">
          <template v-slot:content="{}">
            <Start />
          </template>
        </card-template>
      </v-tab-item>
      <v-tab-item class="d-flex justify-center mt-12" style="background-color: #FCFCFF">
        <card-template
          :title="$t('CV.register.preferences.title')"
          :description="$t('CV.register.preferences.description')"
        >
          <template v-slot:content="{}">
            <Preferences />
          </template>
        </card-template>
      </v-tab-item>
      <v-tab-item class="d-flex justify-center mt-12" style="background-color: #FCFCFF">
        <v-card elevation="6" color="bg" min-width="600" max-width="1000">
          <PersonalInfo />
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import Start from './_0Start';
import Preferences from './_1Preferences';
import PersonalInfo from './_2PersonalInfo';
import 'Public/css/card.css';
import CardTemplate from './CardTemplate';

export default {
  name: 'NewJob',
  components: {
    Start,
    Preferences,
    PersonalInfo,
    CardTemplate,
  },
  data() {
    return {
      currentStep: 1,
    };
  },
  methods: {
    nextStep() {
      this.currentStep += 1;
    },
  },
};
</script>

<style>
.v-text-field {
  width: 100%;
}

.ql-container {
  font-family: Open Sans !important;
}
</style>
