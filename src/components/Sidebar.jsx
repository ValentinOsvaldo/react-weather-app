import { useContext, useMemo } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import { getCurrentLocation } from '../helpers/getCurrentLocation';
import Background from '../assets/Cloud-background.png';

export const Sidebar = () => {
  const { state, setCurrentLocation, onOpenBar } = useContext(WeatherContext);
  const { weather, unity } = state

  const dateFormat = useMemo(() => {
    return new Date(weather.location.localtime).toLocaleDateString('en-UK', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  }, [weather.location.localtime]);

  const onCurrentLocation = () => {
    getCurrentLocation()
      .then((resp) => {
        setCurrentLocation(resp);
      })
      .catch((err) => console.error(err));
  };

  return (
    <aside className="current-sidebar">
      <header className="current-nav">
        <button className="btn btn-primary" onClick={onOpenBar}>
          Search for pleace
        </button>
        <button className="btn btn-rounded" onClick={onCurrentLocation}>
          <i className="bx bx-current-location"></i>
        </button>
      </header>

      <div className="weather-status">
        <img src={Background} alt="background" className="img-bg" />
        <img
          src={weather.current.condition.icon}
          alt={weather.current.condition.text}
          className="w-icon"
        />
      </div>

      <div className="weather-info">
        <h1>
          {unity === 'c' ? (
            <span className="temp-number">
              {weather.current.temp_c}
              <span className="temp-u">°c</span>
            </span>
          ) : (
            <span className="temp-number">
              {weather.current.temp_f}
              <span className="temp-u">°f</span>
            </span>
          )}
        </h1>
        <h2 className="current-condition">
          {weather.current.condition.text}
        </h2>
      </div>

      <div className="current-location">
        <p> Today - { dateFormat } </p>
        <p className="current-city">
          <i className="bx bxs-map"></i> {weather.location.name}
        </p>
      </div>
    </aside>
  );
};
