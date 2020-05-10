<template>
  <div v-if="to">
    <router-link :to="{ name: to }">
      <button :class="[`btn btn-round btn-${color}`, buttonClass]">
        {{ text }}
      </button>
    </router-link>
  </div>
  <div v-else>
    <button :class="[`btn btn-round sizeX btn-${color}`, buttonClass]">
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    buttonClass: String,
    color: String,
    to: String,
  },
};
</script>

<style scoped>

</style>
