import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEquipmentInspectionSchedules, deleteEquipmentInspectionSchedule } from '../../../actions/maintenance/equipmentInspectionSchedules';

export default function EquipmentInspectionSchedulesList() {
  const dispatch = useDispatch();
  const equipmentInspectionSchedules = useSelector(state => state.equipmentInspectionSchedules);
  useEffect(() => {
    dispatch(fetchEquipmentInspectionSchedules());
  }, [dispatch]);
  const equipmentInspectionSchedulesTrs = equipmentInspectionSchedules.map(
    equipmentInspectionSchedule =>
    <tr key={equipmentInspectionSchedule.id}>
      <td>{equipmentInspectionSchedule.id}</td>
      <td>{equipmentInspectionSchedule.employee}</td>
      <td>{equipmentInspectionSchedule.equipmentInstance}</td>
      <td>{equipmentInspectionSchedule.dateTime}</td>
      <td>{equipmentInspectionSchedule.completed ? '[x]' : '[  ]'}</td>
      <td><button onClick={() => dispatch(deleteEquipmentInspectionSchedule(equipmentInspectionSchedule.id))}>Delete</button></td>
    </tr>
  );
  return (
    <Fragment>
      <h2>EquipmentInspectionSchedules</h2>
      <table width="100%">
        <thead>
        <tr>
          <th>Id</th>
          <th>Employee</th>
          <th>EquipmentInstance</th>
          <th>DateTime</th>
          <th>Completed</th>
        </tr>
        </thead>
        <tbody>
        {equipmentInspectionSchedulesTrs}
        </tbody>
      </table>
    </Fragment>
  );
}
