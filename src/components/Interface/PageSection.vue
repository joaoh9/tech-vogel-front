<template>
  <div class="section-block flex">
    <div class="full-width-bg" v-bind:style="{ 'background-color': bgColor }"></div>
    <div class="content-block">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageSection',
  props: {
    bgColor: {
      default: 'white',
    },
  },
};
</script>

<style>
.section-block {
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0px;
  display: flex;
}
.full-width-bg {
  /*background-image: url('https://images.unsplash.com/photo-1585277846666-fc5401f572af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80');*/
  /*background-image: linear-gradient(135deg, indigo, lavender); */
  /* background-color: black; */
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  width: 100%;
  /*min-height: 100vh;*/
  height: 100%;
  left: 0;
  /*top:0;*/
}
.content-block {
  width: auto;
  position: relative;
}
</style>
