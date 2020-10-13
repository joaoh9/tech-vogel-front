<template>
  <div class="mb-5">
    <div>
      <div v-for="(item, index) in items" v-bind:key="item._id" class="d-flex align-center">
        <div class="flex-fill my-5">
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
        </div>
        <v-btn icon class="mr-2" color="secondary" v-on:click="removeItem(index)">
          <v-icon x-small>fa-trash</v-icon>
        </v-btn>
      </div>
    </div>
    <div class="d-flex justify-center mt-5">
      <g-btn
        :label="$t('Common.addNewInput')"
        type="filled"
        color="dark"
        outlined
        @click="newItem"
      />
    </div>
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
      sequence: 1,
    };
  },
  computed: {
    itemsLen() {
      return this.items.length;
    },
  },
  methods: {
    newItem() {
      this.items.push({ _id: this.sequence++ });
    },
    removeItem(index) {
      this.items.splice(index, 1);
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
