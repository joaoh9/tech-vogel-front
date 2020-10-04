<template>
  <div class="d-flex justify-center mt-12 mx-12">
    <v-row>
      <v-col cols="12" md="4">
        <g-card :md="300" :lg="300">
          <template v-slot:card-content>
            <div class="d-flex justify-space-between ma-4">
              <div class="d-flex flex-column">
                <h6>Hi,</h6>
                <h4 class="h4-bold color-dark">Paulo</h4>
              </div>
              <v-avatar size="120" color="gray" class="elevation-6">
                <v-img src="https://thispersondoesnotexist.com/image" alt="John" />
              </v-avatar>
            </div>
          </template>
        </g-card>
        <div class="mt-6">
          <h6>Your profile isn't complete yet</h6>
          <p class="subtitle-1">Having a complete profile lets us show you better job positions!</p>
          <v-progress-linear style="max-width: 300px" value="50" color="primary" />
        </div>
        <g-card :md="300" :lg="300" class="mt-6">
          <template v-slot:card-content>
            <g-card-header
              class="mt-6"
              title="Invite friends to Tech Vogel"
              description="Gain 1 credit for every friend that decides to join!"
            >
              <template v-slot:content>
                <div class="mt-6">
                  <v-text-field
                    @click:append="sendInviteEmail()"
                    append-icon="mdi-check"
                    outlined
                    label="Your friend's Email"
                  />
                </div>
              </template>
            </g-card-header>
          </template>
        </g-card>
      </v-col>
      <v-col cols="12" md="8">
        <g-card-header title="What would you like to do today?">
          <template v-slot:content="{}">
            <v-btn large color="primary" class="mt-4 align-self-center" max-width="300">
              Register my CV
            </v-btn>
            <div class="d-flex justify-center flex-wrap mt-6 mb-6">
              <dashboard-card text="Manage my applications" :img="application" />
              <dashboard-card text="Search for more jobs" :img="application" />
              <dashboard-card text="Edit my profile" :img="application" />
              <dashboard-card text="Manage credits" :img="application" />
            </div>
          </template>
        </g-card-header>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import DashboardCard from 'Components/User/DashboardCard';
import Application from 'Assets/application.svg';

export default {
  name: 'UserDashboard',
  components: {
    DashboardCard,
  },
  data() {
    return {
      application: Application,
    };
  },
  methods: {
    sendInviteEmail() {
      alert('ok');
    },
  },
};
</script>

<style></style>
