import Home from 'Pages/Home/Home';
import PrivacyPolicy from 'Pages/Static/PrivacyPolicy';
import TermsOfService from 'Pages/Static/TermsOfService';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true,
  },
  {
    path: '/privacy-policy',
    name: 'Privacy Policy',
    component: PrivacyPolicy,
  },
  {
    path: '/terms-of-service',
    name: 'Terms of Service',
    component: TermsOfService,
  },
  // TODO
  /*
  {
    path: '/terms-and-conditions',
    name: 'Terms and Conditions',
    component: null, // TODO
  },
  {
    path: '/aboutus',
    name: 'About us',
    component: null, // TODO
  },
  {
    path: '/about-us',
    name: 'About us',
    component: null, // TODO
  },
  */
];

export default routes;
