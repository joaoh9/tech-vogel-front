<template>
  <div class="bg-color-bg d-flex align-center justify-space-around">
    <div class="mr-1">
      <v-combobox
        placeholder="Skill"
        v-model="language.language"
        @input="updateItem"
        :items="$t('skills.languages')"
        item-text="label"
        item-value="code"
      />
    </div>
    <v-btn-toggle
      v-model="language.fluency"
      @change="updateItem"
      color="primary"
      class=" bg-color-bg d-inline-flex justify-center flex-wrap "
    >
      <v-btn
        rounded
        class="bg-color-bg flex-fill"
        outlined
        :value="fluency"
        v-for="(fluency, index) in $t('enums.dictionary.fluencyLevel')"
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
