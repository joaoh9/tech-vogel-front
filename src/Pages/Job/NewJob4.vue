<template>
  <div>
    <h2 class="mb-12">The Specifics</h2>

    <v-tooltip left>
      <template v-slot:activator="{ on, attrs }">
        <p v-on="on" v-bind="attrs" class="body-1">{{ $t('Job.new._4.salary') }}</p>
      </template>
      <span>{{ $t('Job.new._4.tooltips.salary') }}</span>
    </v-tooltip>
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
          :items="['Monthly', 'Yearly', 'Hourly']"
        ></v-autocomplete>
      </v-col>
      <v-col>
        <v-text-field
          v-model="salary.min"
          @click="$emit('salary-min', salary.min)"
          :label="salary.range ? 'From' : 'Price'"
          :title="salary.range ? 'From' : 'Price'"
          outlined
        ></v-text-field>
      </v-col>
      <v-col v-if="salary.range">
        <v-text-field
          v-model="salary.max"
          @click="$emit('salary-max', salary.max)"
          :label="salary.range ? 'To' : 'Price'"
          :title="salary.range ? 'To' : 'Price'"
          outlined
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="mt-n12">
      <v-col class="text-left">
        <v-checkbox
          @click="
            $emit('salary-range', salary.range);
            salary.range = !salary.range;
          "
          v-model="salary.range"
          label="Set salary range"
        ></v-checkbox>
      </v-col>
    </v-row>
    <v-tooltip left>
      <template v-slot:activator="{ on, attrs }">
        <p v-on="on" v-bind="attrs" class="body-1">{{ $t('Job.new._4.perks') }}</p>
      </template>
      <span>{{ $t('Job.new._4.tooltips.perks') }}</span>
    </v-tooltip>
    <v-textarea v-model="perks" @input="$emit('perks', perks)" outlined></v-textarea>
    <v-row>
      <v-col>
        <v-btn elevation="0" @click="$emit('back')" :class="getABTestClass('btn-back')" large>{{
          $t('Common.back')
        }}</v-btn>
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
export default {
  name: 'NewJob4',
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
    };
  },
  methods: {
    getABTestClass(test) {
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
    },
  },
};
</script>

<style></style>
