<template>
  <div>
    <h2 class="mb-12">Select Desired Skills</h2>

    <p class="body-1">Knowlege Areas</p>
    <v-combobox
      v-model="knowledgeAreas"
      @input="$emit('knowlegeAreas', knowlegeAreas)"
      :items="$t('data.knowledgeAreas')"
      multiple
      outlined
      chips
      deletable-chips
    ></v-combobox>
    <p class="body-1">Programming Languages</p>
    <v-combobox
      v-model="programmingLanguages"
      @input="$emit('programmingLanguages', programmingLanguages)"
      :items="$t('data.programmingLanguages')"
      multiple
      outlined
      chips
      deletable-chips
    ></v-combobox>
    <p class="body-1">Frameworks</p>
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
    <p class="body-1">Soft Skills</p>
    <v-combobox
      v-model="softSkills"
      @input="$emit('softSkills', softSkills)"
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
        <v-btn elevation="0" @click="$emit('back')" large color="secondary-lighten-2">{{$t('Common.back')}}</v-btn>
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="text-right">
        <v-btn elevation="0" @click="$emit('advance')" large color="primary">{{$t('Common.next')}}</v-btn>
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
    };
  },
};
</script>

<style>
.theme--light.v-chip:not(.v-chip--active) {
  background: #ffe8cb;
}
</style>
