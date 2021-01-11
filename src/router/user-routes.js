// import GitHubOauth from 'Pages/User/GitHubOauth';
import RegistrationConfirmed from 'Pages/User/RegistrationConfirmed';
import UserApplications from 'Pages/User/UserApplications';
import ConfirmRegistration from 'Pages/User/ConfirmRegistration';
import SidePick from 'Pages/User/SidePick';
import UserDashboard from 'Pages/User/Dashboard';
import UserLogin from 'Pages/User/Login';
import UserProfile from 'Pages/User/Profile';
import UserSignup from 'Pages/User/Signup';
import Onboarding from 'Pages/User/Onboarding';
import PasswordReset from 'Pages/User/PasswordReset';
import GetAccessCode from 'Pages/User/GetAccessCode';
import NewResume from 'Pages/Resume/New';
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
    path: '/password-reset',
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
    beforeEnter: auth.sidePick,
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
    path: '/resume/new',
    name: 'Resume Form',
    component: NewResume,
    props: true,
    // beforeEnter: auth.login,
  },
  /*
  {
    path: '/github/oauth',
    name: 'GitHub OAuth',
    component: GitHubOauth,
    props: true,
  },
  */
  {
    path: '/onboarding',
    name: 'Onbarding',
    component: Onboarding,
  },
];

export default routes;
