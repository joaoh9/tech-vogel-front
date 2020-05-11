import Home from '../components/Home/Home.vue';
import Login from '../components/Login/Login.vue';
import Signup from '../components/Signup/Signup.vue';
import AboutUs from '../components/AboutUs/AboutUs.vue';
import Hire from '../components/Hire/Hire.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/aboutus',
    name: 'About Us',
    component: AboutUs,
  },
  {
    path: '/hire',
    name: 'Hire',
    component: Hire,
  },

  {
    path: '/apply',
    name: 'Apply',
  },
];

export default routes;
