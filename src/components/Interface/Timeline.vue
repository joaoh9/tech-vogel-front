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
      <v-dialog v-model="display[index]" max-width="600px">
        <template v-slot:activator=" { on } ">
          <v-card
            v-on="on"
            outlined flat>
            <slot name='card' v-bind:item="item">
            </slot>
          </v-card>
        </template>
        <v-card flat>
          <slot name='dialog' v-bind:item="item">
          </slot>
        </v-card>
      </v-dialog>
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
      display: this.items.map(() => false),
    };
  },
}
</script>
