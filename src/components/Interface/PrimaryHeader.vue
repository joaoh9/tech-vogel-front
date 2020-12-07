<template>
  <v-card
    :color="color || 'primary'"
    class="px-4 px-md-16 py-12"
    flat
    style="border-radius: 0px !important;"
  >
    <v-row v-if="cols">
      <v-col cols="12" md="6">
        <div>
        <h3 class="text-center h3-bold color-light">{{ title }}</h3>
        <h5 class="text-center color-light mt-4">{{ subtitle }}</h5>
        </div>
        <div v-if="description">
          <sub-1
            v-for="(item, i) in description.split('\n')"
            :key="i"
            :class="`color-light ${i === 0 ? 'mt-4' : 'mt-2'}`"
          >
            {{ item }}
          </sub-1>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <slot name="default" />
      </v-col>
    </v-row>
    <div v-else>
      <h3 class="h3-bold color-light">{{ title }}</h3>
      <h5 class="color-light mt-4">{{ subtitle }}</h5>
      <div v-if="description">
        <sub-1
          v-for="(item, i) in description.split('\n')"
          :key="i"
          :class="`color-light ${i === 0 ? 'mt-4' : 'mt-2'}`"
        >
          {{ item }}
        </sub-1>
      </div>
      <slot name="default" />
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'PrimaryHeader',
  props: {
    title: String,
    subtitle: String,
    description: String,
    cols: Boolean,
    color: {
      type: String,
      default: 'primary',
    },
  },
};
</script>

<style></style>
