import CompanyProfile from '@/components/Company/CompanyProfile';
import CompanySettings from '@/components/Company/CompanySettings';
import CompanyRegister from '@/components/Company/Register';
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
    path: '/company/register',
    name: 'Register',
    component: CompanyRegister,
  },
  {
    path: '/company/first-steps',
    name: 'First Steps',
    component: FirstSteps,
  },
];

export default routes;
