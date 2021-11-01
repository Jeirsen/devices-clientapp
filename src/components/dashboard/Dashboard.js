import './Dashboard.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { sortByName, sortByHddCapacity } from '../../utils/utils';

import DeviceFilters from '../device-filters/DeviceFilters';
import DeviceItem from '../device-item/DeviceItem';

const Dashboard = () => {
  let [devices, setDevices] = useState(null);
  let [filteredDevices, setFilteredDevices] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let [currentFilter, setCurrentFilter] = useState('ALL');
  let [currentSort, setCurrentSort] = useState('NONE');

  useEffect(() => {
    try {
      async function getDevices() {
        let response = await axios.get('http://localhost:3000/devices');
        setDevices(response.data);
        setFilteredDevices(response.data);
        setCurrentFilter('ALL');
        setCurrentSort('NONE');
        setLoading(false);
        setError(null);
      }

      getDevices();
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }, []);

  const handleFilter = (e) => {
    setCurrentFilter(e.target.value);
    setCurrentSort('NONE');
    if (e.target.value === 'ALL') {
      setFilteredDevices(devices);
      return;
    }

    let foundDevices = devices.filter(
      (device) => device.type === e.target.value
    );

    setFilteredDevices(foundDevices);
  };

  const handleSort = (e) => {
    let sort = e.target.value;

    let sorted = filteredDevices;
    setCurrentSort(sort);
    switch (sort) {
      case 'SYSTEM_NAME':
        sorted = sorted.sort(sortByName);
        setFilteredDevices(sorted);
        break;
      case 'HDD_CAPACITY':
        sorted = sorted.sort(sortByHddCapacity);
        setFilteredDevices(sorted);
        break;
      default:
        setFilteredDevices(filteredDevices.sort(sortByName));
        break;
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/devices/${id}`);
      filteredDevices = filteredDevices.filter((device) => device.id !== id);
      setFilteredDevices(filteredDevices);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="dashboard">
      <DeviceFilters
        onFilter={handleFilter}
        currentFilter={currentFilter}
        onSort={handleSort}
        currentSort={currentSort}
      />
      {error && <p className="error">{error}</p>}
      {loading && (
        <div style={{ textAlign: 'center' }}>...Loading Devices </div>
      )}
      {filteredDevices &&
        filteredDevices.map((device) => (
          <DeviceItem
            device={device}
            key={device.id}
            onRemoveDevice={handleDelete}
          />
        ))}
    </div>
  );
};

export default Dashboard;
