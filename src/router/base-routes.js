import Home from '../components/Home/Home';
import AboutUs from '../components/AboutUs/AboutUs';
import Pricing from '../components/Pricing/Pricing';
import Hire from '../components/Hire/Hire';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';

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
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing,
  },
];

export default routes;
