<template>
  <div class="d-flex align-center justify-space-around">
    <div class="mr-1">
      <v-combobox
        placeholder="Skill"
        v-model="skill.skill"
        v-on:input="updateItem"
        :items="$t('Data.knowledgeAreas')"
      />
    </div>
    <v-btn-toggle
      v-model="skill.experience"
      v-on:change="updateItem"
      color="primary"
      class="d-inline-flex justify-center flex-wrap"
    >
      <v-btn v-for="(xp, index) in xpOptions" v-bind:key="index" outlined :value="xp">{{
        xp
      }}</v-btn>
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
