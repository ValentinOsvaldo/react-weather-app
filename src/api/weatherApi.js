import Axios from 'axios';

const KEY = 'fdc83429c0d0412599912706222007';

export const weatherApi = Axios.create({
  baseURL: 'http://api.weatherapi.com/v1',
  params: { key: KEY },
});
