<template>
  <div>
    <form-input
      position="left"
      :title="$t('Job.new.salary.title')"
      :tooltip="$t('Job.new.salary.tooltip')"
    />
    <div class="d-flex justify-space-between">
      <v-select
        v-model="salary.currency"
        @change="$emit('salary-currency', salary.currency)"
        label="Currency"
        title="Payment Currency"
        outlined
        :items="$t('Data.currencies')"
        class="mr-2"
      />
      <v-autocomplete
        v-model="salary.timeFrame"
        @change="$emit('salary-time-frame', salary.timeFrame)"
        label="Time Frame"
        title="Time Frame"
        outlined
        :items="$t('Data.payCheckTimeFrame')"
        class="mr-2"
      />
      <v-text-field
        :prefix="getPrefix()"
        @input="$emit('salary-min', parseFloat(salary.min))"
        v-model="salary.min"
        :rules="[rules.isNumber(salary.min)]"
        :label="range ? 'From' : 'Price'"
        :title="range ? 'From' : 'Price'"
        outlined
        :class="range ? 'mr-2' : ''"
      />
      <v-text-field
        @input="$emit('salary-max', parseFloat(salary.max))"
        v-model="salary.max"
        :prefix="getPrefix()"
        :rules="[rules.isNumber(salary.max)]"
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
      :placeholder="$t('Job.new.perks.placeholder')"
      :editorToolbar="$t('Quill.defaultToolbar')"
      v-model="benefits"
    />
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';
import RulesHelper from 'Helpers/rules';

export default {
  name: 'NewJob4',
  components: {
    VueEditor,
  },
  mounted() {
    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
  },
  data() {
    return {
      benefits: '',
      salary: {
        currency: 'USD',
        min: '',
        max: '',
        timeFrame: '',
        range: false,
      },
      rules: {
        isNumber: () => true,
      },
      range: false,
    };
  },
  methods: {
    getPriceMask(value) {
      switch (this.salary.currency) {
        case 'USD':
          return this.$n(value, 'currency', 'en-us');
        case 'GBP':
          return this.$n(value, 'currency', 'en-gb');
        case 'EUR':
          return this.$n(value, 'currency', 'ge');
        case 'BRL':
          return this.$n(value, 'currency', 'pt-br');
      }
    },
    getPrefix() {
      switch (this.salary.currency) {
        case 'USD':
          return '$';
        case 'GBP':
          return '£';
        case 'EUR':
          return '€';
        case 'BRL':
          return 'R$';
      }
    },
  },
  watch: {
    range() {
      this.$emit('salary-range', this.range);
    },
    benefits() {
      this.$emit('benefits', this.benefits);
    },
  },
};
</script>

<style></style>
