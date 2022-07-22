import { useContext, useEffect } from 'react';
import { weatherApi } from '../api/weatherApi';
import { Details, SearchBar, Sidebar } from '../components';
import { WeatherContext } from '../context/WeatherContext';

export const WeatherPage = () => {
  const { state, setCurrentWeather } = useContext(WeatherContext);

  const getCurrentWeather = async () => {
    const resp = await weatherApi.get('current.json', {
      params: {
        q: state.location,
      },
    });

    setCurrentWeather(resp.data);
  };

  useEffect(() => {
    getCurrentWeather();
  }, [state.location]);

  return (
    <main className="main-container">
      <SearchBar />
      <Sidebar />
      <Details />
    </main>
  );
};
