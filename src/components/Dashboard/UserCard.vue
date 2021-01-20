<template>
  <v-card
    class="bs-primary"
    color="bg"
    :loading="loading"
    @click="$emit('click')"
  >
    <div v-if="user" class="d-flex justify-space-between py-2 mx-12">
      <h5 class="text-center">{{ $t('common.hi') + name }}</h5>
      <div class="d-flex my-4">
        <v-avatar color="cinza-lighten-3" size="40">
          <v-img v-if="picture" :src="picture" />
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
    picture: String,
    loading: Boolean,
  },
  async mounted() {
    this.getDisplayName();
  },
  data() {
    return {
      name: '',
    };
  },
  methods: {
    async getDisplayName() {
      const names = this.user.name.split(' ');
      const singlename = names[0] === names[names.length - 1];
      if (singlename) {
        this.name = names[0];
      } else {
        this.name = names[0] + ' ' + names[names.length - 1];
      }
    },
  },
};
</script>

<style></style>
