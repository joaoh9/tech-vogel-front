<template>
  <v-card class="bs-primary" color="bg">
    <div class="d-flex align-center flex-column mx-12">
      <v-img
        height="160"
        width="160"
        :class="reportPayedFor ? 'mt-10' : 'blur mt-10'"
        :src="
          picture
            ? picture.data64
            : 'https://www.pathcenter.co.il/wp-content/uploads/2014/03/user_icon-263x263.png'
        "
      />
      <h4 :class="reportPayedFor ? 'h4-bold mt-6 text-center' : 'blur h4-bold mt-6 text-center'">
        {{ user.name }}
      </h4>
      <sub-1 color="dark text-center">{{ role }}</sub-1>
      <IconText
        v-if="location"
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
    reportPayedFor: Boolean,
  },
  components: {
    IconText,
  },
};
</script>

<style></style>
