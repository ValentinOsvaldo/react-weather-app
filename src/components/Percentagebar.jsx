export const Percentagebar = ({ value }) => {
  return (
    <div className="percentage-bar">
      <div className="bar-header">
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>
      <div className="bar">
        <div className="percentage" style={{ width: `${value}%` }}></div>
      </div>
      <div className="flex-end">
        <span>%</span>
      </div>
    </div>
  );
};
