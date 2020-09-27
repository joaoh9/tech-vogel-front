<template>
  <div class="mb-5">
    <div>
      <div
        v-for="(item, index) in items"
        v-bind:key="index"
        v-bind:style="{ display: currentItem == index ? 'block' : 'none' }"
      >
        <component
          v-bind:is="component"
          v-on:update-item="
            e => {
              items[index] = e;
              $emit('update-items', items);
            }
          "
        ></component>
      </div>
    </div>
    <div class="d-flex justify-space-between">
      <v-btn
        icon
        color="secondary"
        v-on:click="currentItem -= 1"
        v-bind:style="{ display: currentItem == 0 ? 'none' : 'block' }"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        icon
        color="secondary"
        v-on:click="currentItem += 1"
        v-bind:style="{ display: currentItem + 1 == itemsLen ? 'none' : 'block' }"
      >
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </div>
    <div class="d-flex justify-center">

    <v-btn outlined color="secondary" v-on:click="newItem">
      Add new
    </v-btn>
    </div>
  </div>
</template>

<script>
import 'Public/css/card.css';

export default {
  name: 'Wrapper',
  components: {},
  props: ['component'],
  data() {
    return {
      items: [{}],
      currentItem: 0,
    };
  },
  computed: {
    itemsLen() {
      return this.items.length;
    },
  },
  methods: {
    newItem() {
      this.items.push({});
      this.currentItem = this.itemsLen - 1;
    },
    updateCurrentItem(step) {
      this.currentItem = step - 1;
    },
  },
};
</script>

<style>
.v-text-field {
  width: 100%;
}

.ql-container {
  font-family: Open Sans !important;
}

.sidebar {
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  top: 75px;
}
</style>
