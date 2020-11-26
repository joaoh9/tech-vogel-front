<template>
  <div>
    <PrimaryHeader :title="$t('common.pageNotFound')" :subtitle="$t('common.uhOh')" />
    <div class="d-flex justify-center mt-6">
      <g-btn to="/" type="primary" :label="$t('common.returnHome')" />
    </div>
  </div>
</template>

<script>
import PrimaryHeader from 'Components/Interface/PrimaryHeader';

export default {
  name: '404-NotFound',
  components: {
    PrimaryHeader,
  },
};

</script>

<style></style>
