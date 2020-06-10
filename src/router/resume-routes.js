import AddResume from '@/components/Resume/AddResume';
import ResumeView from '@/components/Resume/ResumeView';

const routes = [
  {
    path: '/addresume',
    name: 'Add Resumé',
    component: AddResume,
  },
  {
    path: '/resume',
    name: 'Resumé',
    component: ResumeView,
  },
];

export default routes;
