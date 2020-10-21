import AccountSettings from 'Pages/User/AccountSettings'
import GitHubOauth from 'Pages/User/GitHubOauth'
import RegistrationConfirmed from 'Pages/User/RegistrationConfirmed';
import UserApplications from 'Pages/User/UserApplications';
import UserConfirmRegistration from 'Pages/User/ConfirmRegistration';
import UserDashboard from 'Pages/User/Dashboard';
import UserLogin from 'Pages/User/Login';
import UserProfile from 'Pages/User/Profile';
import UserSignup from 'Pages/User/Signup';

const routes = [
  {
    path: '/login',
    name: 'User Login',
    component: UserLogin,
    props: true,
  },
  {
    path: '/user/profile',
    name: 'User Profile',
    component: UserProfile,
    props: true,
  },
  {
    path: '/signup',
    name: 'User Sign up',
    component: UserSignup,
    props: true,
  },
  {
    path: '/confirm-registration',
    name: 'Confirm User Registration',
    component: UserConfirmRegistration,
    props: true,
  },
  {
    path: '/confirm-registration/:id',
    name: 'Registration Confirmed',
    component: RegistrationConfirmed,
  },
  {
    path: '/dashboard',
    name: 'User Dashboard',
    component: UserDashboard,
    props: true,
  },
  {
    path: '/applications',
    name: 'User Applications',
    component: UserApplications,
  },
  {
    path: '/github/oauth',
    name: 'GitHub OAuth',
    component: GitHubOauth,
    props: true,
  },
  {
    path: '/account/settings',
    name: 'Account settings',
    component: AccountSettings,
  },
];

export default routes;
