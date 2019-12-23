import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEquipmentInstances, deleteEquipmentInstance } from '../../../actions/maintenance/equipmentInstances';

export default function EquipmentInstancesList() {
  const dispatch = useDispatch();
  const equipmentInstances = useSelector(state => state.equipmentInstances);
  useEffect(() => {
    dispatch(fetchEquipmentInstances());
  }, [dispatch]);
  const equipmentInstancesTrs = equipmentInstances.map(
    equipmentInstance =>
    <tr key={equipmentInstance.id}>
      <td>{equipmentInstance.id}</td>
      <td>{equipmentInstance.model}</td>
      <td>{equipmentInstance.comment}</td>
      <td>{equipmentInstance.unit}</td>
      <td>{equipmentInstance.location}</td>
      <td>{equipmentInstance.installedAt}</td>
      <td>{equipmentInstance.operational ? '[x]' : '[  ]'}</td>
      <td><button onClick={() => dispatch(deleteEquipmentInstance(equipmentInstance.id))}>Delete</button></td>
    </tr>
  );
  return (
    <Fragment>
      <h2>EquipmentInstances</h2>
      <table width="100%">
        <thead>
        <tr>
          <th>Id</th>
          <th>Model</th>
          <th>Comment</th>
          <th>Unit</th>
          <th>Location</th>
          <th>InstalledAt</th>
          <th>Operational</th>
        </tr>
        </thead>
        <tbody>
        {equipmentInstancesTrs}
        </tbody>
      </table>
    </Fragment>
  );
}
