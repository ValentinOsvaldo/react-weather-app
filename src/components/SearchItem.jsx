export const SearchItem = ({ city, setCity }) => {
  return (
    <div
      className="result-item"
      onClick={() => setCity(city.name)}
    >
      <p>
        {city.name}, {city.country}
      </p>
      <i className="bx bx-chevron-right"></i>
    </div>
  );
};
