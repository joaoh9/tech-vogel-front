import Vue from 'vue';

import FormInput from './FormInput';
import GAlerts from './GAlerts';
import GCard from './GCard';

[ FormInput, GAlerts, GCard ].forEach(component => {
  Vue.component(component.name, component);
});
