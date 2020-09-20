import Vue from 'vue';

import FormInput from './FormInput';
import Alerts from './Alerts';

[ FormInput, Alerts ].forEach(component => {
  Vue.component(component.name, component);
});
