<template>
  <div class="mt-4 container">
    <v-row>
      <v-col class="d-flex justify-space-between">
        <div class="d-flex">
          <v-avatar size="120" color="gray">
            <img src="https://thispersondoesnotexist.com/image" alt="John" />
          </v-avatar>
          <div class="align-self-center ml-5">
            <h3>David Blane</h3>
            <h4>Front End Developer</h4>
          </div>
        </div>
        <v-card tile class="text-right align-self-center">
          <v-row class="ma-4">
            <v-icon class="d-flex mr-3">mdi-account</v-icon>
            <div class="body-1">Belo Horizonte, Brazil</div>
          </v-row>
          <v-row class="ma-4">
            <v-icon class="d-flex mr-3">fas fa-globe</v-icon>
            <div class="body-1">English, Portuguese</div>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="mt-4">
        <v-card tile class="pa-8 d-flex flex-column" min-width="100%">
          <h4>Work experience</h4>
          <div v-for="(w, index) in user.workExperience" :key="index" class="d-flex">
            <span class="align-self-start mt-2">{{w.time.from}} - {{w.time.to}}</span>
            <div class="align-self-start ml-12">
              <h5>{{w.jobTitle}}</h5>
              <h6>{{w.company}}</h6>
              <p class="body-1">{{w.description}}</p>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <!--  ESQUERDA -->
      <v-col class="mt-4 mr-1">
        <v-card tile class="pa-8">
          <h4>About Me</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ligula ullamcorper malesuada proin libero. Convallis a cras semper auctor neque vitae tempus. Id eu nisl nunc mi ipsum faucibus vitae. Pellentesque habitant morbi tristique senectus et. Eu ultrices vitae auctor eu augue ut.</p>
        </v-card>
        <v-card tile class="pa-8 mt-8">
          <h4 class="mb-3">Where to find me</h4>
          <v-icon class="mr-4">fab fa-github</v-icon>
          <v-icon class="mr-4">fab fa-linkedin-in</v-icon>
          <v-icon class="mr-4">fab fa-behance</v-icon>
          <v-icon class="mr-4">fab fa-instagram</v-icon>
          <v-icon class="mr-4">fab fa-twitter</v-icon>
          <v-icon class="mr-4">fab fa-medium</v-icon>
          <v-icon class="mr-4">fab fa-facebook</v-icon>
        </v-card>
        <v-card tile class="pa-8 mt-8">
          <h4>Main Projects</h4>
          <div v-for="(p, index) in user.mainProjects" :key="index">
            <div class="d-flex">
              <h5>{{p.title}}</h5>
              <v-icon class="ml-4">{{p.linkIcon}}</v-icon>
            </div>
            <p>{{p.description}}</p>
          </div>
        </v-card>
      </v-col>
      <!-- DIREITA -->
      <v-col class="mt-4 ml-1">
        <v-card tile class="pa-8 d-flex flex-column" min-width="100%">
          <h4>Education</h4>
          <div v-for="(e, index) in user.education" :key="index" class="d-flex">
            <div class="align-self-start">
              <h5>{{e.title}}</h5>
              <div class="d-flex align-center">
                <h6 class="mb-0 mr-4">{{e.place}}</h6>
                <span class="">{{e.time.from}} to {{e.time.to}}</span>
              </div>
              <p class="body-1">{{e.description}}</p>
            </div>
          </div>
        </v-card>

        <v-card tile class="pa-8 mt-8">
          <h4 class="mb-3">My Skills</h4>
            <v-chip class="mr-2" v-for="(u, index) in user.skills" :key="index">
              {{u}}
            </v-chip>
        </v-card>
      </v-col>

    </v-row>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data() {
    return {
      user: {
        workExperience: [
          {
            time: {
              from: 2016,
              to: 2020,
            },
            jobTitle: 'Full stack developer',
            company: 'Tamborine',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          },
          {
            time: {
              from: 2016,
              to: 2020,
            },
            jobTitle: 'Full stack developer',
            company: 'Tamborine',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          },
        ],
        education: [
          {
            time: {
              from: 2016,
              to: 2020,
            },
            place: 'UFMG',
            title: 'Computer Science Undergraduate',
            description:
              'olor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ligula ullamcorper malesuada proin libero. Convallis a cras semper auctor neque vitae tempus. Id eu nisl nunc mi ipsum faucibus vitae. Pellentesque habitant morbi tristique senectus et. Eu ultrices vitae auct',
          },
          {
            time: {
              from: 2016,
              to: 2020,
            },
            place: 'UFMG',
            title: 'Computer Science Undergraduate',
            description:
              'olor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ligula ullamcorper malesuada proin libero. Convallis a cras semper auctor neque vitae tempus. Id eu nisl nunc mi ipsum faucibus vitae. Pellentesque habitant morbi tristique senectus et. Eu ultrices vitae auct',
          },
        ],
        mainProjects: [
          {
            title: 'Built my own blockchain',
            description:
              'olor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ligula ullamcorper malesuada proin libero. Convallis a cras semper auctor neque vitae tempus. Id eu nisl nunc mi ipsum faucibus vitae. Pellentesque habitant morbi tristique senectus et. Eu ultrices vitae auct',
            link: 'https://github.com/joaoh9',
            linkIcon: 'fab fa-github',
          },
          {
            title: 'Built my own blockchain',
            description:
              'olor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ligula ullamcorper malesuada proin libero. Convallis a cras semper auctor neque vitae tempus. Id eu nisl nunc mi ipsum faucibus vitae. Pellentesque habitant morbi tristique senectus et. Eu ultrices vitae auct',
            link: 'https://github.com/joaoh9',
            linkIcon: 'fab fa-github',
          },
        ],
        skills: [ 'vue.js', 'node.js', 'javascript', 'solidity' ],
      },
    };
  },
};
</script>

<style>
.v-card {
  border-radius: 14px !important;
}

h4 {
  line-height: 100%;
  margin-bottom: 8px;
}
</style>
