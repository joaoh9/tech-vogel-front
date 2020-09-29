<template>
  <v-btn
    @click="$emit('click')"
    large
    :color="getColor()"
    :outlined="getOutline()"
    :elevation="getElevation()"
    :text="getText()"
    :class="`px-4 ${textColor ? `${textColor}--text` : ''} ${buttonClass}`"
    :to="to"
    :block="block"
    :dark="dark"
    :href="href"
    :disabled="disabled"
    max-width="maxwidth"
  >
    {{ label }}
  </v-btn>
</template>

<script>
export default {
  name: 'g-btn',
  props: {
    label: String,
    to: String,
    buttonClass: String,
    type: String,
    dark: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    color: String,
    text: String,
    block: Boolean,
    href: String,
    textColor: {
      type: String,
      default: undefined,
    },
    maxwidth: [ String, Number ],
  },
  methods: {
    getElevation() {
      switch (this.type) {
        case 'primary':
        case 'secondary':
        case 'filled':
        case 'outlined':
          return 0;
        case 'shadow':
          return 6;
      }
    },
    getColor() {
      switch (this.type) {
        case 'primary':
          return 'primary';
        case 'secondary':
          return 'secondary';
        default:
          return this.color;
      }
    },
    getOutline() {
      switch (this.type) {
        case 'primary':
        case 'secondary':
          return false;
        default:
          return true;
      }
    },
    getText() {
      switch (this.type) {
        case 'text':
          return true;
        default:
          return false;
      }
    },
  },
};
</script>

<style></style>
