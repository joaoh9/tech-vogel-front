<template>
  <div class="pricing-card">
    <v-card>
      <div>
        <v-chip color="primary">{{ name }}</v-chip>
      </div>
      <v-img :src="img" max-height="100px" contain></v-img>
      <p class="text-center m-2">{{ description }}</p>
      <p class="text-center m-3">{{ price }}</p>
      <v-btn color="primary" rounded raised elevation="8">Choose</v-btn>
    </v-card>
  </div>
</template>

<script>
import img1 from '../../assets/bird1.png';

export default {
  name: 'PricingCard',
  data() {
    return {
      name: 'Bird',
      img: img1,
      description: '5 job proposals',
      price: '$ 150 / year',
    };
  },
};
</script>

<style>
.pricing-card {
  max-width: 300px;
}
</style>
