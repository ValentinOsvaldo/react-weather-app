import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import { HCard } from './HCard';
import { Percentagebar } from './Percentagebar';

export const Hightlights = () => {
  const { state } = useContext(WeatherContext);
  const { weather } = state;

  return (
    <article>
      <h2>Today's Highlights</h2>

      <div className="grid">
        <HCard
          title="Wind status"
          number={weather.current.wind_mph}
          unity="mph"
        >
          <p>{weather.current.wind_dir}</p>
        </HCard>

        <HCard title="Humidity" number={weather.current.humidity} unity="%">
          <Percentagebar value={weather.current.humidity} />
        </HCard>

        <HCard
          title="Visibility"
          number={weather.current.vis_miles}
          unity="miles"
        />
        <HCard
          title="Air Pressure"
          number={weather.current.pressure_mb}
          unity="mb"
        />
      </div>
    </article>
  );
};
