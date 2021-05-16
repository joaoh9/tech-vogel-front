import Home from 'Pages/Home/Home.vue';
import PrivacyPolicy from 'Pages/Static/PrivacyPolicy.vue';
import TermsOfService from 'Pages/Static/TermsOfService.vue';
import NotFound from 'Pages/Static/NotFound.vue';
import AboutUs from 'Components/Static/AboutUs.vue';
import FAQ from 'Pages/Static/FAQ.vue';
import Tips from 'Pages/Static/Tips.vue';
import Pricing from 'Pages/Static/Pricing.vue';
import Tests from 'Pages/Static/Tests.vue';
import RespondTests from 'Pages/Static/RespondTests.vue';

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
  {
    path: '/tests',
    name: 'Tests',
    component: Tests,
  },
  {
    path: '/tests/:id',
    name: 'Fill tests',
    component: RespondTests,
  },
];

export default routes;
