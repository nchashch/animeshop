import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { postUnit } from '../../../actions/admin/units';
import useForm from 'react-hook-form';

export default function UnitForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = values => dispatch(postUnit(values));
  return (
    <Fragment>
      <h2>Add unit</h2>
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
