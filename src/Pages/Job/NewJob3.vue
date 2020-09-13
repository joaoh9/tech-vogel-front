<template>
  <div>
    <h2 class="mb-12">Select Desired Skills</h2>
    <form-input
      position="left"
      :title="$t('Job.new.knowledgeAreas.title')"
      :tooltip="$t('Job.new.knowledgeAreas.tooltip')"
    />
    <v-combobox
      v-model="knowledgeAreas"
      @input="$emit('knowlege-areas', knowlegeAreas)"
      :items="$t('data.knowledgeAreas')"
      multiple
      outlined
      chips
      deletable-chips
    ></v-combobox>
    <form-input
      position="left"
      :title="$t('Job.new.programmingLanguages.title')"
      :tooltip="$t('Job.new.programmingLanguages.tooltip')"
    />
    <v-combobox
      v-model="programmingLanguages"
      @input="$emit('programming-languages', programmingLanguages)"
      :items="$t('data.programmingLanguages')"
      multiple
      outlined
      chips
      deletable-chips
    ></v-combobox>
    <form-input
      position="left"
      :title="$t('Job.new.frameworks.title')"
      :tooltip="$t('Job.new.frameworks.tooltip')"
    />
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
    <form-input
      position="left"
      :title="$t('Job.new.softSkills.title')"
      :tooltip="$t('Job.new.softSkills.tooltip')"
    />
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
        <v-btn elevation="0" @click="$emit('advance')" large color="primary">
          {{ $t('Common.next') }}
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'NewJob3',
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
