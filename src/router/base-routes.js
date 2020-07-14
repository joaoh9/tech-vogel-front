import Home from 'Components/Home/Home';
import AboutUs from 'Components/AboutUs/AboutUs';
import Welcome from 'Components/Welcome/Welcome.vue';
import Pricing from 'Components/Pricing/Pricing';
import Hire from 'Components/Hire/Hire';
import Login from 'Components/Login/Login-2'
import Signup from 'Components/Login/Signup';
// import LandingPage from 'Components/LP/LandingPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // {
  // path: '/',
  // name: 'LandingPage',
  // component: LandingPage,
  // },
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome,
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
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing,
  },
];

export default routes;
