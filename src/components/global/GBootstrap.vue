<template>
  <div class="container-fluid mx-12">
    <v-row>
      <v-col v-if="firstCol.condition || true" :md="firstCol.md" :cols="firstCol.cols">
        <slot name="first-col" />
      </v-col>
      <v-col v-if="secondCol.condition || true" :md="secondCol.md" :cols="secondCol.cols">
        <slot name="second-col" />
      </v-col>
      <v-col v-if="thirdCol" :md="thirdCol.md" :cols="thirdCol.cold">
        <slot name="third-col" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'g-bootstrap',
  props: {
    // sm
    // md
    // lg
    // xl
    // cols
    // condition
    firstCol: {
      type: Object,
      default: null,
    },
    secondCol: {
      type: Object,
      default: null,
    },
    thirdCol: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style></style>
