import Home from 'Components/Home/Home';
import AboutUs from 'Components/AboutUs/AboutUs';
import Pricing from 'Components/Pricing/Pricing';
import Hire from 'Components/Hire/Hire';
import Login from 'Components/Login/Login';
import Signup from 'Components/Signup/Signup';

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
