<template>
  <div class="mb-5">
    <div>
      <div
        v-for="(item, index) in items"
        v-bind:key="item._id"
        v-bind:style="{ display: currentItem == index ? 'block' : 'none' }"
      >
        <component
          v-bind:is="component"
          v-on:update-item="
            e => {
              const wrapperId = items[index]._id;
              items[index] = e;
              items[index]._id = wrapperId;
              $emit('update-items', items);
            }
          "
        />
        <div class="d-flex justify-end flex-grow-1">
          <v-btn icon color="secondary" @click="removeItem(index)">
            <v-icon>fa-trash</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
    <v-row align="center">
      <v-col cols="3">
        <div class="d-flex justify-start">
          <v-btn
            icon
            color="secondary"
            @click="currentItem -= 1"
            v-bind:style="{ display: itemsLen && currentItem !== 0 ? 'block' : 'none' }"
          >
            <v-icon color="dark" large>fa-arrow-alt-circle-left</v-icon>
          </v-btn>
        </div>
      </v-col>
      <v-col cols="6">
        <div class="d-flex justify-center">
          <g-btn
            :label="$t('common.addNewInput')"
            type="filled"
            color="dark"
            outlined
            @click="newItem"
          />
        </div>
      </v-col>
      <v-col cols="3">
        <div class="d-flex justify-end">
          <v-btn
            icon
            color="secondary"
            @click="currentItem += 1"
            v-bind:style="{ display: itemsLen && currentItem + 1 !== itemsLen ? 'block' : 'none' }"
          >
            <v-icon large>fa-arrow-alt-circle-right</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  name: 'Wrapper',
  components: {},
  props: ['component'],
  data() {
    return {
      items: [{ _id: 0 }],
      currentItem: 0,
      sequence: 1,
    };
  },
  computed: {
    itemsLen() {
      return (this.items || []).length;
    },
  },
  methods: {
    newItem() {
      this.items.push({ _id: this.sequence++ });
      this.currentItem = this.itemsLen - 1;
    },
    updateCurrentItem(step) {
      this.currentItem = step - 1;
    },
    removeItem(index) {
      this.items.splice(index, 1);
      if (index) this.currentItem -= 1;
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

</style>
