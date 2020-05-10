import JobDescription from '@/components/Job/JobDescription.vue';
import JobForm from '@/components/Job/JobForm.vue';

const routes = [
  {
    path: '/job',
    name: 'Job',
    component: JobForm,
  },
  {
    path: '/job/:id',
    name: 'JobDescription',
    component: JobDescription,
    props: true,
  },
];

export default routes;
