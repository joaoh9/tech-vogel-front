import JobListing from '@/components/Job/JobListing';
import UserProfile from 'Pages/User/Profile';
import UserRegister from 'Pages/User/Register';

const routes = [
  {
    path: '/dashboard',
    name: 'User Dashboard',
    component: JobListing,
  },
  {
    path: '/user1',
    name: 'User Profile',
    component: UserProfile,
  },
  {
    path: '/user/register',
    name: 'Register',
    component: UserRegister,
  },
];

export default routes;
