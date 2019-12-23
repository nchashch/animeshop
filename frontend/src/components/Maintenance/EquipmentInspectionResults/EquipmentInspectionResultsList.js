import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEquipmentInspectionResults, deleteEquipmentInspectionResult } from '../../../actions/maintenance/equipmentInspectionResults';

export default function EquipmentInspectionResultsList() {
  const dispatch = useDispatch();
  const equipmentInspectionResults = useSelector(state => state.equipmentInspectionResults);
  useEffect(() => {
    dispatch(fetchEquipmentInspectionResults());
  }, [dispatch]);
  const equipmentInspectionResultsTrs = equipmentInspectionResults.map(
    equipmentInspectionResult =>
    <tr key={equipmentInspectionResult.id}>
      <td>{equipmentInspectionResult.id}</td>
      <td>{equipmentInspectionResult.inspectedAt}</td>
      <td>{equipmentInspectionResult.inspectedBy}</td>
      <td>{equipmentInspectionResult.schedule}</td>
      <td>{equipmentInspectionResult.description}</td>
      <td><button onClick={() => dispatch(deleteEquipmentInspectionResult(equipmentInspectionResult.id))}>Delete</button></td>
    </tr>
  );
  return (
    <Fragment>
      <h2>EquipmentInspectionResults</h2>
      <table width="100%">
        <thead>
        <tr>
          <th>Id</th>
          <th>InspectedAt</th>
          <th>InspectedBy</th>
          <th>Schedule</th>
          <th>Description</th>
        </tr>
        </thead>
        <tbody>
        {equipmentInspectionResultsTrs}
        </tbody>
      </table>
    </Fragment>
  );
}
