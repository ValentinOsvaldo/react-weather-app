import { useState } from 'react';
import { weatherApi } from '../api/weatherApi';

export const useSearch = (state, setCurrentLocation, onCloseBar) => {
  const [form, setForm] = useState({
    city: '',
  });
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onInputChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const getCities = async () => {
    setIsLoading(true);
    const resp = await weatherApi.get('search.json', {
      params: {
        q: form.city,
      },
    });

    if (resp.data.length === 0) {
      setIsLoading(false);
      return;
    }

    setIsLoading(false);
    setCities(resp.data);
    setForm({
      city: '',
    });
  };

  const searchCities = (e) => {
    e.preventDefault();

    if (form.city === '') {
      alert('Please, input a city');
      return;
    }

    getCities();
  };

  const setCity = (city) => {
    setCurrentLocation(city);
    onCloseBar();
    setCities([]);
  };

  return {
    form,
    cities,
    isLoading,
    onInputChange,
    searchCities,
    setCity,
  };
};
