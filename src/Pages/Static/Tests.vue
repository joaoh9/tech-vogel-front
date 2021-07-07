<template>
  <div class="d-flex flex-column align-center justify-center mt-12">
    <g-card class="pa-12">
      <template v-slot:card-header>
        <div class="d-flex flex-column align-center justify-center">
          <g-card-header
            class="color-secondary align-self-center mb-12 "
            title="Testes"
            description="Faça um teste para testar suas habilidades ou veja seus resultados até o momento!"
          />
        </div>
      </template>
      <template v-slot:card-content>
        <v-dialog v-model="dialog" transition="dialog-bottom-transition">
          <template v-slot:activator="{ on, attrs }">
            <div class="d-flex flex-column align-center justify-center">
              <g-btn
                v-bind="attrs"
                v-on="on"
                @click="dialog = true"
                label="Teste suas habilidades"
                type="primary"
                class="my-2"
              />
              <g-btn to="/tests/dashboard" label="Dashboard de testes" type="primary-outlined" class="my-2" />
            </div>
          </template>
          <div class="d-flex justify-center">
            <v-card class="bs-none pa-12 bg-color-bg" width="1000">
              <div class="d-flex justify-end">
                <v-btn color="secondary" outlined small @click="dialog = false">X</v-btn>
              </div>
              <v-card class="bs-none" width="1000" v-for="(test, i) in tests" :key="i">
                <div class="d-flex">
                  <div style="width: 100px; heigth: 100px">
                    <!--
                  <v-img
                    :src="
                      require(`Public/tagslogo/${test.tagId}.png` ||
                        `Public/tagslogo/javascript.png`)
                    "
                    tile
                    height="100"
                    width="100"
                    contain
                    class="ma-0 pa-0"
                  ></v-img>
                   -->
                  </div>
                  <div class="ml-4 d-flex flex-column">
                    <h5>{{ test.text }}</h5>
                    <bdy-1>Faça uns testes de {{ test.text }}!</bdy-1>
                    <div class="d-flex justify-space-between mt-2">
                      <v-chip>
                        <capt-1>
                          Testes cadastrados: <b> {{ test.testCount }} </b>
                        </capt-1>
                      </v-chip>
                      <v-chip class="ml-4">
                        <capt-1
                          >Você já respondeu: <b> {{ test.userAnswers }} </b>
                        </capt-1>
                      </v-chip>
                    </div>
                  </div>
                  <div class="align-self-center ml-auto">
                    <g-btn
                      :to="`/tests/tag/${test.tagId}`"
                      type="primary-outlined"
                      label="Responder testes"
                    >
                    </g-btn>
                    <v-divider />
                  </div>
                </div>
                <v-divider class="my-6" />
              </v-card>
            </v-card>
          </div>
        </v-dialog>
      </template>
    </g-card>
  </div>
</template>

<script>
import TestController from 'Controllers/tests';

import tagsLogo from 'Public/tagslogo/javascript.png';

export default {
  name: 'tests',
  data() {
    return {
      dialog: false,
      tests: [],
      tagsLogo,
    };
  },
  mounted() {
    this.getTestsInfo();
  },
  methods: {
    async getTestsInfo() {
      const testController = new TestController(this.$toast);

      this.tests = await testController.getTestsInfo();
    },
  },
  watch: {},
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

pre {
  background-color: #d6d6e8 !important
}

</style>
