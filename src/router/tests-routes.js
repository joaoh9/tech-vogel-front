import Tests from 'Pages/Static/Tests.vue';
import NewTest from 'Components/Tests/NewTest.vue';
import TestsByTag from 'Components/Tests/TestsByTag.vue';
import TestsDashboard from 'Components/Tests/TestsDashboard.vue';
import auth from './auth';

const routes = [
  {
    path: '/tests',
    name: 'Tests',
    component: Tests,
    beforeEnter: auth.loggedIn,
  },
  {
    path: '/tests/new',
    name: 'NewTest',
    component: NewTest,
    beforeEnter: auth.admin,
  },
  {
    path: '/tests/dashboard',
    name: 'TestsDashboard',
    component: TestsDashboard,
    beforeEnter: auth.loggedIn,
  },
  {
    path: '/tests/tag/:tagId',
    name: 'Fill tests',
    component: TestsByTag,
    beforeEnter: auth.loggedIn,
  },
];

export default routes;
