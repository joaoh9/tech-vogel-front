<template>
  <v-card
    class="mt-8"
    :width="$vuetify.breakpoint.smAndUp ? 470 : $vuetify.breakpoint.width"
    elevation="0"
  >
    <div class="ma-8">
      <h5 class="h5-bold color-white">{{ title }}</h5>
      <sub-1 color="white" class="my-4">{{ description }}</sub-1>

      <v-dialog v-model="dialog" width="600" scrollable>
        <template v-slot:activator="{ on }">
          <v-btn
            color="transparent"
            tile
            elevation="0"
            dark
            v-on="on"
            class="ml-n4"
            style="text-decoration: underline"
          >
            {{ howDoesWork }}
          </v-btn>
        </template>

        <v-card clas="ma-10">
          <div class="d-flex align-center flex-column px-4 py-6 px-sm-10">
            <h4 class=" h4-bold mb-2 align-self-center text-center">{{ title }}</h4>
            <span class=" sub-1 align-self-center text-center color-cinza-lighten-1">
              {{ modalText || '' }}
            </span>
          </div>
          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <g-btn :label="btnText" type="primary" @click="dialog = false" />
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'HelpCard',
  props: {
    title: String,
    description: String,
    howDoesWork: String,
    modalText: String,
    btnText: String,
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style></style>
