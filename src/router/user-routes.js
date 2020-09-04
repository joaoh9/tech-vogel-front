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
    path: '/user/profile/:id',
    name: 'User Profile',
    component: UserProfile,
  },
  {
    path: '/signup',
    name: 'Register',
    component: UserRegister,
  },
];

export default routes;
