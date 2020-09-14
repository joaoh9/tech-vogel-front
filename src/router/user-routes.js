import UserProfile from 'Pages/User/Profile';
import UserLogin from 'Pages/User/Login';
import UserSignup from 'Pages/User/Signup';
import UserConfirmRegistration from 'Pages/User/ConfirmRegistration';

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
    path: '/signup/confirm',
    name: 'User Confirm Registration',
    component: UserConfirmRegistration,
  },
];

export default routes;
