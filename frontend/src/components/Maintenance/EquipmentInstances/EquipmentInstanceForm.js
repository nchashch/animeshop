import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postEquipmentInstance } from '../../../actions/maintenance/equipmentInstances';
import { fetchEquipment } from '../../../actions/maintenance/equipment';
import { fetchUnits } from '../../../actions/admin/units';
import useForm from 'react-hook-form';

export default function EquipmentInstanceForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const equipment = useSelector(state => state.equipment);
  const units = useSelector(state => state.units);
  useEffect(() => {
    dispatch(fetchEquipment());
    dispatch(fetchUnits());
  }, [dispatch]);
  const onSubmit = values => {
    values.model = Number(values.model);
    values.unit = Number(values.unit);
    values.installedAt = new Date(values.installedAt).toISOString();
    console.log(values);
    dispatch(postEquipmentInstance(values))
  };
  const modelOptions = equipment.map(
    equipment => <option key={equipment.id} value={equipment.id}>{equipment.name}</option>
  );
  const modelSelect = (
    <select name="model" ref={register}>
      {modelOptions}
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
      <h2>Добавить еденицу оборудования</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Комментарий: </label>
        <input name="comment" ref={register}></input><br/>
        <label>Расположение: </label>
        <input name="location" ref={register}></input><br/>
        <label>В рабочем состоянии: </label>
        <input name="operational" type="checkbox" ref={register}></input><br/>
        <label>Когда установленно: </label>
        <input name="installedAt" type="datetime-local" ref={register}></input><br/>
        <label>Вид оборудования: </label>
        {modelSelect}<br/>
        <label>Подразделение: </label>
        {unitSelect}<br/>
        <button>Добавить</button>
      </form>
    </Fragment>
  );
}
