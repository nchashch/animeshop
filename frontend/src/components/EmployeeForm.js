import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postEmployee } from '../actions/employees';
import { fetchUnits } from '../actions/units';
import useForm from 'react-hook-form';

export default function EmployeeForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const units = useSelector(state => state.units);
  useEffect(() => {
    dispatch(fetchUnits());
  }, [dispatch]);
  const onSubmit = values => {
    console.log(values);
    values.unit = Number(values.unit);
    dispatch(postEmployee(values))
  };
  const options = units.map(
    unit => <option key={unit.id} value={unit.id}>{unit.name}</option>
  );
  const select = (
    <select name="unit" ref={register}>
      {options}
    </select>
  );
  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name: </label>
        <input name="name" ref={register}></input><br/>
        <label>Unit: </label>
        {select}<br/>
        <button>Add Employee</button>
      </form>
    </Fragment>
  );
}
