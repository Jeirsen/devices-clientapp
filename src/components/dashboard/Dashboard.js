import './Dashboard.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import DeviceFilters from '../device-filters/DeviceFilters';
import DeviceItem from '../device-item/DeviceItem';

const Dashboard = () => {
  const [devices, setDevices] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentFilter, setCurrentFilter] = useState('All');

  useEffect(async () => {
    let response = await axios.get('http://localhost:3000/devices');
    setDevices(response.data);
    setLoading(false);
  }, [devices]);

  const handleFilterBy = (e) => {
    let filteredDevices = devices.filter(
      (device) => device.type === e.target.value
    );

    setDevices(filteredDevices);
  };

  const handleDelete = async (id) => {
    let response = await axios.delete(`http://localhost:3000/devices/${id}`);
  };

  return (
    <div className="dashboard">
      <DeviceFilters onFilterBy={handleFilterBy} />
      {loading && (
        <div style={{ textAlign: 'center' }}>...Loading Devices </div>
      )}
      {devices &&
        devices.map((device) => (
          <DeviceItem
            device={device}
            key={device.id}
            handleDelete={handleDelete}
          />
        ))}
    </div>
  );
};

export default Dashboard;
