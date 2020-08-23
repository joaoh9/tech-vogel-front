<template>
  <div>
    <h2 class="mb-12">Select Desired Skills</h2>
    <v-tooltip left>
      <template v-slot:activator="{ on, attrs }">
        <p v-on="on" v-bind="attrs" class="body-1">{{ $t('Job.new._3.knowledgeAreas') }}</p>
      </template>
      <span>{{ $t('Job.new._3.tooltips.knowledgeAreas') }}</span>
    </v-tooltip>
    <v-combobox
      v-model="knowledgeAreas"
      @input="$emit('knowlege-areas', knowlegeAreas)"
      :items="$t('data.knowledgeAreas')"
      multiple
      outlined
      chips
      deletable-chips
    ></v-combobox>
    <v-tooltip left>
      <template v-slot:activator="{ on, attrs }">
        <p v-on="on" v-bind="attrs" class="body-1">{{ $t('Job.new._3.programmingLanguages') }}</p>
      </template>
      <span>{{ $t('Job.new._3.tooltips.programmingLanguages') }}</span>
    </v-tooltip>
    <v-combobox
      v-model="programmingLanguages"
      @input="$emit('programming-languages', programmingLanguages)"
      :items="$t('data.programmingLanguages')"
      multiple
      outlined
      chips
      deletable-chips
    ></v-combobox>
    <v-tooltip left>
      <template v-slot:activator="{ on, attrs }">
        <p v-on="on" v-bind="attrs" class="body-1">{{ $t('Job.new._3.frameworks') }}</p>
      </template>
      <span>{{ $t('Job.new._3.tooltips.frameworks') }}</span>
    </v-tooltip>
    <v-combobox
      v-model="frameworks"
      @input="$emit('frameworks', frameworks)"
      :items="$t('data.frameworks')"
      item-text="name"
      item-value="name"
      multiple
      outlined
      chips
      deletable-chips
    ></v-combobox>
    <v-tooltip left>
      <template v-slot:activator="{ on, attrs }">
        <p v-on="on" v-bind="attrs" class="body-1">{{ $t('Job.new._3.softSkills') }}</p>
      </template>
      <span>{{ $t('Job.new._3.tooltips.softSkills') }}</span>
    </v-tooltip>
    <v-combobox
      v-model="softSkills"
      @input="$emit('soft-skills', softSkills)"
      :items="$t('data.softSkills')"
      item-text="name"
      item-value="name"
      multiple
      outlined
      chips
      deletable-chips
    ></v-combobox>
    <v-row>
      <v-col>
        <v-btn elevation="0" @click="$emit('back')" :class="getABTestClass('back-btn')" large>
          {{ $t('Common.back') }}
        </v-btn>
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="text-right">
        <v-btn elevation="0" @click="$emit('advance')" large color="primary">{{
          $t('Common.next')
        }}</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'NewJob3',
  props: {
    title: { type: String },
    category: { type: String },
    contractType: { type: String },

    about: { type: String },
    languages: { type: Array },

    perks: { type: String },
  },
  data() {
    return {
      knowledgeAreas: [],
      programmingLanguages: [],
      frameworks: [],
      softSkills: [],
      random: 0,
    };
  },
  methods: {
    getABTestClass(test) {
      // const random = Math.random();
      return 'secondary-ligten-2 v-btn--outlined';
      /*
      switch (test) {
        case 'back-btn':
          if (random < 1 / 6) {
            return 'secondary-ligten-2 v-btn--outlined';
          } else if (random < 2 / 6) {
            return 'secondary-ligten-2';
          } else if (random < 2 / 3) {
            return 'cinza-lighten-1 v-btn--outlined';
          } else {
            return 'v-btn--outlined primary';
          }
      }
      */
    },
  },
  // primary outlined
  // cinza 1 outlined
  // secondary -2
  // secondary -2 outlined
};
</script>

<style>
.theme--light.v-chip:not(.v-chip--active) {
  background: #ffe8cb;
}
</style>
