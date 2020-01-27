import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postEmployeeEntry } from '../../../actions/security/employeeEntries';
import { fetchEmployees } from '../../../actions/admin/employees';
import { fetchUnits } from '../../../actions/admin/units';
import useForm from 'react-hook-form';

export default function EmployeeEntryForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const employees = useSelector(state => state.employees);
  const units = useSelector(state => state.units);
  useEffect(() => {
    dispatch(fetchEmployees());
    dispatch(fetchUnits());
  }, [dispatch]);
  const onSubmit = values => {
    values.employee = Number(values.employee);
    values.unit = Number(values.unit);
    values.enteredAt = new Date(values.enteredAt).toISOString();
    values.exitedAt = new Date(values.enteredAt).toISOString();
    console.log(values);
    dispatch(postEmployeeEntry(values))
  };
  const employeeOptions = employees.map(
    employee => <option key={employee.id} value={employee.id}>{employee.name}</option>
  );
  const employeeSelect = (
    <select name="employee" ref={register}>
      {employeeOptions}
    </select>
  );
  const unitOptions = units.map(
    unit => <option key={unit.id} value={unit.id}>{unit.name}</option>
  );
  const unitSelect = (
    <select name="unit" ref={register}>
      {unitOptions}
    </select>
  );
  return (
    <Fragment>
      <h2>Добавить запись в журнал входа/выхода сотрудников</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Когда вошел: </label>
        <input name="enteredAt" type="datetime-local" ref={register}></input><br/>
        <label>Когда вышел: </label>
        <input name="exitedAt" type="datetime-local" ref={register}></input><br/>
        <label>Сотрудник: </label>
        {employeeSelect}<br/>
        <label>Подразделение: </label>
        {unitSelect}<br/>
        <button>Добавить</button>
      </form>
    </Fragment>
  );
}
