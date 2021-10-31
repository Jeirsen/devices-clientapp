import './DeviceForm.css';
import { Redirect, useParams } from 'react-router';
import { useState } from 'react';
import axios from 'axios';

const DeviceForm = () => {
  const { action } = useParams();
  const [systemName, setSystemName] = useState('');
  const [type, setType] = useState('none');
  const [hddCapacity, setHddCapacity] = useState('');
  const [error, setError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (action === 'add') {
      if (systemName === '' || type === 'none' || hddCapacity === '') {
        setError(true);
        return;
      }

      setError(false);
      try {
        let response = await axios.post('http://localhost:3000/devices', {
          system_name: systemName,
          type: type,
          hdd_capacity: hddCapacity,
        });

        setSystemName('');
        setType('none');
        setHddCapacity('');
        setIsSuccess(true);
      } catch (error) {
        setIsSuccess(false);
        console.log(error);
      }
    } else {
      // Update
    }
  };

  const handleHddCapacity = (e) => {
    let value = e.target.value;

    if (value === '') {
      setHddCapacity('');
      return;
    }

    if (!Number(value)) {
      return;
    }

    setHddCapacity(value);
  };

  const handleCancel = () => {};

  return (
    <div className="device-form-container">
      {isSuccess && <Redirect to="/" />}

      <h1>{action === 'add' ? 'Add Device' : 'Edit Device'}</h1>

      <form onSubmit={handleSubmit}>
        {error && <p className="error">You must provide all required fields</p>}
        <div className="field">
          <label htmlFor="systemName">System Name *</label>
          <input
            id="systemName"
            type="text"
            value={systemName}
            onChange={(e) => setSystemName(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="type">Type *</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="none">Select an option</option>
            <option value="Windows Server">Windows Server</option>
            <option value="Windows WorkStation">Windows Workstation</option>
            <option value="Mac">Mac</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="hddCapacity">HDD Capacity (GB) *</label>
          <input
            id="hddCapacity"
            type="text"
            value={hddCapacity}
            onChange={handleHddCapacity}
          />
        </div>

        <div className="action-btns">
          <button className="btn-primary" type="submit">
            Save
          </button>
          <button className="btn-cancel" type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeviceForm;
