import Axios from 'Helpers/axios';

export default class JobController {
  async getAllCountriesInfo() {
    const axios = await Axios.GetInstance();

    const { data } = await axios.get('/v1/location/countries/info?limit=250');

    return data;
  }

  async getCountriesInfo() {
    const axios = await Axios.GetInstance();

    const { data } = await axios.get('/v1/location/countries/info');

    return data;
  }

  async getStatesInfoFromCountry(countryId) {
    const axios = await Axios.GetInstance();

    const { data } = await axios.get(`/v1/location/states/info/country/${countryId}?limit=1000`);

    return data;
  }

  async getCitiesInfoFromState(stateId) {
    const axios = await Axios.GetInstance();

    const { data } = await axios.get(`/v1/location/cities/info/state/${stateId}?limit=1000`);

    return data;
  }
}
