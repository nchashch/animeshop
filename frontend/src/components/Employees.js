import React, { Fragment } from 'react';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';

export default function Employees() {
  return (
    <Fragment>
      <EmployeeForm/>
      <EmployeeList/>
    </Fragment>
  );
}
