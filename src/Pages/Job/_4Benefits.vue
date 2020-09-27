<template>
  <div>
    <form-input
      position="left"
      :title="$t('Job.new.salary.title')"
      :tooltip="$t('Job.new.salary.tooltip')"
    />
    <div class="d-flex justify-space-between">
      <v-autocomplete
        v-model="salary.currency"
        @click="$emit('salary-currency', salary.currency)"
        label="Currency"
        title="Payment Currency"
        outlined
        :items="['USD', 'GBP', 'EUR']"
        class="mr-2"
      />
      <v-autocomplete
        v-model="salary.timeFrame"
        @click="$emit('salary-time-frame', salary.timeFrame)"
        label="Time Frame"
        title="Time Frame"
        outlined
        :items="['Yearly', 'Monthly', 'Hourly']"
        class="mr-2"
      />
      <v-text-field
        v-model="salary.min"
        @click="$emit('salary-min', salary.min)"
        :label="range ? 'From' : 'Price'"
        :title="range ? 'From' : 'Price'"
        outlined
        :class="range ? 'mr-2' : ''"
      />
      <v-text-field
        v-model="salary.max"
        @click="$emit('salary-max', salary.max)"
        :label="range ? 'To' : 'Price'"
        :title="range ? 'To' : 'Price'"
        outlined
        v-if="range"
      />
    </div>
    <div class="d-flex justify-start mt-n6 mb-6">
      <v-checkbox v-model="range" label="Set salary range" />
    </div>
    <form-input
      position="left"
      :title="$t('Job.new.perks.title')"
      :tooltip="$t('Job.new.perks.tooltip')"
    />
    <vue-editor
      class="mb-6"
      placeholder="Descreva melhor a sua vaga"
      :editorToolbar="$t('Quill.defaultToolbar')"
      v-model="perks"
    />
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';

export default {
  name: 'NewJob4',
  components: {
    VueEditor,
  },
  data() {
    return {
      perks: '',
      salary: {
        currency: '',
        min: '',
        max: '',
        timeFrame: '',
        range: false,
      },
      range: false,
    };
  },
  watch: {
    range() {
      this.$emit('salary-range', this.range);
    },
  },
};
</script>

<style></style>
