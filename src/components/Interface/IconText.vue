<template>
  <div class="d-flex ml-2">
    <v-icon :size="size" class="mr-2" :color="color || 'secondary'">{{ icon }}</v-icon>
    <span :class="type"> {{ text }}</span>
  </div>
</template>

<script>

export default {
  name: 'IconText',
  props: {
    icon: String,
    text: String,
    color: String,
    size: [ String, Number ],
    type: {
      type: String,
      default: 'bdy-1',
    },
  },
}
</script>

<style></style>
