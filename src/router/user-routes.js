import UserLogin from 'Pages/User/Login';
import UserSignup from 'Pages/User/Signup';
import UserConfirmRegistration from 'Pages/User/ConfirmRegistration';
import RegistrationConfirmed from 'Pages/User/RegistrationConfirmed';
import UserDashboard from 'Pages/User/Dashboard';
import UserApplications from 'Pages/User/UserApplications';
import GitHubOauth from 'Pages/User/GitHubOauth'
import AccountSettings from 'Pages/User/AccountSettings'

const routes = [
  {
    path: '/login',
    name: 'User Login',
    component: UserLogin,
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
