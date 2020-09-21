import UserProfile from 'Pages/User/Profile';
import UserLogin from 'Pages/User/Login';
import UserSignup from 'Pages/User/Signup';
import UserConfirmRegistration from 'Pages/User/ConfirmRegistration';
import UserDashboard from 'Pages/User/Dashboard';

const routes = [
  {
    path: '/user/profile/:id',
    name: 'User Profile',
    component: UserProfile,
  },
  {
    path: '/login',
    name: 'User Login',
    component: UserLogin,
  },
  {
    path: '/signup',
    name: 'User Sign up',
    component: UserSignup,
  },
  {
    path: '/confirm-registration',
    name: 'Confirm User Registration',
    component: UserConfirmRegistration,
  },
  {
    path: '/dashboard',
    name: 'User Dashboard',
    component: UserDashboard,
  },
];

export default routes;
