<template>
  <v-list nav dense>
    <v-list-item v-for="(item, i) in items" :key="i" @click="item.goTo">
      <h5>{{ item.text }}</h5>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'MobileDrawer',
  props: {
    items: Array,
  },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style></style>
