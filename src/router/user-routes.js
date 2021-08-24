import GitHubOauth from 'Pages/User/GitHubOauth';
import RegistrationConfirmed from 'Pages/User/RegistrationConfirmed.vue';
import UserApplications from 'Pages/User/UserApplications.vue';
import ConfirmRegistration from 'Pages/User/ConfirmRegistration.vue';
import SidePick from 'Pages/User/SidePick.vue';
import UserDashboard from 'Pages/User/Dashboard.vue';
import UserLogin from 'Pages/User/Login.vue';
import UserProfile from 'Pages/User/Profile.vue';
import UserSignup from 'Pages/User/Signup.vue';
import Onboarding from 'Pages/User/Onboarding.vue';
import ManageAccount from 'Components/User/Settings/Overview.vue';
import PasswordReset from 'Pages/User/PasswordReset.vue';
import GetAccessCode from 'Pages/User/GetAccessCode.vue';
import NewResume from 'Pages/Resume/New.vue';
import auth from './auth';

const routes = [
  {
    path: '/login',
    name: 'User Login',
    component: UserLogin,
    props: true,
  },
  {
    path: '/user/id/:userId',
    name: 'User Profile',
    component: UserProfile,
    props: true,
    beforeEnter: auth.savedUser,
  },
  {
    path: '/signup',
    name: 'User Signup',
    component: UserSignup,
    props: true,
    beforeEnter: auth.unlogged,
  },
  {
    path: '/reset-password/:email',
    name: 'Password Reset',
    component: PasswordReset,
    beforeEnter: auth.unlogged,
  },
  {
    path: '/confirm-registration',
    name: 'Confirm User Registration',
    component: ConfirmRegistration,
    props: true,
    beforeEnter: auth.unlogged,
  },
  {
    path: '/confirm',
    name: 'Registration Confirmed',
    component: RegistrationConfirmed,
    props: true,
    beforeEnter: auth.unlogged,
  },
  {
    path: '/receive-code',
    name: 'Get Access Code',
    component: GetAccessCode,
    beforeEnter: auth.unlogged,
  },
  {
    path: '/side-pick',
    name: 'Side Pick',
    component: SidePick,
    props: true,
    // beforeEnter: auth.sidePick,
  },
  {
    path: '/user/dashboard',
    name: 'User Dashboard',
    component: UserDashboard,
    beforeEnter: auth.userDashboard,
  },
  {
    path: '/applications',
    name: 'User Applications',
    component: UserApplications,
    // TODO: beforeEnter
  },
  {
    path: '/settings',
    name: 'User Settings',
    component: ManageAccount,
  },
  {
    path: '/resume/new',
    name: 'Resume Form',
    component: NewResume,
    props: true,
    // beforeEnter: auth.login,
  },
  {
    path: '/github/oauth',
    name: 'GitHub OAuth',
    component: GitHubOauth,
    props: true,
    beforeEnter: auth.loggedIn,
  },
  {
    path: '/onboarding',
    name: 'Onbarding',
    component: Onboarding,
  },
];

export default routes;
