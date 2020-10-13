<template>
  <div>
    <sub-1 flex :class="description ? 'mb-0' : 'mb-2'">
      {{ title }}
      <span v-if="required" class="color-primary ml-1">*</span>
    </sub-1>
    <span class="color-cinza-lighten-1 caption-1 mt-1 mb-2" v-if="description">{{ description }}</span>
  </div>
</template>

<script>
export default {
  name: 'form-input',
  props: {
    title: String,
    description: String,
    required: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.getPosition();
  },
  data() {
    return {
      left: false,
      right: false,
      top: false,
      bottom: false,
    };
  },
  methods: {
    getPosition() {
      switch (this.position) {
        case 'left':
          this.left = true;
          break;
        case 'right':
          this.right = true;
          break;
        case 'top':
          this.top = true;
          break;
        case 'bottom':
          this.bottom = true;
          break;
      }
    },
  },
};
</script>

<style></style>
