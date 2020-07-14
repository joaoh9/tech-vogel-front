<template>
  <v-footer padless>
    <v-card class="flex" flat tile>
      <v-card-title class="middleYellow">
        <strong class="subheading" style="color: #1A193C">
          {{$t('LandingPage.footer.socialMedia.title')}}
        </strong>

        <v-spacer></v-spacer>
        <v-btn
          :href="icon.link"
          v-for="icon in icons"
          :key="icon.icon"
          class="mx-4 text-center"
          icon
        >
          <v-icon color="darkBlue" size="24px">{{ icon.icon }}</v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'LPFooter',
  data() {
    return {
      icons: this.$t('LandingPage.footer.icons'),
    };
  },
};
</script>

<style></style>
