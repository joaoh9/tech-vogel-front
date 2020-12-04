<template>
  <v-container class="d-flex align-center flex-column">
    <h2 class="h2-bold-alternative text-center color-primary mt-16">{{ $t('home.fastEasy') }}</h2>
    <div style="display: inline; font-size: 1.5em;" class="mt-12">
      <span class="color-secondary">{{ $t('home.withOur') }}</span>
      <span class="color-primary">&emsp;{{ $t('home.report') }}&emsp;</span>
      <span class="color-secondary">{{ $t('home.fittestDevs') }}</span>
    </div>
    <div>
      <span v-for="(item, index) in $t('home.tips')" :key="index">
        <IconText
          :key="index"
          icon="mdi-check"
          :text="item.text"
          type="bdy-1"
          class="color-secondary my-4"
        />
      </span>

      <div class="d-flex align-center justify-center flex-column">
        <g-btn style="height: 56px; width: 270px;" class="mt-10" type="primary" :label="$t('home.primaryBtn')" to="/signup" />
        <v-btn to="/signup" class="mx-4 py-5 mt-2" color="primary" text>
          {{$t('home.secondaryBtn')}}
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
import IconText from 'Components/Interface/IconText';

export default {
  name: 'ReportTip',
  components: {
    IconText,
  },
};
</script>

<style></style>
