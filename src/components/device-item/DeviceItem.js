import './DeviceItem.css';

const DeviceItem = ({
  device: { id, system_name, type, hdd_capacity },
  handleDelete,
}) => {
  return (
    <div className="device-item">
      <span className="delete-device-item" onClick={() => handleDelete(id)}>
        X
      </span>
      <p>{system_name}</p>
      <p className="device-item-type">{type}</p>
      <p>{hdd_capacity} GB</p>
    </div>
  );
};

export default DeviceItem;
