import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

export const Units = () => {
  const { state, onCentigrade, onFahrenheit } = useContext(WeatherContext);

  return (
    <header className="details-header">
      <button
        className={`btn btn-units ${
          state.unity === 'c' ? 'active' : ''
        }`.trim()}
        onClick={onCentigrade}
      >
        °C
      </button>
      <button
        className={`btn btn-units ${
          state.unity === 'f' ? 'active' : ''
        }`.trim()}
        onClick={onFahrenheit}
      >
        °F
      </button>
    </header>
  );
};
