<template>
  <div>
    <v-parallax
      style="opacity: 60%; background-color: black"
      height="250"
      src="https://suzanadeoliveira.com/wp-content/uploads/2017/06/Google-Office-HD-Wallpapers-Backgrounds-Wallpaper-Abyss-scaled.jpg"
    />
    <div class="container mt-6 px-10 px-md-5">
      <v-row justify="center">
        <v-col cols="12" lg="8" xl="9" style="max-width: 1000px">
          <p class="overline">Posted 5 days ago</p>
          <h4 class="h4-bold">{{ job.title }}</h4>
          <h6 class="h6">At {{ company.name }}</h6>
          <div>
            <v-chip
              class="mr-2 mb-1 mt-1"
              color="tag1"
              v-for="(k, i) in job.skills.knowledgeAreas"
              :key="`ss-${i}`"
              >{{ k }}</v-chip
            >
            <v-chip
              class="mr-2 mb-1 mt-1"
              color="tag2"
              v-for="(p, i) in this.job.skills.programmingLanguages"
              :key="`programmingLanguages-${i}`"
              >{{ p }}</v-chip
            >
            <v-chip
              class="mr-2 mb-1 mt-1"
              color="tag3"
              v-for="(f, i) in this.job.skills.frameworks"
              :key="`frameworks-${i}`"
              >{{ f }}</v-chip
            >
            <v-chip
              class="mr-2 mb-1 mt-1"
              color="tag4"
              v-for="(o, i) in this.job.skills.otherSkills"
              :key="`other-skills-${i}`"
              >{{ o }}</v-chip
            >
          </div>
          <div class="body-1 d-block mt-4" v-html="job.description"></div>
        </v-col>
        <v-col cols="12" lg="4" xl="3" class="mt-6">
          <v-card max-width="620px" width="100%" class="px-4" elevation="6" color="ligth">
            <v-card-text>
              <v-row>
                <v-icon>fa fa-briefcase</v-icon>
                <v-card-subtitle>{{ job.experienceLevel }}</v-card-subtitle>
              </v-row>
              <v-row>
                <v-icon>far fa-clock</v-icon>
                <v-card-subtitle>{{ job.contractType }}</v-card-subtitle>
              </v-row>
              <v-row>
                <v-icon>fas fa-globe-americas</v-icon>
                <v-card-subtitle v-for="lan of job.languages" :key="lan">{{ lan }}</v-card-subtitle>
              </v-row>
              <v-row v-if="job.salary">
                <v-icon class="ml-1">fas fa-dollar-sign</v-icon>
                <v-card-subtitle class="ml-2">{{ job.salary.price }}</v-card-subtitle>
              </v-row>
              <v-row justify="center" class="mt-3">
                <v-btn large color="primary" width="98%">
                  Apply For this position
                </v-btn>
              </v-row>
              <v-divider class="mt-4" />
              <v-row class="mt-5">
                <div class="d-flex">
                  <v-avatar height="80" width="80" color="cinza-lighten-2" class="ml-1">
                  </v-avatar>
                  <div class="d-flex justify-center ml-4" style="flex-direction: column">
                    <h6>{{ company.name }}</h6>
                    <v-card-subtitle class="body-2 ma-n3 "
                      >Job managed by {{ company.manager }}</v-card-subtitle
                    >
                  </div>
                </div>
              </v-row>
              <v-row class="mt-4">
                <v-col cols="12">
                  <h6>About the company</h6>
                </v-col>
                <v-card-subtitle
                  class="mt-n4 body-1 d-block"
                  v-for="ab of company.about.split('\n')"
                  :key="ab"
                >
                  {{ ab }}
                </v-card-subtitle>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobDescription',
  props: {
    job: Object,
    company: Object,
    confirm: Boolean,
  },
  data() {
    return {
      jobTest: {
        title: 'Senior Web Engineer, Fullstack',
        description:
          '<h2>Job description</h2><p><strong>HOMER</strong>&nbsp;has a newly created opportunity for a&nbsp;<strong>Senior Web Engineer</strong>&nbsp;to join our growing team! This role will&nbsp;<strong>be based remotely in select LATAM locations.</strong></p><p>HOMER, a BEGiN brand, is the proven early learning program that provides the best educational start possible. We offer personalized, fun, and proven learning products for kids ages 2-8 to help build confidence, mastery, and a love of learning. We are deeply committed to our members and to their children, and we are building a creative and strategic team to develop a portfolio of early learning products that support learning everywhere.</p><p>Reporting to our&nbsp;<strong>Engineering Manager, Web</strong>, the&nbsp;<strong>Senior Web Engineer</strong>&nbsp;will play a major role in building and maintaining our websites and several critical web applications.</p><p><strong>You will:</strong></p><ul><li>Make direct technical contributions (writing, debugging, reviewing and deploying code) using, Javascript, React framework, Node and other languages as necessary.</li><li>Provide technical guidance and feedback to your team members on a team distributed in several time-zones using agile project management methodologies.</li><li>Lead technical design of applications and participate in larger system design efforts.</li></ul><p><strong>Must Haves:</strong></p><ul><li>Demonstrable expertise designing and building websites and/or web apps and other systems using Javascript, React, and Node.</li><li>Sound Computer Science fundamentals (Bachelor’s degree in CS or related field preferred).</li><li>Strong interpersonal and communication skills.</li><li>At least 5 years of relevant work experience&nbsp;(or undergraduate degree in Computer Science and 3 years of relevant work experience).</li></ul><p><strong>Nice-to-Haves:</strong></p><ul><li>Knowledge of full stack engineering, especially how scalable frontend and backend systems interoperate.</li><li>Knowledge of deployment technologies in cloud hosted environments like AWS.</li><li>Experience with Django.</li><li>Experience utilizing/integrating CMS driven content for easier website page creation.</li><li>Experience working with subscription/e-commerce web flows.</li></ul><p><strong>We like people who:</strong></p><ul><li>Collaborate effectively with stakeholders and other team members (product managers, UI/UX designers, engineers, animators, illustrators, data scientists and others) to define and refine requirements and then execute on them.</li><li>Have the ability and openness to switch programming languages as necessary.</li><li>Have an entrepreneurial mindset and know how to balance speed to market and elegance in technical design.</li></ul><p><strong>What you’ll get:</strong></p><ul><li>HOMER offers competitive compensation including equity and full benefits.</li><li>Smart, passionate, and engaged co-workers.</li><li>Excellent top-tier Medical/Dental/Vision benefits.</li><li>The chance to have a big impact, quickly.</li><li>Help bring a love of reading and learning to children globally!</li></ul><p>HOMER is an equal opportunity employer and enthusiastically encourages people from a wide variety of backgrounds and experiences to apply. HOMER does not discriminate on the basis of race, color, religion, sex (including pregnancy), gender, national origin, citizenship, age, mental or physical disability, veteran status, marital status, sexual orientation or any other basis prohibited by law.</p>',
        requiredSkills:
          'Demonstrable expertise designing and building websites and/or web apps and other systems using Javascript, React, and Node.\nSound Computer Science fundamentals (Bachelor’s degree in CS or related field preferred).\nStrong interpersonal and communication skills.\nAt least 5 years of relevant work experience  (or undergraduate degree in Computer Science and 3 years of relevant work experience).',
        desiredSkills:
          'Knowledge of full stack engineering, especially how scalable frontend and backend systems interoperate.\nKnowledge of deployment technologies in cloud hosted environments like AWS.\nExperience in using GraphQL effectively.',
        /* responsabilities:
          'Collaborate effectively with stakeholders and other team members (product managers, UI/UX designers, engineers, animators, illustrators, data scientists and others) to define and refine requirements and then execute on them.\nHave the ability and openness to switch programming languages as necessary.\nHave an entrepreneurial mindset and know how to balance speed to market and elegance in technical design.',
        */
        salary: {
          currency: 'USD',
          min: '10000', // transformar em float
          max: '20000', // transformar em float
          timeFrame: 'YEAR',
        },
        range: false,
        skills: {
          knowledgeAreas: [ 'Data Mining', 'Front-end programming', 'Back-end programming' ],
          programmingLanguages: ['JavaScript'],
          frameworks: [ 'Node.js', 'React.js', 'Amazon-web-services', 'graphql' ],
          softSkills: ['Communicative'],
        },
        benefits: 'You get a 40day vacation yearly,\nCovered Medical Spenditures, etc',
        requiredLanguages: [ 'Inglês', 'Espanhol' ],
        desiredLanguages: ['Alemão'],
      },
    };
  },
  filters: {
    currency(value, cur) {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: cur })
        .format(parseFloat(value))
        .toString();
    },
  },
  components: {},
};
</script>

<style scoped>
h2 {
  color: #424242 !important;
  margin-top: 1.4rem;
}
p {
  color: #757575 !important;
  margin-top: 0.8rem;
}
</style>
