import monthCount from './monthCount.json';
import companyType from './companyType.json';
import contractType from './contractType.json';
import experienceLevel from './experienceLevel.json';
import jobInterests from './jobInterests.json';
import payCheckTimeFrame from './payCheckTimeFrame.json';
import currencies from './currencies.json';
import timeFrame from './timeFrame.json';

export default {
  monthCount,
  companyType,
  contractType: [
    ...contractType,
    // { "text": "contract", "value": "CONTRACT" },
    // { "text": "internship", "value": "INTERNSHIP" },
  ],
  experienceLevel,
  jobInterests,
  payCheckTimeFrame,
  currencies,
  timeFrame,
};
