<template>
  <v-btn
    v-if="type === 'primary'"
    @click="$emit('click')"
    color="primary"
    class="px-4"
    large
    elevation="0"
    :to="to"
    :dark="dark"
  >
    {{ label }}
  </v-btn>
  <v-btn
    v-else-if="type === 'secondary'"
    @click="$emit('click')"
    color="secondary"
    outlined
    class="px-4"
    large
    elevation="0"
    :to="to"
    :dark="dark"
  >
    {{ label }}
  </v-btn>
  <v-btn
    v-else-if="type === 'outlined'"
    @click="$emit('click')"
    :color="color"
    :class="`px-4 ${text ? `${text}--text` : ''}`"
    outlined
    class="px-4"
    large
    elevation="0"
    :to="to"
    :dark="dark"
  >
    {{ label }}
  </v-btn>
  <v-btn
    v-else-if="type === 'filled'"
    @click="$emit('click')"
    :color="color"
    :class="`px-4 ${text ? `${text}--text` : ''}`"
    large
    elevation="0"
    :to="to"
    :dark="dark"
  >
    {{ label }}
  </v-btn>
  <v-btn
    v-else-if="type === 'shadow'"
    @click="$emit('click')"
    :color="color"
    :class="`px-4 ${text ? `${text}--text` : ''}`"
    large
    elevation="6"
    :to="to"
    :dark="dark"
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
    color: String,
    text: String,
  },
};
</script>

<style></style>
