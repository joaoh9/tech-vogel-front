import JobListing from '@/components/Job/JobListing';
import UserProfile from 'Pages/User/Profile';

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
];

export default routes;
