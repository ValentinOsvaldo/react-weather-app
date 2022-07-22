export const SearchForm = ({ searchCities, form, onInputChange }) => {
  return (
    <form className="search-form" onSubmit={searchCities}>
      <div className="input-container">
        <i className="bx bx-search-alt-2"></i>
        <input
          type="search"
          name="city"
          autoComplete="off"
          placeholder="search location"
          value={form.city}
          onChange={onInputChange}
        />
      </div>
      <button className="btn btn-submit">Search</button>
    </form>
  );
};
