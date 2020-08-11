<template>
  <v-footer padless app absolute style="background: rgba(0,0,0,0)">
    <v-card class="flex" style="background: rgba(0,0,0,0)" flat tile>
      <v-card-title class="middleYellow" style="background-color: rgba(0,0,0,0)">
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
