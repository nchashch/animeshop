import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { postUnit } from '../actions/units';
import useForm from 'react-hook-form';

export default function UnitForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = values => dispatch(postUnit(values));
  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name: </label>
        <input name="name" ref={register}></input><br/>
        <label>Address: </label>
        <input name="address" ref={register}></input><br/>
        <button>Add unit</button>
      </form>
    </Fragment>
  );
}
