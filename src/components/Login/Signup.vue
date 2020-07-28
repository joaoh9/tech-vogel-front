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
                <v-text-field label="Your Name" v-model="name"></v-text-field>
                <v-text-field label="Pick a Username" v-model="username"></v-text-field>
                <v-text-field label="Your Email" v-model="email"></v-text-field>
                <span
                  class="caption grey--text text--darken-1"
                >You will be abble to log with either of these.</span>
              </v-card-text>
            </v-window-item>

            <v-window-item :value="2">
              <v-card-text>
                <v-text-field
                  @click:append="showPassword = !showPassword"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  v-model="password"
                  label="Password"
                  :type="showPassword ? 'text': 'password'"
                ></v-text-field>
                <v-text-field
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
      <v-col cols="4" class="mt-12">
        <v-alert
          class="ml-4"
          :key="alerts.emailRegistered"
          v-if="alerts.emailRegistered"
          width="60%"
          type="warning"
        >Email already registered!</v-alert>
        <v-alert
          class="ml-4"
          :key="alerts.usernameUnavaliable"
          v-if="alerts.usernameUnavaliable"
          width="60%"
          type="warning"
        >Username not avaliable!</v-alert>
        <v-alert
          class="ml-4"
          :key="alerts.weakPassword"
          v-if="alerts.weakPassword"
          width="60%"
          type="warning"
        >Password too weak!</v-alert>
        <v-alert
          class="ml-4"
          :key="alerts.passwordUnmached"
          v-if="alerts.passwordUnmached"
          width="60%"
          type="warning"
        >Passwords do not match!</v-alert>
      </v-col>
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
        emailRegistered: false,
        usernameUnavaliable: false,
        weakPassword: false,
        passwordUnmached: false,
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
      const userController = new UserController();
      if (this.email.length > 1 && this.username) {
        this.alerts.emailRegistered = false;
        this.alerts.usernameUnavaliable = false;
        try {
          await userController.getByEmail(this.email);
          this.alerts.emailRegistered = true;
        } catch (e) {
          console.log(e);
        }

        try {
          await userController.getByUsername(this.username);
          this.alerts.usernameUnavaliable = true;
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
      const userController = new UserController();
      this.alerts.weakPassword = false;
      this.alerts.passwordUnmached = false;
      if (this.password.length < 6) {
        this.alerts.weakPassword = true;
        return;
      }
      if (this.password !== this.confirmPassword) {
        this.alerts.passwordUnmached = true;
        return;
      }

      await userController.saveUser({
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password,
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
