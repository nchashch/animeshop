import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployeeEntries, deleteEmployeeEntry } from '../../../actions/security/employeeEntries';

export default function EmployeeEntriesList() {
  const dispatch = useDispatch();
  const employeeEntries = useSelector(state => state.employeeEntries);
  useEffect(() => {
    dispatch(fetchEmployeeEntries());
  }, [dispatch]);
  const employeeEntriesTrs = employeeEntries.map(
    employeeEntry =>
    <tr key={employeeEntry.id}>
      <td>{employeeEntry.id}</td>
      <td>{employeeEntry.unit}</td>
      <td>{employeeEntry.employee}</td>
      <td>{employeeEntry.enteredAt}</td>
      <td>{employeeEntry.exitedAt}</td>
      <td><button onClick={() => dispatch(deleteEmployeeEntry(employeeEntry.id))}>Удалить</button></td>
    </tr>
  );
  return (
    <Fragment>
      <h2>Журнал входа/выхода сотрудников</h2>
      <table width="100%">
        <thead>
        <tr>
          <th>Id</th>
          <th>Подразделение</th>
          <th>Сотрудник</th>
          <th>Когда вошел</th>
          <th>Когда вышел</th>
        </tr>
        </thead>
        <tbody>
        {employeeEntriesTrs}
        </tbody>
      </table>
    </Fragment>
  );
}
