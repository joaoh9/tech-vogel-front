<template>
  <v-btn
    v-if="type === 'disabled'"
    disabled
    :block="block"
    @click="$emit('click')"
    :large="!xl"
    :x-large="xl"
    :data-cy="dataCy"
    :min-width="minwidth"
    :max-width="maxwidth"
    class="button-text px-7"
  >
    {{ label }}
  </v-btn>

  <v-btn
    v-else-if="type === 'primary-outlined-rounded'"
    outlined
    rounded
    color="primary"
    class="round button-text"
  >
    {{ label }}
  </v-btn>

  <v-btn
    :large="!xl"
    :x-large="xl"
    v-else
    :data-cy="dataCy"
    @click="$emit('click')"
    :color="getColor()"
    :outlined="getOutline()"
    :elevation="getElevation()"
    :text="getText()"
    :class="`button-text px-7  ${textColor ? `${textColor}--text` : ''} ${buttonClass}`"
    :to="to"
    :block="block"
    :dark="dark"
    :href="href"
    :min-width="minwidth"
    :max-width="maxwidth"
    :loading="loading"
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
    block: Boolean,
    href: String,
    textColor: {
      type: String,
      default: undefined,
    },
    text: {
      type: Boolean,
      default: false,
    },
    maxwidth: [ String, Number ],
    minwidth: [ String, Number ],
    dataCy: String,
    loading: Boolean,
    elevation: [ String, Number ],
    xl: Boolean,
  },
  methods: {
    getElevation() {
      if (this.elevation) {
        return this.elevation;
      }
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
          return false;
        case 'secondary':
          return true;
        case 'outlined':
        case 'outline':
          return true;
        default:
          return false;
      }
    },
    getText() {
      switch (this.type) {
        case 'text':
          return true;
        default:
          return this.text || false;
      }
    },
  },
};
</script>

<style>
.round {
  border-radius: 28px !important;
}
</style>
