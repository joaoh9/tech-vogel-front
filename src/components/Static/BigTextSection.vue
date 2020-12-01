<template>
  <div class="mx-16 mb-12">
    <div class="d-flex align-center">
      <h5 class="color-primary mr-4">{{ name }}</h5>
      <h5 class="color-black text-uppercase">{{ text.title }}</h5>
    </div>
    <div class="mt-4">
      <p v-html="paragraphContent"></p>
    </div>
    <v-divider v-if="divider" class="mt-14 orange-color"></v-divider>
  </div>
</template>

<script>

export default {
  name: 'staticSection',
  props: {
    name: String,
    text: Object,
    divider: Boolean,
  },
  data() {
    return {
      paragraphContent: `<p>${this.text.description}</p>`,
    };
  },
};

</script>

<style>
.container {
  width: 90vw;
  max-width: 1100px;
  margin: 0 auto;
}
.orange-color {
  background: #ff9200;
}
</style>
