<template>
  <div>
    <v-navigation-drawer
        floating
        permanent
        clipped
        absolute
        expand-on-hover
      >
      <v-list shaped>
        <v-list-item-group v-model="items">
          <v-list-item v-for="(item, i) in items" :key="i" :to="`${item.route}`">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-left" v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'ResumeDashboard',
  props: {
    items: Array,
  },
};
</script>

<style lang="scss" scoped>
// .v-navigation-drawer {
//     z-index: 1;
//     position: fixed;
// }
</style>
