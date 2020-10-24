import Home from 'Pages/Home/Home';
import PrivacyPolicy from 'Pages/Static/PrivacyPolicy';
import TermsOfService from 'Pages/Static/TermsOfService';
import NotFound from 'Pages/Static/NotFound';
import AboutUs from 'Components/Static/AboutUs';
import HowItWorks from 'Components/Static/HowItWorks';

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
  {
    path: '*',
    name: 'Not Found',
    component: NotFound,
  },
  {
    path: '/aboutus',
    name: 'About us',
    component: AboutUs, // TODO
  },
  {
    path: '/how-it-works',
    name: 'How it works',
    component: HowItWorks,
  },
  // TODO
  /*
  pricing
  how-it-works
  {
    path: '/terms-and-conditions',
    name: 'Terms and Conditions',
    component: null, // TODO
  },
  */
];

export default routes;
