<template>
  <div>
    <v-tooltip v-if="tooltip" :left="left" :right="right" :top="top" :bottom="bottom">
      <template v-slot:activator="{ on, attrs }">
        <h6 v-on="on" v-bind="attrs" class="h6 d-flex">
          {{ title }}
          <span v-if="required" class="color-primary ml-1">*</span>
        </h6>
        <span class="color-cinza-lighten-1 caption">{{ description }}</span>
      </template>
      <span>{{ tooltip }}</span>
    </v-tooltip>
    <div v-else class="mb-3">
      <h6 class="h6 d-flex">
        {{ title }}
        <span v-if="required" class="color-primary ml-1">*</span>
      </h6>
      <span class="color-cinza-lighten-1 caption">{{ description }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'form-input',
  props: {
    position: String,
    title: String,
    tooltip: String,
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
