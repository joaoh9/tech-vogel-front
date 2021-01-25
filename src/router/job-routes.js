import JobDetails from 'Pages/Job/JobDetails.vue';
import NewJob from 'Pages/Job/New.vue';
import Jobs from 'Pages/Job/JobList.vue';
import auth from './auth';

const routes = [
  {
    path: '/jobs/new',
    name: 'New Job',
    component: NewJob,
    props: true,
    beforeEnter: auth.savedCompany,
  },
  {
    path: '/jobs/:companyId/:jobId',
    name: 'Job Description',
    component: JobDetails,
    props: true,
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs,
    props: true,
  },
];

export default routes;
