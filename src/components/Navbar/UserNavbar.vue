<template>
  <div class="d-flex">
    <v-app-bar app color="white darken-4" elevate-on-scroll>
      <v-btn text color="white darken-4" height="60" tile elevation="0" to="/">
        <v-avatar size="150">
          <v-img height="100" width="1" :src="logo"></v-img>
        </v-avatar>
      </v-btn>
      <v-spacer></v-spacer>
      <v-text-field
        class="align-self-center mt-7 mr-8"
        dense
        label="Land a Job"
        outlined
        append-icon="mdi-magnify"
      ></v-text-field>
      <v-btn class="align-self-center" to="content" color="grey darken-3" outlined>
        I'm feeling Lucky
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn rounded outlined small fab color="info" class="mr-6">
        <v-icon style="font-size: 24px" class="rotate">mdi-send-outline</v-icon>
      </v-btn>
      <v-btn rounded outlined small fab class="mr-6">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import Logo from 'Assets/tv-new-logo-squared-blue.png';

export default {
  name: 'Navbar',
  components: {},
  data() {
    return {
      logo: Logo,
    };
  },
};
</script>

<style scoped>
.v-toolbar {
  box-shadow: 0px 2px 8px -1px rgba(0, 0, 0, 0.2), 0px 8px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
.rotate{
  -ms-transform: rotate(45deg);
  transform: rotate(225deg);
  margin-right: 2px;
  margin-bottom: 2px;
}
</style>
