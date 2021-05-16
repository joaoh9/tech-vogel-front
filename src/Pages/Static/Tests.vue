<template>
  <v-row align="center" class="mt-12">
    <v-col cols="1" md="2" />
    <v-col cols="10" md="8">
      <form-input title="Escreva a pergunta:"> </form-input>
      <v-text-field counter="500" autofocus v-model="test.question" outlined />
      <form-input title="Descreva melhor a pergunta:"> </form-input>
      <vue-editor :editorToolbar="$t('quill.defaultToolbar')" v-model="test.text" />
      <!-- <v-textarea outlined v-model="test.text" /> -->
      <v-row :style="$vuetify.breakpoint.mdAndUp ? 'margin-top: 64px' : 'margin-top: 100px'">
        <v-col cols="6" md="9">
          <form-input class="" title="Preencha as opções:"> </form-input
        ></v-col>
        <v-col cols="6" md="3">
          <form-input class="" title="Pontos pela pergunta"> </form-input
        ></v-col>
      </v-row>
      <div v-for="(question, i) in test.options" :key="i">
        <v-row no-gutters>
          <v-col cols="1" class="flex-shrink-1 flex-grow-0 d-flex justify-center mr-2">
            <v-chip class="text-center align-self-center mb-7 justify-center"> {{ i + 1 }} </v-chip>
          </v-col>
          <v-col md="9" cols="8" class=" flex-grow-1">
            <v-text-field
              counter="500"
              class="flex-grow-1"
              v-model="test.options[i].option"
              outlined
            />
          </v-col>
          <v-col cols="1" class="flex-shrink-1 flex-grow-0 ml-2 r-2">
            <v-select
              class=""
              label="-3 a 3"
              style="flex-wrap: nowrap;"
              v-model="test.options[i]"
              :items="getItemPoints()"
            />
          </v-col>
          <v-col class="flex-shrink-0 d-flex justify-center">
            <v-chip
              class="text-center align-self-center mb-7 justify-center"
              color="error"
              @click="removeFromOptions(i)"
            >
              x
            </v-chip>
          </v-col>
        </v-row>
      </div>
      <div class="d-flex justify-center">
        <g-btn outlined type="primary-outlined" @click="addQuestion()" label="Adicionar pergunta">
        </g-btn>
      </div>
      <div class="mt-4">
        <form-input class="" title="Dificuldade"> </form-input>
        <v-slider v-model="test.difficulty" thumb-label="always" min="1" max="10"></v-slider>
        <v-row>
          <v-col cols="6">
            <form-input class="" title="Tempo esperado de resposta (em minutos)"> </form-input>
            <v-text-field class="mr-2" v-model="test.timeToAnswer" type="number" outlined />
          </v-col>
          <v-col>
            <form-input class="" title="Tags"> </form-input>
            <v-combobox multiple small-chips outlined :items="tags" v-model="test.tags" />
          </v-col>
        </v-row>
      </div>
    </v-col>
    <v-col cols="12" class="d-flex flex-column align-center">
      <v-checkbox :label="`Nome público (${user.name})`" v-model="test.author.publicName">
      </v-checkbox>
      <v-checkbox :label="`Email público (${user.email})`" v-model="test.author.publicEmail">
      </v-checkbox>
      <v-checkbox
        v-if="Object.keys(company).length > 0"
        :label="`Nome da empresa público (${company.name})`"
        v-model="test.author.publicCompany"
      >
      </v-checkbox>
    </v-col>
    <v-col cols="12" class="d-flex justify-center">
      <g-btn outlined type="primary-outlined" class="mr-2" @click="preview" label="Preview">
      </g-btn>
      <g-btn outlined type="primary" class="ml-2" @click="save" label="Salvar"> </g-btn>
    </v-col>
  </v-row>
</template>

<script>
import { VueEditor } from 'vue2-editor';
import TagController from 'Controllers/tags';
import TestController from 'Controllers/tests';
import UserController from 'Controllers/user';
import CompanyController from 'Controllers/company';

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
        tags: [],
        author: {
          name: '',
          publicName: false,
          email: '',
          publicEmail: false,
          company: '',
          publicCompany: false,
        },
      },
      user: {},
      company: {},
      tags: [],
    };
  },
  mounted() {
    this.getTestTags();
    this.getUser();
    this.getCompany();
  },
  methods: {
    getItemPoints() {
      return [ -3, -2, -1, 0, 1, 2, 3 ];
    },
    addQuestion() {
      console.log('add');
      this.test.options.push({
        option: '',
        points: 0,
      });
    },
    async getUser() {
      const userController = new UserController();

      try {
        const user = await userController.decodeUserToken();
        if (!user) {
          throw { status: 404 };
        }
        this.user = user;
        this.test.author.name = user.name;
        this.test.author.email = user.email;
      } catch (e) {
        this.$toast.warn(this.$t('toast.error.retrieveUser'));
        this.$router.push({
          name: 'User Login',
        });
      }
    },
    async preview() {
      const testController = new TestController(this.$toast);
      await testController.save(this.test);
    },
    async getCompany() {
      const companyController = new CompanyController();

      try {
        const { logo, ...company } = await companyController.getByCurrentUser();
        this.company = company;
        this.test.author.company = company.id;
      } catch (e) {
        console.log('No company loaded');
      }
    },
    async getTestTags() {
      const tagsController = new TagController(this.$toast);
      this.tags = await tagsController.getTestTags();
    },
    async save() {
      const testController = new TestController(this.$toast);
      try {
        await testController.save(this.test);
        this.$toast.success('Test saved successfully!');
      } catch (e) {
        console.log('error on save');
      }
    },
    removeFromOptions(index) {
      this.test.options.splice(index, 1);
    },
  },
  watch: {
    'test.tags'() {
      const tag = this.test.tags[this.test.tags.length - 1];
      if (typeof tag === 'string') {
        this.test.tags.pop();
        this.test.tags.push({
          text: tag,
        });
      }
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
