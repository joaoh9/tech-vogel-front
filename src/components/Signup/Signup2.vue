<template>
  <vs-dialog prevent-close v-model="show">
    <template #header>
      <h4 class="mt-1">
        Welcome to
        <b>Tech Vogel</b>
      </h4>
    </template>

    <div class="con-form">
      <h6 class="mb-1">Fill this form to Sign Up</h6>
      <vs-input v-model="name" label-placeholder="Name">
        <template #icon>
          <box-icon style="opacity: 60%" name="user"></box-icon>
        </template>
      </vs-input>
      <vs-input class="mt-2" v-model="email" label-placeholder="Email">
        <template #icon>
          <box-icon style="opacity: 60%" name="at"></box-icon>
        </template>
      </vs-input>
      <vs-input class="mt-2" type="password" v-model="password" label-placeholder="Password">
        <template #icon>
          <box-icon style="opacity: 60%" name="lock"></box-icon>
        </template>
      </vs-input>
      <vs-input
        class="mt-2"
        type="password"
        v-model="confirmPassword"
        label-placeholder="Confirm Password"
      >
        <template #icon>
          <box-icon style="opacity: 60%" name="lock"></box-icon>
        </template>
      </vs-input>
      <div class="flex mt-2">
        <vs-checkbox v-model="checkbox1">I accept the terms and conditions</vs-checkbox>
      </div>
    </div>

    <template #footer>
      <div class="footer-dialog">
        <vs-button block>Sign Up</vs-button>

        <div class="new mt-2 mb-1">
          Already Have an account?
          <a href="#">Log In</a>
        </div>
      </div>
    </template>
  </vs-dialog>
</template>

<script>
export default {
  name: 'Login2',
  props: {
    active: Boolean,
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      checkbox1: false,
      show: false,
    };
  },
  computed() {
    this.show = this.active;
  },
};
</script>

<style scoped>
.vs-button--block {
  width: 97%;
}
</style>
