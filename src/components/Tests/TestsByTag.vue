<template>
  <div>
    <v-row>
      <v-col cols="0" md="1" lg="2"></v-col>
      <v-col cols="12" md="8">
        <div class="container">
          <div v-if="tests.length">
            <div class="d-flex justify-space-between">
              <h2 class="h2-alternative mb-4">
                Testes de <b class="ml-8"> {{ tagId }} </b>
              </h2>
            </div>
            <v-card class="primary-card bg-color-bg" color="bg">
              <v-card-title class="bg-color-secondary pa-8 text-justify color-white text-bold">
                <b> {{ test.question }} </b>
              </v-card-title>
              <v-divider />
              <v-card-text>
                <v-avatar
                  v-if="test.text"
                  width="100%"
                  class="pa-8 d-flex justify-start rounded-lg"
                  height="100%"
                  tile
                  color="cinza-lighten-4"
                >
                  <p class="justify-self-start text-start" v-html="test.text"></p>
                </v-avatar>
                <v-radio-group v-model="answer">
                  <div class="d-flex align-center my-2" v-for="(item, i) in test.options" :key="i">
                    <v-chip> {{ String.fromCharCode(65 + i) }} </v-chip>
                    <v-radio class="ml-2" :label="item.option"> </v-radio>
                  </div>
                </v-radio-group>
              </v-card-text>
              <v-divider class="mt-n4" />
              <v-card-actions class="d-flex justify-space-between pa-4">
                <p dark large color="secondary" text class="color-black">
                  Id #{{ test.id.substr(0, 24) }}
                </p>
                <v-btn
                  v-if="!confirmed"
                  @click="saveAnswer"
                  dark
                  large
                  color="secondary-lighten-1"
                  class="color-bg"
                >
                  Confirmar
                </v-btn>
                <v-btn
                  v-else
                  @click="findNextTest"
                  elevation="0"
                  large
                  color="primary"
                  tile
                  class="color-bg"
                >
                  Próxima pergunta
                </v-btn>
              </v-card-actions>
              <v-progress-linear :value="timer"></v-progress-linear>
            </v-card>
            <div class="d-flex justify-start">
              <v-chip class="mt-4 rounded-xl mx-4" v-for="(tag, j) in test.tags" :key="j * 42">
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
      </v-col>
      <v-col cols="12" md="3"> </v-col>
    </v-row>
    <v-row>
      <v-col cols="0" md="1" lg="2"></v-col>
      <v-col cols="12" md="8">
        <div class="d-flex flex-column">
          <p>Você já respondeu 3 de 15 (15%)</p>
          <p>Aproveitamento de 80%</p>
        </div>
      </v-col>
      <v-col cols="12" md="3"> </v-col>
    </v-row>
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
      answer: -1,
      confirmed: false,
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
    async saveAnswer() {
      const testController = new TestController(this.$toast);

      if (this.answer < 0) {
        this.$toast.info('Por favor selecione uma resposta!');
        return;
      }

      const resposta = confirm(`Confirma a opção ${String.fromCharCode(65 + this.answer)}?`);

      if (resposta) {
        await testController.answer({
          testId: this.test.id,
          answerPoint: this.test.options[this.answer].points,
        });

        this.confirmed = true;
      }
    },
    findNextTest() {},
  },
};
</script>

<style>
.ql-syntax {
  padding: 18px;
}

pre {
  background-color: #d6d6e8 !important;
}

p > span,
p > em {
  background-color: #ebebee !important;
  font-size: 1.2em;
}
</style>

<style scoped></style>
