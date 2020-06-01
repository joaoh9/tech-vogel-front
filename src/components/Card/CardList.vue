<template>
  <div class="my-2 py-1">
    <v-card
      v-for="(item, index) in items"
      v-bind:key="item.id"
      tile
      outlined class="my-2"
    >
      <v-btn
        class="p-0 float-right"
        icon
        @click="remove(index)"
      >
        <i class="fas fa-times"></i>
      </v-btn>
      <slot :item="item" :index="index" />
    </v-card>
    <v-btn
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
  // props: [
  //   'items',
  // ],
  data() {
    return {
      items: [],
      counter: 0,
    };
  },
  methods: {
    add() {
      this.items = this.items || [];
      this.items.push({
        id: this.counter,
      });
      this.counter += 1;
      console.log(this.items);
    },
    remove(index) {
      const items = this.items.splice(index, 1);
      this.$emit('input', items);
    },
  },
};
</script>
