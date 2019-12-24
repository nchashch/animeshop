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
      <h2>Add equipment</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name: </label>
        <input name="name" ref={register}></input><br/>
        <label>Description: </label>
        <input name="description" ref={register}></input><br/>
        <button>Add equipment</button>
      </form>
    </Fragment>
  );
}
