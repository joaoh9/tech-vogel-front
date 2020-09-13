<template>
  <div>
    <h2 class="mb-12">{{ $t('Job.new.page4.title') }}</h2>
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
    <v-row class="mt-7">
      <v-col>
        <v-btn elevation="0" @click="$emit('back')" :class="getABTestClass('btn-back')" large>
          {{ $t('Common.back') }}
        </v-btn>
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="text-right">
        <v-btn elevation="0" @click="$emit('advance')" large color="primary">
          {{ $t('Common.next') }}
        </v-btn>
      </v-col>
    </v-row>
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
  methods: {
    getABTestClass(test) {
      return 'secondary-ligten-2 v-btn--outlined';
      /*
      const random = Math.random();
      switch (test) {
        case 'back-btn':
          if (random < 1 / 6) {
            return 'secondary-ligten-2 v-btn--outlined';
          } else if (random < 2 / 6) {
            return 'secondary-ligten-2';
          } else if (random < 2 / 3) {
            return 'cinza-lighten-1 v-btn--outlined';
          } else {
            return 'v-btn--outlined primary';
          }
      }
      */
    },
  },
  watch: {
    range() {
      this.$emit('salary-range', this.range);
    },
  },
};
</script>

<style></style>
