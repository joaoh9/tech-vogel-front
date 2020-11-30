<template>
  <v-card class="pa-10 rounded-20" color="bg" outlined>
    <slot name="default" />
  </v-card>
</template>

<script>
export default {
  name: 'g-card-outlined',
};
</script>

<style>
/* Copiar tag de <style> para os componentes que utilizarem g-card-outlined */
.theme--light.v-sheet--outlined {
  border: 1px solid #1a193c !important;
}
.v-application .bg {
  border-color: #1a193c !important;
}
.rounded-20 {
  border-radius: 20px !important;
}
</style>
