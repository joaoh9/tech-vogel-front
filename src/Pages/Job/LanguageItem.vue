<template>
  <div class="bg-color-bg d-flex align-center justify-space-around">
    <div class="mr-1">
      <v-combobox
        placeholder="Skill"
        v-model="language.language"
        v-on:input="updateItem"
        :items="$t('Data.languages')"
        item-text="label"
        item-value="code"
      />
    </div>
    <v-btn-toggle
      v-model="language.fluency"
      v-on:change="updateItem"
      color="primary"
      class=" bg-color-bg d-inline-flex justify-center flex-wrap "
    >
      <v-btn
        rounded
        class="bg-color-bg flex-fill"
        outlined
        :value="fluency"
        v-for="(fluency, index) in fluencyOptions"
        :key="index"
      >
        {{ fluency }}
      </v-btn>
    </v-btn-toggle>
  </div>
</template>

<script>
export default {
  name: 'Language',
  props: {},
  data() {
    return {
      language: {
        language: '',
        fluency: '',
      },
      fluencyOptions: [ 'Basic', 'Intermediate', 'Fluent', 'Native' ],
    };
  },
  methods: {
    updateItem() {
      this.$emit('update-item', this.language);
    },
  },
};
</script>

<style></style>
