<template>
  <v-row align="center" class="mt-12">
    <v-col cols="1" md="2" />
    <v-col cols="10" md="8" :class="$slots.buttons ? 'mb-1' : 'mb-3'">
      <form-input title="Escreva a pergunta:"> </form-input>
      <v-text-field autofocus v-model="test.question" outlined />
      <form-input title="Descreva melhor a pergunta:"> </form-input>
      <vue-editor :editorToolbar="$t('quill.defaultToolbar')" v-model="test.text" />
      <!-- <v-textarea outlined v-model="test.text" /> -->
      <div class="d-flex justify-space-between mt-16">
        <form-input class="" title="Preencha as opções:"> </form-input>
        <form-input class="" title="Pontos pela pergunta"> </form-input>
      </div>
      <div v-for="(question, i) in test.options" :key="i">
        <v-row no-gutters>
          <v-col class=" flex-shrink-1 flex-grow-0" style="min-width: 70px">
            <div
              class="mr-2 pa-5 rounded-circle text-center color-primary bg-color-secondary-lighten-1"
            >
              {{ i + 1 }}
            </div>
          </v-col>
          <v-col class=" flex-grow-1">
            <v-text-field class="flex-grow-1" v-model="test.options[i].option" outlined />
          </v-col>
          <v-col class="flex-shrink-1 flex-grow-0 ml-2 r-2" style="min-width: 50px">
            <v-select
              class=""
              label="0"
              style="flex-wrap: nowrap;"
              v-model="test.options[i]"
              :items="getItemPoints()"
            />
          </v-col>
        </v-row>
      </div>
      <g-btn outlined type="primary" block @click="addQuestion" label="Adicionar pergunta"> </g-btn>
      <div class="mt-4">
        <form-input class="" title="Dificuldade"> </form-input>
        <v-slider v-model="test.difficulty" thumb-label="always" min="0" max="10"></v-slider>
        <form-input class="" title="Tempo esperado de resposta (em minutos)"> </form-input>
        <v-text-field v-model="test.timeToAnswer" type="number" outlined />
      </div>
    </v-col>
    <v-col cols="1" md="2" />
  </v-row>
</template>

<script>
import { VueEditor } from 'vue2-editor';

export default {
  name: 'tests',
  components: {
    VueEditor,
  },
  data() {
    return {
      test: {
        question: '',
        text: '',
        options: [
          {
            option: '',
            points: 0,
          },
        ],
        difficulty: 5,
      },
    };
  },
  methods: {
    getItemPoints() {
      return [ -3, -2, -1, 0, 1, 2, 3 ];
    },
    addQuestion() {
      this.test.options.push({
        option: '',
        points: 0,
      });
    },
  },
};
</script>

<style>
.quillWrapper {
  height: 180px;
  min-height: 180px !important;
}

.ql-editor {
  height: 180px;
  min-height: 180px !important;
}
</style>
