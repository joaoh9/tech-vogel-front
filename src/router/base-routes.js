import Home from 'Pages/Home/Home';
import PrivacyPolicy from 'Pages/Static/PrivacyPolicy';
import TermsOfService from 'Pages/Static/TermsOfService';
import NotFound from 'Pages/Static/NotFound';
import AboutUs from 'Components/Static/AboutUs';
import FAQ from 'Pages/Static/FAQ'
import Tips from 'Pages/Static/Tips';
import Pricing from 'Pages/Static/Pricing';

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
    component: AboutUs,
  },
  {
    path: '/how-it-works',
    name: 'How it works',
    component: Tips,
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing,
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: FAQ,
  },
];

export default routes;
