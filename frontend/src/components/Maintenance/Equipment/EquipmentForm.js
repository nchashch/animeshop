import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { postEquipment } from '../../../actions/maintenance/equipment';
import useForm from 'react-hook-form';

export default function EquipmentForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = values => dispatch(postEquipment(values));
  return (
    <Fragment>
      <h2>Добавить вид оборудования</h2>
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
