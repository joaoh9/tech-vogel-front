import JobDescription from '@/components/Job/JobDescription.vue';
import JobForm from '@/components/Job/JobForm.vue';
import JobDashboard from '@/components/Job/JobDashboard.vue';

const routes = [
  {
    path: '/job/dashboard',
    name: 'Job Dashboard',
    component: JobDashboard,
  },
  {
    path: '/job/new',
    name: 'New Job',
    component: JobForm,
  },
  {
    path: '/job/:id',
    name: 'Job Description',
    component: JobDescription,
    props: true,
  },
];

export default routes;
