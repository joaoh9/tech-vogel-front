<template>
  <div class="d-flex flex-column">
    <h6 class="color-primary">{{ title }}</h6>
    <p
      @click="newWindow ? goToNewWindow(item) : goToLink(item)"
      v-for="(item, i) in items"
      :key="i"
      class="color-light cursor-pointer"
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
    newWindow: Boolean,
  },
  methods: {
    goToLink(item) {
      this.$router.push({ path: item.to });
    },
    goToNewWindow(item) {
      window.open(item.link, '_blank');
    },
  },
};

</script>

<style></style>
