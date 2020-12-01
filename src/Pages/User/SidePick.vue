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
              @click="updateCompanySide()"
              block
              data-cy="side-company"
            />

            <g-btn
              type="primary"
              class="mb-4"
              :label="$t('signup.buttons.createCV')"
              @click="updateUserSide()"
              block
              data-cy="side-pro"
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
    async updateCompanySide() {
      const userController = new UserController();

      try {
        await userController.update({ side: 20 });
      } catch (e) {
        this.$toast.error(this.$t('toast.error.somethingWrong'));
      }

      this.$router.push({
        path: '/company/new',
      });
    },
    async updateUserSide() {
      const userController = new UserController();

      try {
        await userController.update({ side: 10 });
      } catch (e) {
        this.$toast.error(this.$t('toast.error.somethingWrong'));
      }
      this.$router.push({
        path: '/resume/new',
      });
    },
  },
};
</script>

<style></style>
