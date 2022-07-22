export const HCard = ({ title, number, unity, children }) => {
  return (
    <div className="h-card">
      <h3 className="h-title"> {title} </h3>
      <div className="h-body">
        <p>
          <span className="h-number">{number}</span>
          <span className="h-unity"> {unity}</span>
        </p>
      </div>

      {children}
    </div>
  );
};
