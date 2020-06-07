import CompanyProfile from '@/components/Company/CompanyProfile';
import CompanySettings from '@/components/Company/CompanySettings';

const routes = [
  {
    path: '/companyProfile',
    name: 'CompanyProfile',
    component: CompanyProfile,
  },
  {
    path: '/companySettings',
    name: 'CompanySettings',
    component: CompanySettings,
  },
];

export default routes;
