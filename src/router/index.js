import Vue from 'vue';
import VueRouter from 'vue-router';

import baseRoutes from './base-routes';
import companyRoutes from './company-routes';
import jobRoutes from './job-routes';
import resumeRoutes from './resume-routes';
import userRoutes from './user-routes'

Vue.use(VueRouter);

const routes = [];

routes.push(...baseRoutes);
routes.push(...companyRoutes);
routes.push(...jobRoutes);
routes.push(...resumeRoutes);
routes.push(...userRoutes);


export default new VueRouter({ routes });
