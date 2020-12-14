<template>
  <v-card class="bs-primary" color="bg">
    <div class="d-flex align-center flex-column mx-12">
      <v-img
        height="160"
        width="160"
        class="mt-10"
        :src="
          picture.data64 ||
            'https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png'
        "
      />
      <h4 class="h4-bold mt-6 text-center">{{ user.name }}</h4>
      <sub-1 color="dark">{{ role }}</sub-1>
      <IconText
        class="mt-4 mb-8"
        :text="`${location.city}, ${location.country}`"
        type="bdy-1 color-secondary-lighten-1"
        icon="mdi-map-marker"
        color="secondary-lighten-1"
      />
    </div>
  </v-card>
</template>

<script>
import IconText from 'Components/Interface/IconText';

export default {
  name: 'DashboardCard',
  props: {
    user: Object,
    picture: Object,
    role: String,
    location: Object,
  },
  components: {
    IconText,
  },
};
</script>

<style></style>
