import NewCompany from 'Pages/Company/New';
import Dashboard from 'Pages/Company/Dashboard';
import ManageJobs from 'Pages/Company/ManageJobs';
import CandidateReport from 'Pages/Company/CandidateReport'
import auth from './auth';

import UserController from '../controllers/user';

const userController = new UserController();



const routes = [
  {
    path: '/company/dashbord',
    name: 'Company Dashboard',
    component: Dashboard,
    beforeEnter: auth.requireCompany,
  },
  {
    path: '/company',
    props: true,
    children: [
      {
        path: '/new',
        name: 'New Company',
        component: NewCompany,
      },
      {
        path: '/jobs',
        name: 'Manage Jobs',
        component: ManageJobs,
      },
      {
        path: '/report/:companyId/:jobId',
        name: 'Candidate Report',
        component: CandidateReport,
        props: true,
      },
    ],
    beforeEnter(to, from, next) {
      const userInfo = userController.decodeUserToken();
      console.log('🚀 ~ file: auth.js ~ line 7 ~ requireCompany ~ userInfo', userInfo);

      if (!userInfo) {
        return next({
          name: 'User Login',
        });
      }

      if (userInfo.side >= 20 && userInfo.side <= 29) {
        return next();
      }

      if (userInfo.side >= 10 && userInfo.side <= 19) {
        return next({
          name: 'User Dashboard',
        });
      }

      return next({
        name: 'Side Pick',
      })
    },
  },
];

export default routes;
