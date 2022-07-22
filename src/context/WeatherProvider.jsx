import { useEffect, useReducer } from 'react';
import { WeatherContext } from './WeatherContext';
import { weatherReducer } from './weatherReducer';

const INITIAL_STATE = {
  location: 'Monterrey',
  unity: 'c',
  activeSearch: false,
  weather: {
    current: {
      condition: {
        icon: '',
        text: ''
      }
    },
    location: {},
  },
};

const init = () => {
  return JSON.parse(localStorage.getItem('location')) || INITIAL_STATE;
};

export const WeatherProvider = ({ children }) => {
  const [state, dispatch] = useReducer(weatherReducer, {}, init);

  useEffect(() => {
    localStorage.setItem('location', JSON.stringify(state));
  }, [state]);

  const setCurrentLocation = (location) => {
    const action = {
      type: 'Add Location',
      payload: location,
    };

    dispatch(action);
  };

  const setCurrentWeather = (weather) => {
    const action = {
      type: 'Add Weather',
      payload: weather,
    };

    dispatch(action);
  };

  const onOpenBar = () => {
    dispatch({ type: 'Open Bar' });
  };

  const onCloseBar = () => {
    dispatch({ type: 'Close Bar' });
  };

  const onCentigrade = () => {
    dispatch({
      type: 'Set C',
    });
  };

  const onFahrenheit = () => {
    dispatch({
      type: 'Set F',
    });
  };

  return (
    <WeatherContext.Provider
      value={{
        state,
        setCurrentLocation,
        setCurrentWeather,
        onOpenBar,
        onCloseBar,
        onCentigrade,
        onFahrenheit,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
