<template>
  <div>
    <DefaultDialog
      title="Welcome to Tech Vogel"
      secondTitle="We’re happy you’re here!"
      subtitle="Start your journey towards the freedom of remote work by registering your CV."
      :img="image"
      :btnText="$t('user.dashboard.registerCV')"
      :secBtnText="$t('user.dashboard.skipStep')"
    />

    <DefaultDialog
      secondTitle="Are you sure you don’t want to register your CV now?"
      subtitle="Filling out your CV information now will enable you to quickly apply to any position you are interested in and will allow us to show you positions that best fit your profile and skills!"
      :btnText="$t('user.dashboard.registerCVNow')"
      :secBtnText="$t('user.dashboard.doItLater')"
    />
  </div>
</template>

<script>
import image from 'Assets/laptopetucano.svg';
import DefaultDialog from 'Components/Dialogs/Default';

export default {
  name: 'Modal',
  components: {
    DefaultDialog,
  },
  data() {
    return {
      image,
    };
  },
};
</script>

<style></style>
