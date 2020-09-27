import Vue from 'vue';

import FormInput from './FormInput';
import GAlerts from './GAlerts';
import GCard from './GCard';
import GCardHeader from './GCardHeader';
import GButton from './Button';
import PrimaryButton from './Buttons/Primary';
import SecondaryButton from './Buttons/Secondary';

[ FormInput, GAlerts, GCard, GCardHeader, PrimaryButton, SecondaryButton, GButton ].forEach(component => {
  Vue.component(component.name, component);
});
