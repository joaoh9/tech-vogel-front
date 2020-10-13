<template>
  <div class="d-flex flex-column">
    <h6 class="color-primary">{{ title }}</h6>
    <p
      @click="goToLink(item)"
      v-for="(item, i) in items"
      :key="i"
      class="color-ligth cursor-pointer"
    >
      {{ item.text }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'FooterLinks',
  props: {
    items: Array,
    title: String,
  },
  methods: {
    goToLink(item) {
      console.log(item);
      this.$router.push({ path: item.to });
    },
  },
};
</script>

<style></style>
