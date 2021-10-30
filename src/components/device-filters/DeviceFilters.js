import './DeviceFilters.css';

const DeviceFilters = ({ onFilterBy, onSortBy }) => {
  return (
    <div className="filters">
      <div className="filter-option">
        <p>Device Type: </p>
        <select onChange={onFilterBy}>
          <option value="All">All</option>
          <option value="Windows Server">Windows Server</option>
          <option value="Windows WorkStation">Windows WorkStation</option>
          <option value="Mac">Mac</option>
        </select>
      </div>
      <div className="filter-option">
        <p>Sort By:</p>
        <select onChange={() => onSortBy}>
          <option>HDD Capacity</option>
          <option>System Name</option>
        </select>
      </div>
    </div>
  );
};

export default DeviceFilters;
