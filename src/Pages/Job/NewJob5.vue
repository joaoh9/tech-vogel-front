<template>
  <div>
    <h2 class="mb-12">Pick header image</h2>
    <v-card class="d-flex flex-wrap" flat tile>
      <v-radio-group v-model="select">
        <v-row :key="index" v-for="(image, index) in images">
          <v-radio class="pr-4"></v-radio>
          <v-img
            @click="select = index"
            height="180"
            style="opacity:90%; cursor: pointer"
            width="80%"
            class="mb-4"
            :src="image"
          />
        </v-row>
      </v-radio-group>
    </v-card>
    <v-row>
      <v-col>
        <v-btn elevation="0" @click="$emit('back')" large :class="getABTestClass('btn-back')">
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
import Header1 from 'Assets/office-wp-1.jpg';
import Header2 from 'Assets/office-wp-2.jpg';
import Header3 from 'Assets/office-wp-3.jpg';
export default {
  name: 'NewJob5',
  data() {
    return {
      images: [ Header1, Header2, Header3 ],
      select: false,
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
