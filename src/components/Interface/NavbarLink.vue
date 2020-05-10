<template>
  <router-link v-if="to" :to="{ name: to }">
    <li class="nav-item d-none d-lg-block">
      <a class="ml-1 nav-link">
        {{ title }}
      </a>
    </li>
  </router-link>
</template>

<script>
export default {
  name: 'NavbarLink',
  props: {
    title: String,
    to: String,
  },
};
</script>
