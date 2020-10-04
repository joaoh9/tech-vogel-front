import UserProfile from 'Pages/User/Profile';
import UserLogin from 'Pages/User/Login';
import UserSignup from 'Pages/User/Signup';
import UserConfirmRegistration from 'Pages/User/ConfirmRegistration';
import RegistrationConfirmed from 'Pages/User/RegistrationConfirmed';
import UserDashboard from 'Pages/ProfessionalDashboard/ProfessionalDashboard';
import GitHubOauth from 'Pages/User/GitHubOauth';

const routes = [
  {
    path: '/user/profile/:id',
    name: 'User Profile',
    component: UserProfile,
    props: true,
  },
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
    path: '/github/oauth',
    name: 'GitHub OAuth',
    component: GitHubOauth,
    props: true,
  },
];

export default routes;
