<template>
  <div class="bg-color-bg d-flex align-center justify-space-around">
    <v-combobox
      outlined
      small-chips
      placeholder="Skill"
      v-model="skill.skill"
      @input="updateItem"
      :items="$t('skills.techSkills')"
    />
    <v-btn-toggle
      v-model="skill.experience"
      @change="updateItem"
      color="primary"
      class=" bg-color-bg d-inline-flex justify-center flex-wrap"
    >
      <v-btn class="bg-color-bg" v-for="(xp, index) in xpOptions" :key="index" outlined :value="xp">
        {{ xp }}
      </v-btn>
    </v-btn-toggle>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  props: {
    value: Object,
  },
  data() {
    return {
      skill: {
        skill: '',
        experience: '',
      },
      xpOptions: [ '0-1', '1-2', '2-3', '3-4', '4-5', '5+' ],
    };
  },
  methods: {
    updateItem() {
      this.$emit('update-item', this.skill);
    },
  },
  mounted() {
    this.$forceUpdate();
  },
};
</script>

<style></style>
