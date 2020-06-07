<template>
  <v-card class="mx-auto" max-width="800" elevation="6">
    <v-list-item>
      <div class="d-flex justify-space-between">
      <v-list-item-avatar tile size="80" color="white">
        <v-img
          contain
          style="height: 80%"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/647px-Apple_logo_black.svg.png"
        ></v-img>
      </v-list-item-avatar>
      <v-list-item-group class="ma-3 mr-5">
        <h3 style="text-align: center">Apple</h3>
        <div>Oslo, Norway</div>
      </v-list-item-group>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">{{ jobTest.title }}</v-list-item-title>
        <v-list-item-subtitle>
          <div>
            <v-chip
              class="mr-2 mb-1 mt-1"
              color="cyan lighten-5"
            >{{this.jobTest.skills.knowledgeAreas[0]}}</v-chip>
            <v-chip
              class="mr-2 mb-1 mt-1"
              color="blue lighten-5"
            >{{this.jobTest.skills.programmingLanguages[0]}}</v-chip>
            <v-chip
              class="mr-2 mb-1 mt-1"
              color="purple lighten-5"
            >{{this.jobTest.skills.frameworks[0]}}</v-chip>
          </div>
        </v-list-item-subtitle>
      </v-list-item-content>
      </div>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: 'JobCard',
  data() {
    return {
      jobTest: {
        title: 'Full Stack Developer',
        skills: {
          knowledgeAreas: [ 'Front-end programming', 'Back-end programming' ],
          programmingLanguages: ['JavaScript'],
          frameworks: [ 'Node.js', 'React.js', 'Amazon-web-services', 'graphql' ],
          softSkills: ['Communicative'],
        },
      },
    };
  },
};
</script>

<style>
</style>
