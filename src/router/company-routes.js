import NewCompany from 'Pages/Company/New';
import Dashboard from 'Pages/Company/Dashboard';
import ManageJobs from 'Pages/Company/ManageJobs';
import CandidateReport from 'Pages/Company/CandidateReport';
import auth from './auth';

const routes = [
  {
    path: '/company/dashboard',
    name: 'Company Dashboard',
    component: Dashboard,
    beforeEnter: auth.companyDashboard,
  },
  {
    path: '/company/new',
    props: true,
    name: 'New Company',
    component: NewCompany,
    beforeEnter: auth.newCompany,
  },
  {
    path: '/company/jobs',
    name: 'Manage Jobs',
    component: ManageJobs,
    props: true,
    beforeEnter: auth.savedCompany,
  },
  {
    path: '/company/report/:jobId',
    props: true,
    name: 'Candidate Report',
    component: CandidateReport,
    beforeEnter: auth.savedCompany,
  },
];

export default routes;
