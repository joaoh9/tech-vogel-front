<template>
  <v-dialog v-model="display" max-width="600px">
    <template v-slot:activator=" { on } ">
      <div
        v-on="on"
        class="my-2"
      >
        <slot name='card' v-bind:item="item">
        </slot>
      </div>
    </template>
    <v-card flat>
      <slot name='dialog' v-bind:item="item">
      </slot>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'DialogCard',
  props: {
    value: Object,
  },
  components: {
  },
  data() {
    return {
      item: this.value,
      display: false,
    };
  },
};
</script>
