<template>
  <g-card minWidth="0" maxWidth="100vw" v-if="user" >
    <template v-slot:card-content>
      <div class="d-flex justify-space-between">
        <div>
          <h6>{{ $t('company.dashboard.greeting') }}</h6>
          <h4>{{ user.name }}</h4>
        </div>
        <v-avatar color="cinza" height="90">
          <!-- <v-img v-if="user.profilePhoto" :src="user.profilePhoto" /> -->
          <!-- <v-icon v-else> -->
          <!-- fa-user -->
          <!-- </v-icon> -->
        </v-avatar>
      </div>
    </template>
  </g-card>
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
