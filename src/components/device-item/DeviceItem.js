import './DeviceItem.css';
import { useHistory } from 'react-router';

const DeviceItem = ({
  device: { id, system_name, type, hdd_capacity },
  onRemoveDevice,
}) => {
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/add-device/edit?id=${id}`);
  };

  return (
    <div className="device-item">
      <div className="device-info">
        <p>{system_name}</p>
        <p className="device-small">{type}</p>
        <p className="device-small">{hdd_capacity} GB</p>
      </div>
      <div className="device-actions">
        <button className="btn-primary" onClick={handleEdit}>
          Edit
        </button>
        <button className="btn-remove" onClick={() => onRemoveDevice(id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default DeviceItem;
