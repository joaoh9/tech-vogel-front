<template>
  <div>
    <div v-for="(item, i) in steps" :key="i">
      <v-row>
        <v-col cols="2" class="mx-2">
          <span class="circle">
            {{ i + 1 }}
          </span>
        </v-col>
        <v-col>
          <h5 :class="`h5-bold color-${titleColor}`">{{ item.title }}</h5>
          <bdy-1 :color="`color-${textColor} my-4`">{{ item.description }}</bdy-1>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NumberedSteps',
  props: {
    steps: Array,
    titleColor: String,
    textColor: String,
  },
};
</script>

<style></style>
