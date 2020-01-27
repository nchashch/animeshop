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
      <h2>Добавить подразделение</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Имя: </label>
        <input name="name" ref={register}></input><br/>
        <label>Адрес: </label>
        <input name="address" ref={register}></input><br/>
        <button>Добавить</button>
      </form>
    </Fragment>
  );
}
