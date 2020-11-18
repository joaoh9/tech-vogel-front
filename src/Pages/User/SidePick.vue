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
              @click="createCompany()"
              block
            />

            <g-btn
              type="primary"
              class="mb-4"
              :label="$t('signup.buttons.createCV')"
              @click="createCV()"
              block
            />
          </div>
        </div>
      </template>
    </g-card>
  </div>
</template>

<script>
import UserController from 'Controllers/user';

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
      return this.$t('common.chooseSide');
    },
    async createCompany() {
      const userController = new UserController();

      try {
        await userController.update({ side: 2 });
      } catch (e) {
        this.$toast.error('Something went wrong. Try again later');
        console.log(e);
      }

      this.$router.push({
        path: '/company/new',
      });
    },
    async createCV() {
      const userController = new UserController();

      try {
        await userController.update({ side: 1 });
      } catch (e) {
        this.$toast.error('Something went wrong. Try again later');
        console.log(e);
      }
      this.$router.push({
        path: '/resume/new',
      });
    },
  },
};
</script>

<style></style>
