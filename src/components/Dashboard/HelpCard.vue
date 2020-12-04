<template>
  <v-card max-height="300" width="470" class="mt-8">
    <div class="ma-8">
      <h5 class="h5-bold color-white">{{ title }}</h5>
      <sub-1 color="white" class="my-4">{{ description }}</sub-1>

      <v-dialog v-model="dialog" width="600" scrollable>
        <template v-slot:activator="{ on }">
          <v-btn
            color="transparent"
            dark
            v-on="on"
            style="text-decoration: underline">
          {{ howDoesWork }}
          </v-btn>
        </template>

        <v-card>
          <g-card-header
            :title="howDoesWork"
            :description="modalText"
            class="headline color-secondary"
          />

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
