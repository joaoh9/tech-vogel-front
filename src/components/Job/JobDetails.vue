<template>
  <div>
    <v-parallax
      height="250"
      src="https://suzanadeoliveira.com/wp-content/uploads/2017/06/Google-Office-HD-Wallpapers-Backgrounds-Wallpaper-Abyss-scaled.jpg"
    ></v-parallax>
    <div class="ma-12 container">
      <div class="d-flex align-center mb-5">
        <v-img
          max-height="60px"
          max-width="60px"
          src="https://s2.glbimg.com/z_gIOSUdsxyNGClgVLYVBHBziyw=/0x0:400x400/400x400/s.glbimg.com/po/tt2/f/original/2016/05/20/new-google-favicon-logo.png"
        ></v-img>
        <p class="mb-0 ml-3">Google</p>
      </div>
      <div class="d-flex justify-start">
        <p class="mr-8">Remote</p>
        <p class="mr-8">{{this.jobTest.type}}</p>
        <p class="mr-8">{{this.jobTest.category}}</p>
      </div>
      <div>
        <v-chip
          class="mr-2 mb-1 mt-1"
          color="cyan lighten-5"
          v-for="(k, i) in this.jobTest.skills.knowledgeAreas"
          :key="`knowledgeAreas-${i}`"
        >{{k}}</v-chip>
        <v-chip
          class="mr-2 mb-1 mt-1"
          color="blue lighten-5"
          v-for="(p, i) in this.jobTest.skills.programmingLanguages"
          :key="`programmingLanguages-${i}`"
        >{{p}}</v-chip>
        <v-chip
          class="mr-2 mb-1 mt-1"
          color="purple lighten-5"
          v-for="(f, i) in this.jobTest.skills.frameworks"
          :key="`frameworks-${i}`"
        >{{f}}</v-chip>
      </div>
      <p class="mb-n2 mt-6">We are looking for a...</p>
      <h2>{{this.jobTest.title}}</h2>
      <p>{{this.jobTest.description}}</p>
      <h2>Required Skills</h2>
      <p
        v-for="(reqSkill, index) in this.jobTest.requiredSkills.split('\n')"
        :key="index"
      >{{reqSkill}}</p>
      <h2>Desired Skills</h2>
      <p>{{this.jobTest.desiredSkills}}</p>
      <h2>Responsabilities</h2>
      <p>{{this.jobTest.responsabilities}}</p>
      <div class="d-flex justify-start mb-0">
        <p>{{this.jobTest.salary.currency}}</p>
        <p class="ml-2">{{this.jobTest.salary.min | currency(this.jobTest.salary.currency)}}</p>
        <p class="ml-2" v-if="this.jobTest.salary.max">-</p>
        <p
          class="ml-2"
          v-if="this.jobTest.salary.max"
        >{{this.jobTest.salary.max | currency(this.jobTest.salary.currency)}}</p>
        <p class="ml-2">/</p>
        <p class="ml-2">{{this.jobTest.salary.timeFrame}}</p>
      </div>
      <div class="d-flex justify-start mt-4">
        <v-btn color="primary" class="mr-4">Confirmar</v-btn>
        <v-btn color="secondary">Voltar e Editar</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobDescription',
  props: {
    job: Object,
    company: Object,
  },
  data() {
    return {
      jobTest: {
        title: 'Senior Web Engineer, Fullstack',
        description:
          'HOMER has a newly created opportunity for a Senior Web Engineer to join our growing team! This role will report into our New York office, or can be based remotely in select global locations.\n\nHOMER, a BEGiN brand, is the proven early learning program that provides the best educational start possible. We offer personalized, fun, and proven learning products for kids ages 2-8 to help build confidence, mastery, and a love of learning. We are deeply committed to our members and to their children, and we are building a creative and strategic team to develop a portfolio of early learning products that support learning everywhere.\n\nReporting to our Engineering Manager, Web, the Senior Web Engineer will play a major role in building and maintaining our websites and several critical web applications.',
        type: 'Full-time',
        category: 'Data Mining',
        requiredSkills:
          'Demonstrable expertise designing and building websites and/or web apps and other systems using Javascript, React, and Node.\nSound Computer Science fundamentals (Bachelor’s degree in CS or related field preferred).\nStrong interpersonal and communication skills.\nAt least 5 years of relevant work experience  (or undergraduate degree in Computer Science and 3 years of relevant work experience).',
        desiredSkills:
          'Knowledge of full stack engineering, especially how scalable frontend and backend systems interoperate.\nKnowledge of deployment technologies in cloud hosted environments like AWS.\nExperience in using GraphQL effectively.',
        responsabilities:
          'Collaborate effectively with stakeholders and other team members (product managers, UI/UX designers, engineers, animators, illustrators, data scientists and others) to define and refine requirements and then execute on them.\nHave the ability and openness to switch programming languages as necessary.\nHave an entrepreneurial mindset and know how to balance speed to market and elegance in technical design.',
        salary: {
          currency: 'USD',
          min: '10000',
          max: '20000',
          timeFrame: 'Yearly',
        },
        range: false,
        customFields: [],
        skills: {
          knowledgeAreas: ['Front-end programming', 'Back-end programming'],
          programmingLanguages: ['JavaScript'],
          frameworks: ['Node.js', 'React.js', 'Amazon-web-services', 'graphql'],
          softSkills: ['Communicative'],
        },
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
