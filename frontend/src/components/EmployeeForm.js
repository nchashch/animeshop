import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { postEmployee } from '../actions/employees';  
import useForm from 'react-hook-form';

export default function EmployeeForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = values => dispatch(postEmployee(values));
  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name: </label>
        <input name="name" ref={register}></input><br/>
        <label>Unit: </label>
        <input name="unit" ref={register}></input><br/>
        <button>Add Employee</button>
      </form>
    </Fragment>
  );
}
