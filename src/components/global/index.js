import Vue from 'vue';

import FormInput from './FormInput';
import GAlerts from './GAlerts';
import GCard from './GCard';
import GCardHeader from './GCardHeader';

[ FormInput, GAlerts, GCard, GCardHeader ].forEach(component => {
  Vue.component(component.name, component);
});
