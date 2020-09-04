import Home from 'Pages/Home/Home';
import Welcome from 'Components/Welcome/Welcome.vue';
import Hire from 'Components/Hire/Hire';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome,
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
