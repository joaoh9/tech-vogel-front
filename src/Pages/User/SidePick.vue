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
              @click="updateUserSide('company')"
              block
              data-cy="side-company"
            />

            <g-btn
              type="primary"
              class="mb-4"
              :label="$t('signup.buttons.createCV')"
              @click="updateUserSide('professional')"
              block
              data-cy="side-professional"
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
  async mounted() {
    history.pushState(null, null, location.href);
    window.onpopstate = () => {
      history.go(1);
    };
    this.checkIfAdmin();
  },
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
    async updateUserSide(side) {
      // TODO: Refatorar - fazer o update validando no banco se usuário corrente já não tem empresa ou resume salvo
      let path = '';
      if (side === 'professional') {
        side = 10;
        path = '/resume/new';
      } else if (side === 'company') {
        side = 20;
        path = '/company/new';
      }

      const userController = new UserController();

      try {
        await userController.update({ side });
      } catch (e) {
        this.$toast.error(this.$t('toast.error.somethingWrong'));
      }

      this.$router.push({
        path,
      });
    },
    checkIfAdmin() {
      const userController = new UserController();
      const user = userController.decodeUserToken();

      if (user.side < 0) {
        return this.$router.push('/user/dashboard');
      }
    },
  },
};
</script>

<style></style>
