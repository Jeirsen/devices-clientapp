import './DeviceFilters.css';

const DeviceFilters = ({ onFilter, currentFilter, onSort, currentSort }) => {
  return (
    <div className="filters">
      <div className="filter-option">
        <p>Device Type: </p>
        <select onChange={onFilter} value={currentFilter}>
          <option value="ALL">All</option>
          <option value="WINDOWS_SERVER">Windows Server</option>
          <option value="WINDOWS_WORKSTATION">Windows Workstation</option>
          <option value="MAC">Mac</option>
        </select>
      </div>
      <div className="filter-option">
        <p>Sort By:</p>
        <select onChange={onSort} value={currentSort}>
          <option value="NONE">Select Option</option>
          <option value="SYSTEM_NAME">System Name</option>
          <option value="HDD_CAPACITY">HDD Capacity</option>
        </select>
      </div>
    </div>
  );
};

export default DeviceFilters;
