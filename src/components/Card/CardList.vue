<template>
  <div class="my-2 py-1">
    <v-card
      v-for="(item, index) in items"
      v-bind:key="index"
      :elevation="elevation || 4"
      tile
      :outlined="outlined"
      :flat="flat"
      class="my-2"
    >
      <v-btn
        v-if="editMode"
        class="p-0 float-right"
        icon
        @click="remove(index)"
      >
        <i class="fas fa-times"></i>
      </v-btn>
      <slot v-bind:item="item"/>
    </v-card>
    <v-btn
      v-if="editMode"
      class="p-0"
      color="primary"
      rounded
      icon
      @click="add()"
    >
      <i class="fas fa-plus"></i>
    </v-btn>
  </div>
</template>

<script>
// console.log(this.items);
export default {
  name: 'CardList',
  props: {
    value: Array,
    editMode: Boolean,
    flat: Boolean,
    outlined: Boolean,
    elevation: String,
  },
  data() {
    return {
      items: this.value || [],
      counter: 0,
    };
  },
  methods: {
    add() {
      this.items.push({
        id: this.counter,
      });
      this.counter += 1;
    },
    remove(index) {
      const items = this.items.splice(index, 1);
      this.$emit('input', items);
    },
  },
};
</script>
