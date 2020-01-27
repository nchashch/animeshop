import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postEquipmentInspectionSchedule } from '../../../actions/maintenance/equipmentInspectionSchedules';
import { fetchEquipmentInstances } from '../../../actions/maintenance/equipmentInstances';
import { fetchEmployees } from '../../../actions/admin/employees';
import useForm from 'react-hook-form';

export default function EquipmentInspectionScheduleForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const equipmentInstances = useSelector(state => state.equipmentInstances);
  const employees = useSelector(state => state.employees);
  useEffect(() => {
    dispatch(fetchEquipmentInstances());
    dispatch(fetchEmployees());
  }, [dispatch]);
  const onSubmit = values => {
    values.equipmentInstance = Number(values.equipmentInstance);
    values.employee = Number(values.employee);
    values.dateTime = new Date(values.installedAt).toISOString();
    values.completed = false;
    console.log(values);
    dispatch(postEquipmentInspectionSchedule(values))
  };
  const equipmentInstancesOptions = equipmentInstances.map(
    equipmentInstance => <option key={equipmentInstance} value={equipmentInstance.id}>{equipmentInstance.id}</option>
  );
  const equipmentInstanceSelect = (
    <select name="equipmentInstance" ref={register}>
      {equipmentInstancesOptions}
    </select>
  );
  const employeeOptions = employees.map(
    employee => <option key={employee.id} value={employee.id}>{employee.name}</option>
  );
  const employeeSelect = (
    <select name="employee" ref={register}>
      {employeeOptions}
    </select>
  );
  return (
    <Fragment>
      <h2>Добавить запись в график осмотров</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Время осмотра: </label>
        <input name="installedAt" type="datetime-local" ref={register}></input><br/>
        <label>Еденица оборудования: </label>
        {equipmentInstanceSelect}<br/>
        <label>Сотрудник: </label>
        {employeeSelect}<br/>
        <button>Добавить</button>
      </form>
    </Fragment>
  );
}
