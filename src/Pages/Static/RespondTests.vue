<template>
  <div class="container">
    <v-card>
      <v-card-title class="bg-color-secondary-lighten-2">{{ test.question }}</v-card-title>
      <v-divider />
      <v-card-text>
        <v-radio-group>
          <v-radio class="mb-4" v-for="(item, i) in test.options" :key="i" :label="item.option">
          </v-radio>
        </v-radio-group>
      </v-card-text>
      <v-divider class="mt-n4" />
      <v-card-actions class="d-flex justify-end pa-4">
        <v-btn dark large color="secondary-lighten-1" class="color-bg">Confirmar</v-btn>
      </v-card-actions>
    </v-card>
    <v-chip v-for="(tag, j) in test.tags" :key="j * 10" :label="tag">{{ tag }}</v-chip>
    {{ test }}
    {{ testId }}
  </div>
</template>

<script>
import TestController from 'Controllers/tests';

export default {
  name: 'RespondTests',
  data() {
    return {
      test: {},
      testId: '',
    };
  },
  mounted() {
    this.testId = this.$route.params.id;
    this.getTest();
  },
  methods: {
    async getTest() {
      const testController = new TestController(this.$toast);

      try {
        this.test = await testController.getById(this.testId);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style></style>
