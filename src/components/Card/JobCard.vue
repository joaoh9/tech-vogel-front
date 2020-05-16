<template>
  <v-card class="mx-auto" max-width="800" elevation="6">
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">{{ jobTitle }}</v-list-item-title>
        <v-list-item-subtitle>
          <v-chip pill color="blue lighten-2" class="ma-2">
            <v-avatar color="blue darken-2" left>
              <i class="devicon-angularjs-plain" style="font-size: 18px"></i>
            </v-avatar>Angular.js
          </v-chip>
          <v-chip class="ma-2" pill color="green lighten-2">
            <v-avatar color="green darken-2" left>
              <i class="devicon-nodejs-plain" style="font-size: 18px"></i>
            </v-avatar>Node.js
          </v-chip>
          <v-chip class="ma-2" pill color="teal lighten-4">
            <v-avatar color="teal lighten-2" left>
              <i class="devicon-vuejs-plain" style="font-size: 18px"></i>
            </v-avatar>Vue.js
          </v-chip>
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-group>
        <h3 style="text-align: center">Apple</h3>
        <div>Oslo, Norway</div>
      </v-list-item-group>
      <v-list-item-avatar tile size="80" color="white">
        <v-img
          contain
          style="height: 80%"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/647px-Apple_logo_black.svg.png"
        ></v-img>
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: 'JobCard',
  data() {
    return {
      jobTitle: 'Full Stack Developer',
    };
  },
};
</script>

<style>
</style>
