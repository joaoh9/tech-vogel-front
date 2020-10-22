<template>
  <v-card width="400" height="380" class="bs-primary bg-color-bg">
    <div class="d-flex flex-column align-center">
      <v-avatar color="purple" size="140" class="my-6">
        <!-- <v-img v-if="user.profilePhoto" :src="user.profilePhoto" /> -->
      </v-avatar>
      <h4 class="h4-bold mb-2 text-center">{{ $t('user.card.name') }}</h4>
      <sub-1 class="color-dark">{{ $t('user.card.stack') }}</sub-1>
      <div class="d-flex my-4">
        <v-icon color="secondary" class="mr-2">mdi-map-marker</v-icon>
        <bdy-1 color="secondary">{{ $t('user.card.city') }}, {{ $t('user.card.country') }}</bdy-1>
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
};
</script>

<style></style>
