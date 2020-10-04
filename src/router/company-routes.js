import NewCompany from 'Pages/Company/New';
import Dashboard from 'Pages/Company/Dashboard';

const routes = [
  {
    path: '/company/new',
    name: 'New',
    component: NewCompany,
    props: true,
  },
  {
    path: '/company/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
];

export default routes;
