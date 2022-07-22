import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import { useSearch } from '../hooks';
import { SearchItem, SearchForm } from './';

export const SearchBar = () => {
  const { state, setCurrentLocation, onCloseBar } = useContext(WeatherContext);
  const { cities, form, isLoading, onInputChange, searchCities, setCity } =
    useSearch(state, setCurrentLocation, onCloseBar);

  return (
    <nav className={`search-nav ${state.activeSearch ? 'active' : ''}`.trim()}>
      <button className="btn btn-close" onClick={onCloseBar}>
        &times;
      </button>

      <SearchForm
        form={form}
        onInputChange={onInputChange}
        searchCities={searchCities}
      />

      {isLoading ? (
        <div className="loader">
          <i className="bx bx-loader-alt"></i>
        </div>
      ) : (
        <div className="search-results">
          {cities.length === 0 ? (
            <p>No results</p>
          ) : (
            cities
              .slice(0, 5)
              .map((city) => (
                <SearchItem key={city.name} city={city} setCity={setCity} />
              ))
          )}
        </div>
      )}
    </nav>
  );
};
