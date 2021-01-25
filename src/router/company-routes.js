import NewCompany from 'Pages/Company/New.vue';
import Dashboard from 'Pages/Company/Dashboard.vue';
import ManageJobs from 'Pages/Company/ManageJobs.vue';
import CandidateReport from 'Pages/Company/CandidateReport.vue';
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
