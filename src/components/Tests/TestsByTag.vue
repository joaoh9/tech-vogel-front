<template>
  <div class="container">
    <div v-if="tests.length">
      <div class="d-flex justify-space-between">
        <h2 class="h2-alternative mb-4">
          Testes de <b class="ml-8"> {{ tagId }} </b>
        </h2>
        <div class="ml-auto align-self-center">
          <capt-1> Try another random test </capt-1>
          <v-icon @click="randomizeTest" large color="secondary"> mdi-refresh </v-icon>
        </div>
      </div>
      <v-card class="primary-card bg-color-bg" color="bg">
        <v-card-title class="bg-color-secondary-lighten-2">{{ test.question }}</v-card-title>
        <v-divider />
        <v-card-text>
          <v-avatar
            width="100%"
            class="pa-8 d-flex justify-start"
            height="100%"
            tile
            color="cinza-lighten-3"
          >
            <p v-html="test.text"></p>
          </v-avatar>
          <v-radio-group>
            <v-radio class="mb-4" v-for="(item, i) in test.options" :key="i" :label="item.option">
            </v-radio>
          </v-radio-group>
        </v-card-text>
        <v-divider class="mt-n4" />
        <v-card-actions class="d-flex justify-space-between pa-4">
          <v-btn dark large color="secondary" text class="color-bg">
            Id #{{ test.id.substr(6, 12) }}
          </v-btn>
          <v-btn @click="saveAnswer" dark large color="secondary-lighten-1" class="color-bg">
            Confirmar
          </v-btn>
        </v-card-actions>
        <v-progress-linear :value="timer"></v-progress-linear>
      </v-card>
      <div class="d-flex justify-space-between">
        <v-chip class="mt-4 rounded-xl" v-for="(tag, j) in test.tags" :key="j * 10">
          <capt-1 style="font-size: 17px"> {{ tag }}</capt-1>
        </v-chip>
        <div class="d-flex" v-if="test.author.publicName && test.author.name">
          <v-icon color="black">mdi-account-circle-outline</v-icon>
          <bdy-1><b class="mx-1"> Author:</b> {{ test.author.name }} </bdy-1>
        </div>
        <div class="d-flex" v-if="test.author.publicCompany && test.author.company">
          <v-icon class="ml-2" color="black">mdi-domain</v-icon>
          <bdy-1><b class="mx-1"> Company:</b> {{ test.author.company }} </bdy-1>
        </div>
      </div>
    </div>
    <h3 v-else class="mt-10">No tests saved for tag {{ tagId }}</h3>
  </div>
</template>

<script>
import TestController from 'Controllers/tests';

export default {
  name: 'RespondTests',
  data() {
    return {
      tests: [],
      tagId: '',
      test: {},
      timer: 0,
    };
  },
  mounted() {
    this.tagId = this.$route.params.tagId;
    this.getAllByTagId();
    this.getTimeValue();
  },
  methods: {
    async getAllByTagId() {
      const testController = new TestController(this.$toast);

      try {
        this.tests = await testController.getAllByTagId(this.tagId);
        const randomIndex = Math.round(Math.random() * (this.tests.length - 1));
        this.test = this.tests[randomIndex];
        this.startTime = new Date().getTime() / 1000;
      } catch (e) {
        console.log(e);
      }
    },
    randomizeTest() {
      const randomIndex = Math.round(Math.random() * this.tests.length);
      this.test = this.tests[randomIndex];
      this.startTime = new Date().getTime() / 1000;
    },
    getTimeValue() {
      this.timer = (
        ((new Date().getTime() / 1000 - this.startTime) / (this.test.timeToAnswer * 60)) *
        100
      ).toString();
      setTimeout(() => this.getTimeValue(), 1 * 1000);
    },
    async saveAnswer() {},
  },
};
</script>

<style></style>
