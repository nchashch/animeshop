import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEquipment, deleteEquipment } from '../../../actions/maintenance/equipment';

export default function EquipmentList() {
  const dispatch = useDispatch();
  const equipment = useSelector(state => state.equipment);
  useEffect(() => {
    dispatch(fetchEquipment());
  }, [dispatch]);
  const equipmentTrs = equipment.map(
    equipment =>
    <tr key={equipment.id}>
      <td>{equipment.id}</td>
      <td>{equipment.name}</td>
      <td>{equipment.description}</td>
      <td><button onClick={() => dispatch(deleteEquipment(equipment.id))}>Удалить</button></td>
    </tr>
  );
  return (
    <Fragment>
      <h2>Виды оборудования</h2>
      <table width="100%">
        <thead>
        <tr>
          <th>Id</th>
          <th>Название</th>
          <th>Описание</th>
        </tr>
        </thead>
        <tbody>
        {equipmentTrs}
        </tbody>
      </table>
    </Fragment>
  );
}
