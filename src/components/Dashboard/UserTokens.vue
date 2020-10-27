<template>
  <div class="d-flex justify-start align-center">
    <div style="max-width: 27.6px; max-height: 20.49px">
      <v-img :src="toucan" />
    </div>
    <sub-1 class="mx-2" color="dark">Y{{ $t('common.youHave') }}</sub-1>
    <v-chip class="rounded-lg" color="primary">{{ tokens }}</v-chip>
    <sub-1 class="ml-2" color="dark">{{ $t('common.userTokens') }}</sub-1>
  </div>
</template>

<script>
import Toucan from 'Assets/toucan-black-yellow.svg';
export default {
  name: 'UserTokens',
  props: {
    tokens: [ Number, String ],
  },
  data() {
    return {
      toucan: Toucan,
    };
  },
};
</script>

<style></style>
