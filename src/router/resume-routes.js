import NewResume from 'Pages/Resume/New';
import auth from './auth'

const routes = [
  {
    path: '/resume/new',
    name: 'Resume Form',
    component: NewResume,
    props: true,
    beforeEnter: auth.resumeForm,
  },
];

export default routes;
