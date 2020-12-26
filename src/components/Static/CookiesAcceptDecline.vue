<template>
  <vue-cookie-accept-decline
    ref="cook1345"
    elementId="cook1345"
    :debug="false"
    :position="'bottom'"
    :type="'bar'"
    :disableDecline="true"
    :transitionName="'slideFromBottom'"
    :showPostponeButton="true"
    @clicked-decline="cookieClickedDecline"
  >
    >
    <!-- Optional -->
    <div slot="message">
      {{ $t('cookies.bannerText') }}
      <a href="/privacy-policy" target="_blank">{{ $t('cookies.learnMoreText') }}</a>
    </div>

    <!-- Optional -->
    <div slot="acceptContent">
      {{ $t('cookies.accept') }}
    </div>
  </vue-cookie-accept-decline>
</template>

<script>
import Vue from 'vue';
import VueCookieAcceptDecline from 'vue-cookie-accept-decline';
Vue.component('vue-cookie-accept-decline', VueCookieAcceptDecline);

import 'vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css';

export default {};
</script>

<style>
.cookie__bar,
.cookie__floating {
  background: #f1d6b2;
}

.cookie__bar__buttons__button--decline {
  background: #f86241;
}

.cookie__floating__postpone-button {
  height: 1.8rem;
}

.cookie__bar__buttons__button--accept,
.cookie__floating__buttons__button--accept {
  background: #4caf50;
  font-size: 1.2rem;
  /* color: #97ca86; */
}

.cookie__bar__content {
  font-size: 1.2rem;
}
</style>
