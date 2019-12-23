import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees, deleteEmployee } from '../../../actions/admin/employees';

export default function EmployeesList() {
  const dispatch = useDispatch();
  const employees = useSelector(state => state.employees);
  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);
  const employeesTrs = employees.map(
    employee =>
    <tr key={employee.id}>
      <td>{employee.id}</td>
      <td>{employee.name}</td>
      <td>{employee.unit}</td>
      <td><button onClick={() => dispatch(deleteEmployee(employee.id))}>Delete</button></td>
    </tr>
  );
  return (
    <Fragment>
      <h2>Employees</h2>
      <table width="100%">
        <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Unit</th>
        </tr>
        </thead>
        <tbody>
        {employeesTrs}
        </tbody>
      </table>
    </Fragment>
  );
}
