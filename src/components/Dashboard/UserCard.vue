<template>
  <v-card class="bs-primary" color="bg" :loading="!loaded">
    <div v-if="user" :key="loaded" class="d-flex justify-space-between py-2 mx-12">
      <h5 class="text-center">{{ 'Hi, ' + name }}</h5>
      <div class="d-flex my-4">
        <v-avatar color="grey" size="40">
          <!-- <v-img v-if="user.profilePhoto" :src="user.profilePhoto" /> -->
        </v-avatar>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    user: Object,
  },
  async mounted() {
    this.getDisplayName();
  },
  data() {
    return {
      loaded: false,
      name: '',
    };
  },
  methods: {
    async getDisplayName() {
      await new Promise(resolve => setTimeout(resolve, 1 * 1000));
      const names = this.user.name.split(' ');
      const singlename = names[0] === names[names.length - 1];
      if (singlename) {
        this.name = names[0];
      } else {
        this.name = names[0] + ' ' + names[names.length - 1];
      }
      this.loaded = true;
    },
  },
};
</script>

<style></style>
