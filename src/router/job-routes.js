import JobDetails from 'Pages/Job/JobDetails';
import NewJob from 'Pages/Job/New'
import UseMobileAndroidPleno from 'Pages/Job/UseMobileAndroidPleno'
import Jobs from 'Pages/Job/JobList'
import auth from './auth'


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
    path: '/jobs/exemplo',
    name: 'Android Pleno Use Mobile',
    component: UseMobileAndroidPleno,
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
