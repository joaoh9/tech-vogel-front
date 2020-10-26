import NewCompany from 'Pages/Company/New';
import Dashboard from 'Pages/Company/Dashboard';
import ManageJobs from 'Pages/Company/ManageJobs';

const routes = [
  {
    path: '/company/new',
    name: 'New Company',
    component: NewCompany,
    props: true,
  },
  {
    path: '/company/dashboard',
    name: 'Company Dashboard',
    component: Dashboard,
  },
  {
    path: '/company/jobs',
    name: 'Manage Jobs',
    component: ManageJobs,
  },
];

export default routes;
