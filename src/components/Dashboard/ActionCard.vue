<template>
  <v-card color="bg" class="bs-primary pa-4" @click="goTo(action.route)">
    <v-row align="center" style="word-break:normal;" justify="center" class="text-center">
      <v-col cols="12" md="4">
        <v-icon size="48">
          {{ action.icon }}
        </v-icon>
      </v-col>
      <v-col cols="12" md="8">
        <h5>{{ $t('company.dashboard.actions.' + action.name) }}</h5>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>

export default {
  name: 'DashboardActionCard',
  props: {
    action: Object,
  },
  methods: {
    goTo(routeInfo) {
      this.$router.push(routeInfo);
    },
  },
};

</script>

<style></style>
