<template>
  <g-card :lg="300" :md="300" :sm="300" :maxlg="300" :maxmd="300" class="ma-6">
    <template v-slot:card-content>
      <div class="d-flex justify-space-between pa-2">
        <v-img height="120" contain :src="img" />
        <h5 class="h5-bold">{{ text }}</h5>
      </div>
    </template>
  </g-card>
</template>

<script>
export default {
  name: 'DashboardCard',
  props: {
    text: String,
    img: String,
  },
};
</script>

<style></style>
