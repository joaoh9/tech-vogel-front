import NewCompany from 'Pages/Company/New';
import Dashboard from 'Pages/Company/Dashboard';
import ManageJobs from 'Pages/Company/ManageJobs';
import CandidateReport from 'Pages/Company/CandidateReport'

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
  {
    path: '/report/:companyId/:jobId',
    name: 'Candidate Report',
    component: CandidateReport,
    props: true,
  },
];

export default routes;
