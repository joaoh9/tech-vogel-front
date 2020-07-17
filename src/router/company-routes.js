import CompanyProfile from '@/components/Company/CompanyProfile';
import CompanySettings from '@/components/Company/CompanySettings';
import NewCompany from 'Pages/Company/New';
import FirstSteps from '@/components/Company/FirstSteps';

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
  {
    path: '/company/new',
    name: 'New',
    component: NewCompany,
  },
  {
    path: '/company/first-steps',
    name: 'First Steps',
    component: FirstSteps,
  },
];

export default routes;
