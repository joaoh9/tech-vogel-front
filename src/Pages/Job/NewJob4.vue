<template>
  <div>
    <h2 class="mb-12">The Specifics</h2>

    <p class="body-1">Salary</p>
    <v-row>
      <v-col>
        <v-autocomplete
          v-model="salary.currency"
          @click="$emit('salaryCurrency',  salary.currency)"
          label="Currency"
          title="Payment Currency"
          outlined
          :items="['USD', 'GBP', 'EUR']"
        ></v-autocomplete>
      </v-col>
      <v-col>
        <v-autocomplete
          v-model="salary.timeFrame"
          @click="$emit('salaryTimeFrame', salary.timeFrame)"
          label="Time Frame"
          title="Time Frame"
          outlined
          :items="['Monthly', 'Yearly', 'Hourly']"
        ></v-autocomplete>
      </v-col>
      <v-col>
        <v-text-field
          v-model="salary.min"
          @click="$emit('salaryMin', salary.min)"
          :label="salary.range ? 'From' : 'Price'"
          :title="salary.range ? 'From' : 'Price'"
          outlined
        ></v-text-field>
      </v-col>
      <v-col v-if="salary.range">
        <v-text-field
          v-model="salary.max"
          @click="$emit('salaryMax', salary.max)"
          :label="salary.range ? 'To' : 'Price'"
          :title="salary.range ? 'To' : 'Price'"
          outlined
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="mt-n12">
      <v-col class="text-left">
        <v-checkbox
          @click="$emit('salaryRange', salary.range); salary.range = !salary.range"
          v-model="salary.range"
          label="Set salary range"
        ></v-checkbox>
      </v-col>
    </v-row>

    <p class="body-1">Perks and Benefits</p>
    <v-textarea v-model="perks" @input="$emit('perks', perks)" outlined></v-textarea>
    <v-row>
      <v-col>
        <v-btn
          elevation="0"
          @click="$emit('back')"
          large
          color="secondary-lighten-2"
        >{{$t('Common.back')}}</v-btn>
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="text-right">
        <v-btn elevation="0" @click="$emit('advance')" large color="primary">{{$t('Common.next')}}</v-btn>
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
};
</script>

<style></style>
