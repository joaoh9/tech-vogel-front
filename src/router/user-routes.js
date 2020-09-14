import UserProfile from 'Pages/User/Profile';
import UserRegister from 'Pages/User/Register';
import UserLogin from 'Pages/User/Login';

const routes = [
  {
    path: '/user/profile/:id',
    name: 'User Profile',
    component: UserProfile,
  },
  {
    path: '/signup',
    name: 'Register',
    component: UserRegister,
  },
  {
    path: '/login',
    name: 'User Login',
    component: UserLogin,
  },
];

export default routes;
