import JobDetails from '@/components/Job/JobDetails';
// import JobForm from '@/components/Job/JobForm';
import JobDashboard from '@/components/Job/JobDashboard';
import JobListing from '@/components/Job/JobListing';
// // import NewJob1 from 'Pages/Job/NewJob1';
import NewJob from 'Pages/Job/New'
import UseMobileAndroidPleno from 'Pages/Job/UseMobileAndroidPleno'

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
    component: NewJob,
  },
  {
    path: '/job/description',
    name: 'Job Description',
    component: JobDetails,
    props: true,
  },
  {
    path: '/job/android-pleno-usemobile',
    name: 'Android Pleno Use Mobile',
    component: UseMobileAndroidPleno,
    propos: true,
  },
];

export default routes;
