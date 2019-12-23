import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { postManufacturer } from '../../../actions/stock/manufacturers';
import useForm from 'react-hook-form';

export default function ManufacturerForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = values => dispatch(postManufacturer(values));
  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name: </label>
        <input name="name" ref={register}></input><br/>
        <label>Description: </label>
        <input name="description" ref={register}></input><br/>
        <button>Add manufacturer</button>
      </form>
    </Fragment>
  );
}
