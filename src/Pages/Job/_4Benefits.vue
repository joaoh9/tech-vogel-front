<template>
  <div>
    <form-input
      position="left"
      :title="$t('Job.new.salary.title')"
      :tooltip="$t('Job.new.salary.tooltip')"
    />
    <v-row>
      <v-col>
        <v-autocomplete
          v-model="salary.currency"
          @click="$emit('salary-currency', salary.currency)"
          label="Currency"
          title="Payment Currency"
          outlined
          :items="['USD', 'GBP', 'EUR']"
        ></v-autocomplete>
      </v-col>
      <v-col>
        <v-autocomplete
          v-model="salary.timeFrame"
          @click="$emit('salary-time-frame', salary.timeFrame)"
          label="Time Frame"
          title="Time Frame"
          outlined
          :items="['Yearly', 'Monthly', 'Hourly']"
        ></v-autocomplete>
      </v-col>
      <v-col>
        <v-text-field
          v-model="salary.min"
          @click="$emit('salary-min', salary.min)"
          :label="range ? 'From' : 'Price'"
          :title="range ? 'From' : 'Price'"
          outlined
        ></v-text-field>
      </v-col>
      <v-col v-if="range">
        <v-text-field
          v-model="salary.max"
          @click="$emit('salary-max', salary.max)"
          :label="range ? 'To' : 'Price'"
          :title="range ? 'To' : 'Price'"
          outlined
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="mt-n12">
      <v-col class="text-left">
        <v-checkbox v-model="range" label="Set salary range"></v-checkbox>
      </v-col>
    </v-row>
    <form-input
      position="left"
      :title="$t('Job.new.perks.title')"
      :tooltip="$t('Job.new.perks.tooltip')"
    />
    <vue-editor
      placeholder="Descreva melhor a sua vaga"
      :editorToolbar="$t('Quill.defaultToolbar')"
      v-model="perks"
    ></vue-editor>
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
