<template>
  <div>
    <form-input :title="$t('job.new.salary.title')" required />
    <div class="d-flex justify-space-between">
      <v-select
        v-model="salary.currency"
        @change="$emit('salary-currency', salary.currency)"
        :rules="[rules.required(salary.currency)]"
        placeholder="Currency"
        label="Payment currency"
        title="Payment currency"
        outlined
        :items="$t('enums.currencies')"
        class="mr-2"
      />
      <v-select
        v-model="salary.timeFrame"
        @change="$emit('salary-time-frame', salary.timeFrame)"
        :rules="[rules.required(salary.timeFrame)]"
        label="Time frame"
        outlined
        :items="$t('enums.payCheckTimeFrame')"
        class="mr-2"
      />
      <v-text-field
        :prefix="getPrefix()"
        @input="checkInput('salary-min', salary.min)"
        v-model="salary.min"
        :rules="[rules.isNumber(salary.min), rules.required(salary.min)]"
        :label="range ? 'From' : 'Price'"
        :title="range ? 'From' : 'Price'"
        outlined
        v-mask="minMask"
        :class="range ? 'mr-2' : ''"
      />

      <v-text-field
        @input="checkInput('salary-max', salary.max)"
        v-model="salary.max"
        :prefix="getPrefix()"
        :rules="[rules.isNumber(salary.max)]"
        :label="range ? 'To' : 'Price'"
        :title="range ? 'To' : 'Price'"
        :v-mask="maxMask"
        outlined
        v-if="range"
      />
    </div>
    <div class="d-flex justify-start mt-n6 mb-6">
      <v-checkbox v-model="range" label="Set salary range" />
    </div>
    <form-input :title="$t('job.new.perks.title')" />
    <vue-editor
      class="mb-6"
      :placeholder="$t('job.new.perks.placeholder')"
      :editorToolbar="$t('quill.defaultToolbar')"
      v-model="benefits"
      :rules="rules.max(20000, benefits)"
    />
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';
import RulesHelper from 'Helpers/rules';

import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const currencyMask = createNumberMask({
  prefix: '',
  allowDecimal: true,
  decimalLimit: 2,
  decimalSymbol: '.',
  thousandsSeparatorSymbol: ',',
  includeThousandsSeparator: true,
  allowNegative: false,
});

export default {
  name: 'NewJob4',
  props: {
    job: Object,
  },
  components: {
    VueEditor,
  },
  mounted() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
    this.benefits = this.job.benefits;
    if (this.job.salary) {
      this.salary = this.job.salary;
      this.salary.min = this.job.salary.min;
      this.salary.max = this.job.salary.max;
      this.salary.range = false;
    }
  },
  data() {
    return {
      benefits: '',
      salary: {
        currency: 'USD',
        min: '',
        max: '',
        timeFrame: 'MONTHS',
        range: false,
      },
      rules: {
        required: () => true,
        isNumber: () => true,
        max: () => true,
      },
      range: false,
      generatingMask: false,
      maxMask: currencyMask,
      minMask: currencyMask,
    };
  },
  methods: {
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
    checkInput(emitValue, variable) {
      variable = variable.replace(/,/g, '')
      if (this.rules.isNumber(variable) === true) {
        this.$emit(emitValue, parseFloat(variable));
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
    'salary.min'() {
      if (!this.range) {
        this.salary.max = this.salary.min;
      }
    },
  },
};
</script>

<style></style>
