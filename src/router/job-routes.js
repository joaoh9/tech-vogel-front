import JobDetails from '@/components/Job/JobDetails.vue';
import JobForm from '@/components/Job/JobForm.vue';
import JobDashboard from '@/components/Job/JobDashboard.vue';
import JobListing from '@/components/Job/JobListing.vue';

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
