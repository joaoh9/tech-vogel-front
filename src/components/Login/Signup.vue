    <template>
  <div class="d-flex">
    <v-row>
      <v-col cols="4"></v-col>
      <v-col cols="4">
        <v-card class="align-content-center mt-12" min-width="500" max-width="500">
          <v-card-title class="title font-weight-regular justify-space-between">
            <span>{{ currentTitle }}</span>
            <v-avatar
              color="primary lighten-2"
              class="subheading white--text"
              size="24"
              style="font-size: 16px"
              v-text="step"
            ></v-avatar>
          </v-card-title>

          <v-window v-model="step">
            <v-window-item :value="1">
              <v-card-text>
                <v-text-field class="mb-3" :rules="[rule.name]" label="Your Name" v-model="name"></v-text-field>
                <v-text-field
                  class="mb-3"
                  :error-messages="alerts.usernameUnavaliable"
                  label="Pick a Username"
                  :rules="[rule.min]"
                  v-model="username"
                ></v-text-field>
                <v-text-field
                  class="mb-3"
                  :error-messages="alerts.emailRegistered"
                  :rules="[rule.email]"
                  label="Your Email"
                  v-model="email"
                ></v-text-field>
                <span
                  class="caption grey--text text--darken-1"
                >You will be abble to log with either of these.</span>
              </v-card-text>
            </v-window-item>

            <v-window-item :value="2">
              <v-card-text>
                <v-text-field
                  :error-messages="alerts.weakPassword"
                  @click:append="showPassword = !showPassword"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  v-model="password"
                  label="Password"
                  :type="showPassword ? 'text': 'password'"
                ></v-text-field>
                <v-text-field
                  :error-messages="alerts.passwordUnmached"
                  @click:append="showPassword2 = !showPassword2"
                  :append-icon="showPassword2 ? 'mdi-eye' : 'mdi-eye-off'"
                  v-model="confirmPassword"
                  label="Confirm Password"
                  :type="showPassword2 ? 'text': 'password'"
                ></v-text-field>
                <span
                  class="caption grey--text text--darken-1"
                >Please enter a password for your account</span>
              </v-card-text>
            </v-window-item>

            <v-window-item :value="3">
              <div class="pa-4 text-center">
                <p>A confirmation token was sent to your email.</p>
                <p>Please insert it bellow.</p>
                <!-- <v-img class="mb-4" contain height="128" :src="logo"></v-img> -->
                <v-text-field label="Confirmation Token" v-model="emailConfirmationToken"></v-text-field>
              </div>
            </v-window-item>
          </v-window>

          <v-divider></v-divider>

          <v-card-actions class="pa-4">
            <v-btn v-if="step === 1" text to="/login">Log In</v-btn>
            <v-btn v-else @click="step--">Back</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" depressed @click="nextStep">Next</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="4" class="mt-12"></v-col>
    </v-row>
  </div>
</template>

<script>
import Logo from 'Assets/logo-amarelo-grad.svg';
import Storage from 'Helpers/storage';
import UserController from 'Controllers/user';

export default {
  name: 'Login2',
  components: {},
  data() {
    return {
      logo: Logo,
      step: 1,
      name: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      emailConfirmationToken: '',
      showPassword: false,
      showPassword2: false,
      alerts: {
        wrongFormattedEmail: '',
        emailRegistered: '', // 'Email already registered!',
        usernameUnavaliable: '', // 'Username not avaliable!',
        weakPassword: '', // 'Password too weak!',
        passwordUnmached: '', // 'Passwords do not match!',
      },
      rule: {
        name: (v) => v.length > 3 || 'Please write your full name',
        email: (em) => {
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;

          return re.test(em) || 'Email with wrong format';
        },
        min: (v) => (v ? v.length > 3 : 'Please write at least 3') || 'Please write at least 3',
      },
    };
  },
  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return 'Sign-up';
        case 2:
          return 'Create a password';
        default:
          return 'Confirm Email';
      }
    },
  },
  methods: {
    async nextStep() {
      switch (this.step) {
        case 1:
          this.verifyUsers();
          break;
        case 2:
          this.verifyPassword();
          break;
      }
    },
    async verifyUsers() {
      const userController = UserController();
      if (this.email.length > 1 && this.username) {
        this.alerts.emailRegistered = '';
        this.alerts.usernameUnavaliable = '';
        try {
          const res = await userController.getByEmail(this.email);
          console.log(res);
          if (res.length) {
            this.alerts.emailRegistered = 'Email already registered!';
          }
        } catch (e) {
          console.log(e);
        }

        try {
          const res = await userController.getByUsername(this.username);
          console.log(res);
          if (res) {
            this.alerts.usernameUnavaliable = 'Username not avaliable!';
          }
        } catch (e) {
          console.log(e);
        }

        if (this.alerts.emailRegistered || this.alerts.usernameUnavaliable) {
          return;
        }

        this.step++;
      }
    },
    async verifyPassword() {
      const userController = UserController();
      this.alerts.weakPassword = '';
      this.alerts.passwordUnmached = '';
      if (this.password.length < 6) {
        this.alerts.weakPassword = 'Password too weak!';
        return;
      }
      if (this.password !== this.confirmPassword) {
        this.alerts.passwordUnmached = 'Passwords do not match!';
        return;
      }

      await userController.saveUser({
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password,
        birthDate: '1990-12-12',
      });
      this.step++;
    },
    saveUser() {
      const user = {
        email: this.email,
        username: this.username,
      };
      Storage.saveState('user', user);
      this.$router.push({
        name: 'User Dashboard',
      });
    },
  },
};
</script>
