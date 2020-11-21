<template>
  <div>
    <PrimaryHeader
      :title="$t('user.onboarding.title')"
      :description="$t('user.onboarding.description')"
      :cols="true"
    />
    <div class="d-flex align-center flex-column">
      <v-carousel
        :continuous="false"
        v-model="carousel"
        style="max-width: 600px"
        next-icon="fas fa-chevron-right fas-2x"
        prev-icon="fas fa-chevron-left fas-2x"
        @change="e => (index = e)"
      >
        <v-carousel-item v-for="(item, i) in getData()" :key="i" class="pa-16">
          <div class="d-flex flex-column align-center">
            <v-img :src="item.img" />
            <h5 class="mt-5 h5-bold color-dark">{{ item.title }}</h5>
            <bdy-1 class="mt-5" color="black">{{ item.subtitle }} </bdy-1>
          </div>
        </v-carousel-item>
      </v-carousel>
      <g-btn
        v-if="index < 3"
        type="text"
        class="mt-2"
        color="primary"
        to="/jobs"
        :label="$t('user.onboarding.skip')"
      />
      <g-btn
        v-if="index === 3"
        to="/resume/new"
        type="primary"
        class="mt-2"
        :label="$t('user.dashboard.registerCV')"
      />
      <g-btn
        v-if="index === 3"
        :to="getDashboardRoute()"
        type="text"
        class="mt-2"
        color="primary"
        :label="$t('user.gotToDashboard')"
      />
    </div>
  </div>
</template>

<script>
import pic1 from 'Assets/Onboarding/1.svg';
import pic2 from 'Assets/Onboarding/2.svg';
import pic3 from 'Assets/Onboarding/3.svg';
import pic4 from 'Assets/Onboarding/4.svg';

import PrimaryHeader from 'Components/Interface/PrimaryHeader';

import UserController from 'Controllers/user'

export default {
  name: 'Onboarding',
  components: {
    PrimaryHeader,
  },
  data() {
    return {
      images: [ pic1, pic2, pic3, pic4 ],
      carousel: 0,
      index: 0,
    };
  },
  methods: {
    getData() {
      return this.$t('user.onboarding.data').map((el, i) => ({ ...el, img: this.images[i] }));
    },
    checkIfCompany() {
      const userController = new UserController();
      const userInfo = userController.decodeUserToken();
      return userInfo.side === 2;
    },
    getDashboardRoute() {
      return this.checkIfCompany() ? '/company/dashboard' : '/dashboard';
    },
  },
};
</script>

<style></style>
