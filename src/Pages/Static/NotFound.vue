<template>
  <div>
    <PrimaryHeader title="404 - Page not found" subtitle="Uh-oh" />
    <div class="d-flex justify-center mt-6">
      <g-btn to="/" type="primary" label="Click here to return home" />
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
