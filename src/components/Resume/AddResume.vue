<template>
  <div class="container">
    <v-card
      tile
    >
      <v-card-title>
        Resumé
      </v-card-title>
      <v-card-text>
        <v-form>
          <div id="full-name">
            <v-row>
              <v-col cols=3>
                <v-subheader>Full name</v-subheader>
              </v-col>
              <v-col cols=9>
                <v-text-field
                    required
                    tile
                    name="fullName"
                    label="Your name"
                ></v-text-field>
              </v-col>
            </v-row>
          </div>
          <div id="information">
            <v-row>
              <v-col cols=3>
                <v-subheader>Information</v-subheader>
              </v-col>
              <v-col cols=9>
                <v-combobox
                    required
                    tile
                    name="gender"
                    label="Gender"
                    :items="genders"
                ></v-combobox>
                <DatePicker
                  name="Birth date"
                />
              </v-col>
            </v-row>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import bird1 from '../../assets/bird1.png';
import bird2 from '../../assets/bird2.png';
import bird3 from '../../assets/bird3.png';
import bird4 from '../../assets/bird4.png';
import DatePicker from '../Interface/DatePicker.vue';

export default {
  name: 'AddResume',
  components: {
    DatePicker,
  },
  data() {
    return {
      bird1,
      bird2,
      bird3,
      bird4,
      genders: [
        'Male',
        'Female',
        'Other',
      ],
    };
  },
};
</script>

<style>
</style>
