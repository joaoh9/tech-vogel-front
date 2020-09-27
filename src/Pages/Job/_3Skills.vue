<template>
  <div>
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
    />
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
    />
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
    />
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
    />
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
};
</script>

<style>
.theme--light.v-chip:not(.v-chip--active) {
  background: #ffe8cb;
}
</style>
