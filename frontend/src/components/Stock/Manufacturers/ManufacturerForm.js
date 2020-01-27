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
      <h2>Добавить производителя</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Название: </label>
        <input name="name" ref={register}></input><br/>
        <label>Описание: </label>
        <input name="description" ref={register}></input><br/>
        <button>Добавить</button>
      </form>
    </Fragment>
  );
}
