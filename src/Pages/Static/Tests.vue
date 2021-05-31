<template>
  <div class="d-flex flex-column align-center justify-center mt-12">
    <g-card class="pa-12">
      <template v-slot:card-header>
        <div class="d-flex flex-column align-center justify-center">
          <g-card-header
            class="color-secondary align-self-center mb-12 "
            title="Testes"
            description="Faça um teste para testar suas habilidades ou cadastre um novo teste para que outros programadores testem seus conhecimentos!"
          />
        </div>
      </template>
      <template v-slot:card-content>
        <v-dialog v-model="dialog">
          <template v-slot:activator="{ on, attrs }">
            <div class="d-flex flex-column align-center justify-center">
              <g-btn
                v-bind="attrs"
                v-on="on"
                @click="dialog = true"
                label="Test your habilities"
                type="primary"
                class="my-2"
              />
              <g-btn to="/tests/new" label="Make new test" type="primary-outlined" class="my-2" />
            </div>
          </template>
          <div class="d-flex justify-center">
            <v-card class="bs-none pa-12" width="1000">
              <div class="d-flex">
                <div style="width: 100px; heigth: 100px">
                  <v-img
                    :src="javascript"
                    tile
                    height="100"
                    width="100"
                    contain
                    class="ma-0 pa-0"
                  ></v-img>
                </div>
                <div class="ml-4 d-flex flex-column">
                  <h5>Javascript</h5>
                  <bdy-1>Faça uns testes de javascript!</bdy-1>
                  <div class="d-flex justify-space-between mt-2">
                    <v-chip>
                      <capt-1> Testes cadastrados: <b> 5 </b> </capt-1>
                    </v-chip>
                    <v-chip class="ml-4">
                      <capt-1>Você já respondeu: <b> 2 </b> </capt-1>
                    </v-chip>
                  </div>
                </div>
                <div class="align-self-center ml-auto">
                  <g-btn to="/tests/tag/fácil" type="primary-outlined" label="Responder testes"> </g-btn>
                </div>
              </div>
            </v-card>
          </div>
        </v-dialog>
      </template>
    </g-card>
  </div>
</template>

<script>
import Javascript from 'Assets/javascript.png';
export default {
  name: 'tests',
  data() {
    return {
      dialog: false,
      javascript: Javascript,
    };
  },
  mounted() {},
  methods: {},
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
</style>
