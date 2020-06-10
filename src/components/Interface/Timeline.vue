<template>
  <v-timeline>
    <v-timeline-item
      v-for="(item, index) in items"
      v-bind:key="index"
      fill-dot
      small
    >
      <template v-slot:opposite>
        <slot name='opposite-side' v-bind:item="item"></slot>
      </template>
      <v-card outlined flat>
        <slot name='card' v-bind:item="item">
        </slot>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  name: 'Timeline',
  props: {
    items: Array,
  },
  data() {
    return {
    };
  },
}
</script>
