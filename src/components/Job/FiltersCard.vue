<template>
  <div>
    <v-card class="ma-3 ml-12" min-width="350" max-width="400" tile>
      <v-list shaped>
        <v-expansion-panels accordion multiple flat hover>
          <v-expansion-panel v-for="(item, index) in items" :key="index">
            <v-expansion-panel-header expand-icon="mdi-menu-down">{{item.header}}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <div v-if="item.type === 'checkbox'">
                <v-checkbox
                  :class="i === 0 ? 'mt-1 mb-n6' : 'mb-n6'"
                  dense
                  v-for="(check, i) in item.content"
                  :key="i"
                  :label="check"
                ></v-checkbox>
              </div>
              <v-radio-group v-model="item.data" v-else-if="item.type === 'radio'">
                <v-radio class="mb-2" v-for="(radio, j) in item.content" :key="j" :label="radio"></v-radio>
              </v-radio-group>
              <v-row v-else-if="item.type =='salary'">
                <v-col>
                  <v-text-field label="min" dense v-model="item.data[0]"></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field label="max" dense v-model="item.data[1]"></v-text-field>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'FiltersCard',
  data() {
    return {
      items: [
        {
          header: 'Type of employment',
          content: this.$t('data.jobType'),
          type: 'checkbox',
        },
        {
          header: 'Entry Level',
          content: this.$t('data.experienceLevel'),
          type: 'checkbox',
          data: [''],
        },
        {
          header: 'Language',
          content: this.$t('data.differentLanguages').map((v) => v.label),
          type: 'checkbox',
        },
        {
          header: 'Salary',
          content: 'mdi-briefcase-outline',
          type: 'salary',
          min: 10000,
          max: 1000000,
          data: [10000, 500000],
        },
        {
          header: 'Industry',
          content: 'mdi-credit-card-outline',
        },
      ],
    };
  },
  filters: {
    currency(value) {
      console.log(value);
      const f = parseFloat(value / 1000);
      console.log('f', f);
      const g = f.toFixed(1);
      console.log('g', g);
      const h = g.toString();
      console.log('h', h);

      return g;
    },
  },
};
</script>

<style>
</style>
