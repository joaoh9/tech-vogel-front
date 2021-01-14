<template>
  <div>
    <form-input :title="$t('job.new.salary.title')" required />
    <div class="d-flex justify-space-between">
      <v-select
        v-model="salary.currency"
        @change="$emit('salary-currency', salary.currency)"
        :rules="[rules.required(salary.currency)]"
        :label="$t('job.new.labels.paymentCurrency')"
        outlined
        :items="$t('enums.currencies')"
        class="mr-2"
      />
      <v-select
        v-model="salary.timeFrame"
        @change="$emit('salary-time-frame', salary.timeFrame)"
        :rules="[rules.required(salary.timeFrame)]"
        :label="$t('job.new.labels.timeFrame')"
        outlined
        :items="$t('enums.payCheckTimeFrame')"
        class="mr-2"
      />
      <v-text-field
        :prefix="getPrefix()"
        @input="checkInput('salary-min', salary.min)"
        v-model="salary.min"
        :rules="[rules.isNumber(salary.min), rules.required(salary.min)]"
        :label="range ? $t('common.from') : $t('job.new.price')"
        outlined
        v-mask="minMask"
        :class="range ? 'mr-2' : ''"
      />

      <v-text-field
        @input="checkInput('salary-max', salary.max)"
        v-model="salary.max"
        :prefix="getPrefix()"
        :rules="[rules.isNumber(salary.max)]"
        :label="range ? $t('common.to') : $t('job.new.price')"
        :v-mask="maxMask"
        outlined
        v-if="range"
      />
    </div>
    <div class="d-flex justify-start mt-n6 mb-6">
      <v-checkbox v-model="range" :label="$t('job.new.salaryRange')" />
    </div>
    <form-input :title="$t('job.new.perks.title')" />
    <vue-editor
      class="mb-6"
      :placeholder="$t('job.new.perks.placeholder')"
      :editorToolbar="$t('quill.defaultToolbar')"
      v-model="perks"
      :rules="rules.max(20000, perks)"
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
    this.perks = this.job.perks;
    if (this.job.salary) {
      this.salary = this.job.salary;
      this.salary.min = this.job.salary.min;
      this.salary.max = this.job.salary.max;
      this.salary.range = false;
    }
  },
  data() {
    return {
      perks: '',
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
      variable = variable.replace(/,/g, '');
      if (this.rules.isNumber(variable) === true) {
        this.$emit(emitValue, parseFloat(variable));
      }
    },
  },
  watch: {
    range() {
      this.$emit('salary-range', this.range);
    },
    perks() {
      this.$emit('perks', this.perks);
    },
    'salary.min'() {
      if (!this.range) {
        this.salary.max = this.salary.min;
      }
    },
  },
};
</script>

<style>
.ql-editor {
  min-height: 300px !important;
}
</style>
