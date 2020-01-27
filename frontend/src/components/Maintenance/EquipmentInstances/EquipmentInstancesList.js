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
      <td><button onClick={() => dispatch(deleteEquipmentInstance(equipmentInstance.id))}>Удалить</button></td>
    </tr>
  );
  return (
    <Fragment>
      <h2>Еденицы оборудования</h2>
      <table width="100%">
        <thead>
        <tr>
          <th>Id</th>
          <th>Вид оборудования</th>
          <th>Комментарий</th>
          <th>Подразделение</th>
          <th>Расположение</th>
          <th>Когда установленно</th>
          <th>В рабочем состоянии</th>
        </tr>
        </thead>
        <tbody>
        {equipmentInstancesTrs}
        </tbody>
      </table>
    </Fragment>
  );
}
