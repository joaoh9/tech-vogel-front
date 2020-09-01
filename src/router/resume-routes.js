import AddResume from '@/components/Resume/AddResume';
import ResumeView from '@/components/Resume/ResumeView';
import NewResume from 'Pages/Resume/New';

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
  {
    path: '/resume/new',
    name: 'New Resumé',
    component: NewResume,
  },
];

export default routes;
