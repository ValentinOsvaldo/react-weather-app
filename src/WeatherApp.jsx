import { WeatherProvider } from './context';
import { WeatherPage } from './pages';

export const WeatherApp = () => {
  return (
    <WeatherProvider>
      <WeatherPage />
    </WeatherProvider>
  );
};
