<template>
  <div>
    <sub-1 v-if="type === 'sub-1'" color="dark" flex>
      {{ title }}
      <span v-if="required" class="color-primary ml-1">*</span>
    </sub-1>
    <h6 v-else-if="type === 'h6'" flex class="mb-1">
      {{ title }}
      <span v-if="required" class="color-primary ml-1">*</span>
    </h6>
    <div class="mb-3">
      <capt-1>{{ description }}</capt-1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'form-input',
  props: {
    title: String,
    description: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'sub-1',
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
