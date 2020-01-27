import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postEquipmentInspectionResult } from '../../../actions/maintenance/equipmentInspectionResults';
import { fetchEquipmentInspectionSchedules } from '../../../actions/maintenance/equipmentInspectionSchedules';
import { fetchEmployees } from '../../../actions/admin/employees';
import useForm from 'react-hook-form';

export default function EquipmentInspectionResultForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const equipmentInspectionSchedules = useSelector(state => state.equipmentInspectionSchedules);
  const employees = useSelector(state => state.employees);
  useEffect(() => {
    dispatch(fetchEquipmentInspectionSchedules());
    dispatch(fetchEmployees());
  }, [dispatch]);
  const onSubmit = values => {
    values.schedule = Number(values.schedule);
    values.inspectedBy = Number(values.inspectedBy);
    values.inspectedAt = new Date(values.inspectedAt).toISOString();
    console.log(values);
    dispatch(postEquipmentInspectionResult(values))
  };
  const equipmentInspectionSchedulesOptions = equipmentInspectionSchedules.map(
    equipmentInspectionSchedule => <option key={equipmentInspectionSchedule.id} value={equipmentInspectionSchedule.id}>{equipmentInspectionSchedule.id}</option>
  );
  const equipmentInspectionScheduleSelect = (
    <select name="schedule" ref={register}>
      {equipmentInspectionSchedulesOptions}
    </select>
  );
  const employeeOptions = employees.map(
    employee => <option key={employee.id} value={employee.id}>{employee.name}</option>
  );
  const employeeSelect = (
    <select name="inspectedBy" ref={register}>
      {employeeOptions}
    </select>
  );
  return (
    <Fragment>
      <h2>Добавить отчет об осмотре оборудования</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Осмотренно когда: </label>
        <input name="inspectedAt" type="datetime-local" ref={register}></input><br/>
        <label>Id записи в графике осмотров: </label>
        {equipmentInspectionScheduleSelect}<br/>
        <label>Осмотрено кем: </label>
        {employeeSelect}<br/>
        <label>Описание: </label>
        <input name="description" ref={register}></input><br/>
        <button>Добавить</button>
      </form>
    </Fragment>
  );
}
