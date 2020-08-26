<template>
  <div class="container">
    <v-row>
      <v-col cols="12" md="5"></v-col>
      <v-col cols="12" md="7">
        <div class="d-flex flex-column justify-start align-end text-justify">
          <h1>Welcome to Tech Voguel</h1>
          <p>You have 5 availiable credit</p>
          <p>1 job listing | lorem | lorem</p>
          <a><p>How does credits works?</p></a>
          <v-btn color="primary" class="align-self-stretch my-2">Register my CV</v-btn>
          <v-btn color="secondary" class="align-self-stretch my-2">Continue to my dashboard</v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Register',
  props: {
  },
  data() {
    return {
    };
  },
};
</script>
