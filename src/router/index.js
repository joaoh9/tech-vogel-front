import Vue from 'vue';
import VueRouter from 'vue-router';

import baseRoutes from './base-routes';
import companyRoutes from './company-routes';
import jobRoutes from './job-routes';
import userRoutes from './user-routes';
import testRoutes from './tests-routes';

Vue.use(VueRouter);

const routes = [];

routes.push(...baseRoutes);
routes.push(...companyRoutes);
routes.push(...jobRoutes);
routes.push(...userRoutes);
routes.push(...testRoutes);

export default new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
