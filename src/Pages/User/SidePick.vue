<template>
  <div class="d-flex justify-center mt-12">
    <g-card :sm="400" :md="500" :lg="600">
      <template v-slot:card-header>
        <g-card-header :title="getHeaderTitle()" />
      </template>
      <template v-slot:card-content>
        <div clas="d-flex justify-center ma-12 flex-column">
          <div class="d-flex flex-column justify-space-around align-center mt-12">
            <g-btn
              type="primary"
              class="mb-4"
              :label="$t('signup.buttons.createCompany')"
              @click="crateCompany()"
              block
            />

            <g-btn
              type="primary"
              class="mb-4"
              :label="$t('signup.buttons.createCV')"
              @click="crateCV()"
              block
            />
          </div>
        </div>
      </template>
    </g-card>
  </div>
</template>

<script>
export default {
  name: 'RegistrationConfirmed',
  props: {
    user: Object,
  },
  async mounted() {},
  data() {
    return {
      confirmationStatus: 0,
      resendCode: false,
      resendLoad: false,
    };
  },
  methods: {
    getHeaderTitle() {
      // TODO: internacionalização
      return 'Choose your side';
    },
    crateCompany() {
      this.$router.push({
        path: '/company/new',
      });
    },
    crateCV() {
      this.$router.push({
        path: '/resume/new',
      });
    },
  },
};
</script>

<style></style>
