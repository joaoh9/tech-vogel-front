<template>
  <div>
    <v-expansion-panels class="mt-6">
      <v-expansion-panel
        class="bs-primary rounded"
        style="background-color: #fcfcff"
        v-for="(item, i) in getFAQ()"
        :key="i"
      >
        <v-expansion-panel-header>
          <h6 class="color-primary mb-0">{{ item.question }}</h6>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="my-3">
          <bdy-1
            color="dark"
            v-for="(text, j) in item.answer.split('\n')"
            :key="j"
            class="mb-2"
            v-html="text"
          >
          </bdy-1>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  name: 'FAQComponent',
  props: {
    items: Array,
  },
  methods: {
    getAllFAQ() {
      return this.$t('FAQ.items');
    },
    getFAQ() {
      return this.items || this.getAllFAQ();
    },
  },
};
</script>
<style>
.v-expansion-panel {
  bottom: inherit;
}
.v-expansion-panel::after {
  bottom: inherit !important;
}
.v-expansion-panel::before {
  bottom: inherit !important;
}
</style>
