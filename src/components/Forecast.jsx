import { useContext, useEffect, useState } from 'react';
import { weatherApi } from '../api/weatherApi';
import { WeatherContext } from '../context/WeatherContext';
import { ForecastCard } from './ForecastCard';

export const Forecast = () => {
  const { state } = useContext(WeatherContext);
  const [forecast, setForecast] = useState([]);

  const getForecast = async () => {
    const resp = await weatherApi.get('forecast.json', {
      params: {
        q: state.location,
        days: 5,
      },
    });

    setForecast(resp.data.forecast.forecastday);
  };

  useEffect(() => {
    getForecast();
  }, [state]);

  return (
    <div className="forecast-container">
      { forecast.map(day => (
        <ForecastCard key={day.date} date={ day.date } {...day} unity={state.unity} />
      )) }
    </div>
  );
};
