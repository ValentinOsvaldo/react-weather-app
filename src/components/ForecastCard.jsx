import { useMemo } from 'react';

export const ForecastCard = ({ day, date, unity }) => {
  const { maxtemp_c, maxtemp_f, mintemp_c, mintemp_f, condition } = day;
  const dateFormat = useMemo(() => {
    return new Date(date).toLocaleDateString('en-UK', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  }, [date]);
  
  return (
    <div className='forecast-card'>
      <h3> {dateFormat} </h3>
      <div className="card-condition">
        <img src={condition.icon} alt={condition.text} />
      </div>
      <p className='forecast-card__temp'>
        <span className='max-temp'>{unity === 'c' ? `${maxtemp_c}°c` : `${maxtemp_f}°f`}</span>{' '}
        <span className='min-temp'>{unity === 'c' ? `${mintemp_c}°c` : `${mintemp_f}°f`}</span>
      </p>
    </div>
  );
};
