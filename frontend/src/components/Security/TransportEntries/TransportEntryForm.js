import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postTransportEntry } from '../../../actions/security/transportEntries';
import { fetchUnits } from '../../../actions/admin/units';
import useForm from 'react-hook-form';

export default function TransportEntryForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const units = useSelector(state => state.units);
  useEffect(() => {
    dispatch(fetchUnits());
  }, [dispatch]);
  const onSubmit = values => {
    values.unit = Number(values.unit);
    values.enteredAt = new Date(values.enteredAt).toISOString();
    values.exitedAt = new Date(values.enteredAt).toISOString();
    console.log(values);
    dispatch(postTransportEntry(values))
  };
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
      <h2>Add transport entry</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>EnteredAt: </label>
        <input name="enteredAt" type="datetime-local" ref={register}></input><br/>
        <label>ExitedAt: </label>
        <input name="exitedAt" type="datetime-local" ref={register}></input><br/>
        <label>Transport: </label>
        <input name="licensePlate" ref={register}></input><br/>
        <label>Unit: </label>
        {unitSelect}<br/>
        <button>Add TransportEntry</button>
      </form>
    </Fragment>
  );
}
