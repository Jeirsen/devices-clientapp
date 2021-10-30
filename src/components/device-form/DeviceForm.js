import './DeviceForm.css';
import { useParams } from 'react-router';

const DeviceForm = () => {
  const { action } = useParams();
  return (
    <div className="device-form-container">
      <h1>{action === 'add' ? 'Add Device' : 'Edit Device'}</h1>
      <form action="">
        <div className="field">
          <label htmlFor="systemName">System Name *</label>
          <input id="systemName" type="text" />
        </div>
        <div className="field">
          <label htmlFor="type">Type *</label>
          <input id="type" type="text" />
        </div>
        <div className="field">
          <label htmlFor="hddCapacity">HDD Capacity *</label>
          <input id="hddCapacity" type="text" />
        </div>
      </form>
    </div>
  );
};

export default DeviceForm;
