<template>
  <div>
    <v-card width="400" height="125">
      <div class="d-flex justify-center">
        <div class="d-flex flex-column">
          <h5 class="h5-bold color-primary my-4">{{ $t('user.findMe') }}</h5>
          <div class="d-flex align-center justify-center">
            <v-icon color="secondary" class="mr-2" v-for="(item, index) in getIcons()" :key="index">
              {{ item.icon }}
            </v-icon>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'FindMe',
  methods: {
    getIcons() {
      return [ { icon: 'mdi-github' }, { icon: 'mdi-linkedin' }, { icon: 'mdi-instagram' } ];
    },
  },
};
</script>

<style></style>
