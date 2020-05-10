<template>
  <div class="d-flex justify-content-center mt-5">
    <div class="card bg-authentication rounded mb-0">
      <div style="background-color: #eff2f7" class="row m-0">
        <div class="col-lg-6 d-lg-block d-none text-center align-self-center px-1 py-0">
          <!-- <img src="../../../public/images/pages/register.jpg" alt="branding logo" /> -->
          <img src="" alt="branding logo" />
        </div>
        <div class="col-lg-6 col-12 p-0">
          <div class="card rounded-0 mb-0 px-2">
            <div class="card-header pb-1">
              <div class="card-title">
                <h4 class="mb-0">Create Account</h4>
              </div>
            </div>
            <p class="px-2">Fill the below form to create a new account.</p>
            <div class="card-content mb-2">
              <div class="card-body pt-1">
                <form>
                  <Input placeholder="Name" label="Name" type="text" v-model="name" icon="user" />
                  <Input
                    placeholder="Email"
                    label="Email"
                    type="email"
                    v-model="email"
                    icon="mail"
                  />
                  <Input
                    placeholder="Password"
                    label="Password"
                    type="password"
                    v-model="confirmPassword"
                    icon="lock"
                  />
                  <Input
                    placeholder="Confirm Password"
                    label="Confirm Password"
                    type="password"
                    v-model="password"
                    icon="lock"
                  />
                  <div class="form-group d-flex justify-content-between align-items-center">
                    <div class="text-left">
                      <Checkbox title=" I accept the terms & conditions." v-model="terms" />
                    </div>
                  </div>
                  <Button
                    to="Login"
                    text="Login"
                    color="outline-primary"
                    buttonClass="float-left btn-inline waves-effect waves-light"
                  />
                  <Button
                    text="Register"
                    color="primary"
                    buttonClass="float-right btn-inline waves-effect waves-light"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from '../Interface/Input.vue';
import Button from '../Interface/Button.vue';
import Checkbox from '../Interface/Checkbox.vue';

export default {
  name: 'Login',
  props: {},
  components: {
    Input,
    Checkbox,
    Button,
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: false,
    };
  },
};
</script>
