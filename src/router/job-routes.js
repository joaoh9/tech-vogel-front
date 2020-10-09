import JobDetails from 'Pages/Job/JobDetails';
import NewJob from 'Pages/Job/New'
import UseMobileAndroidPleno from 'Pages/Job/UseMobileAndroidPleno'
import Jobs from 'Pages/Jobs/JobList'

const routes = [
  {
    path: '/jobs/new',
    name: 'New Job',
    component: NewJob,
    props: true,
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
    propos: true,
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs,
  },
];

export default routes;
