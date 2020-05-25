<template>
  <v-combobox
    v-model="select"
    :items="items"
    :label="title"
    item-text="name"
    :search-input.sync="search"
    multiple
    chips
    return-object
  >
    <template v-slot:selection="{ attrs, item, parent, selected, disabled }">
      <v-chip
        v-if="item === Object(item)"
        :key="JSON.stringify(item)"
        v-bind="attrs"
        :input-value="selected"
        :disabled="disabled"
        @click:close="parent.selectItem(item)"
      >
        <v-avatar
          v-if="item.icon.length > 1"
          class="secondary white--text"
          left
        >
          <i :class="item.icon" style="font-size: 18px"></i>
        </v-avatar>
        <v-avatar
          v-else
          class="secondary white--text"
          left
          v-text="item.icon.slice(0, 1).toUpperCase()"
        >
        </v-avatar>
        <span class="pr-2">
          {{ item.name }}
        </span>
        <v-icon
          small
          @click="parent.selectItem(item)"
        >fa-times</v-icon>
      </v-chip>
    </template>
    <template v-slot:no-data>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-combobox>
</template>

<script>
export default {
  name: 'DatePicker',
  props: {
    items: Array,
    title: String,
    multiple: Boolean,
  },
  data() {
    return {
      search: null,
      select: null,
    };
  },
  watch: {
    select(val, prev) {
      if (!prev || val.length === prev.length) return;

      this.select = val.map((v) => {
        let newValue = v;
        if (typeof newValue === 'string') {
          newValue = {
            name: v,
            icon: v[0].toUpperCase(),
          };
          this.items.push(newValue);
        }

        return newValue;
      });
    },
  },
};
</script>
