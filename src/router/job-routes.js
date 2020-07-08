import JobDetails from '@/components/Job/JobDetails';
import JobForm from '@/components/Job/JobForm';
import JobDashboard from '@/components/Job/JobDashboard';
import JobListing from '@/components/Job/JobListing';
import NewJob1 from '@/components/Job/NewJob1';
import NewJob2 from '@/components/Job/NewJob2';
import NewJob3 from '@/components/Job/NewJob3';
import NewJob4 from '@/components/Job/NewJob4';
import NewJob5 from '@/components/Job/NewJob5';

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
  {
    path: '/job/new/1',
    name: 'NewJob1',
    component: NewJob1,
    props: true,
  },
  {
    path: '/job/new/2',
    name: 'NewJob2',
    component: NewJob2,
    props: true,
  },
  {
    path: '/job/new/3',
    name: 'NewJob3',
    component: NewJob3,
    props: true,
  },
  {
    path: '/job/new/4',
    name: 'NewJob4',
    component: NewJob4,
    props: true,
  },
  {
    path: '/job/new/5',
    name: 'NewJob5',
    component: NewJob5,
    props: true,
  },
];

export default routes;
