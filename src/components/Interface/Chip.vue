<template>
  <div :style="bg" class="chip-bg chip mr-1">
    <div class="chip-body">
      <div class="avatar">
        <img
          class="img-fluid"
          :src="technologyLogo"
          :alt="alt"
          height="20"
          width="20"
          style="background-color: white"
        />
      </div>
      <span class="chip-text text-bold-500">{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chip',
  props: {
    alt: String,
    technologyLogo: String,
    text: String,
    color: String,
  },
  computed: {
    bg() {
      return {
        'background-color': this.color,
        opacity: '90%',
      };
    },
  },
};
</script>

<style scoped></style>
