import CompanyProfile from '@/components/Company/CompanyProfile.vue';
import CompanySettings from '@/components/Company/CompanySettings.vue';

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
