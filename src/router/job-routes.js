import JobDetails from '@/components/Job/JobDetails';
import JobForm from '@/components/Job/JobForm';
import JobDashboard from '@/components/Job/JobDashboard';
import JobListing from '@/components/Job/JobListing';

const routes = [
  {
    path: '/job/dashboard',
    name: 'Job Dashboard',
    component: JobDashboard,
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: JobListing,
  },
  {
    path: '/job/new',
    name: 'New Job',
    component: JobForm,
  },
  {
    path: '/job/description',
    name: 'Job Description',
    component: JobDetails,
    props: true,
  },
];

export default routes;
