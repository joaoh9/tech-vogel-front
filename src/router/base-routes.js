import Home from 'Pages/Home/Home';
import PrivacyPolicy from 'Pages/Static/PrivacyPolicy';
import TermsOfService from 'Pages/Static/TermsOfService';
import NotFound from 'Pages/Static/NotFound';
import AboutUs from 'Components/Static/AboutUs';
import HowItWorks from 'Components/Static/HowItWorks';
import FAQ from 'Pages/Static/FAQ'

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
    path: '/about-us',
    name: 'About us',
    component: AboutUs, // TODO
  },
  {
    path: '/how-it-works',
    name: 'How it works',
    component: HowItWorks,
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: FAQ,
  },
];

export default routes;
