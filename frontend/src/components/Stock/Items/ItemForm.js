import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postItem } from '../../../actions/stock/items';
import { fetchManufacturers } from '../../../actions/stock/manufacturers';
import useForm from 'react-hook-form';

export default function ItemForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const manufacturers = useSelector(state => state.manufacturers);
  useEffect(() => {
    dispatch(fetchManufacturers());
  }, [dispatch]);
  const onSubmit = values => {
    console.log(values);
    values.manufacturer = Number(values.manufacturer);
    dispatch(postItem(values))
  };
  const options = manufacturers.map(
    manufacturer => <option key={manufacturer.id} value={manufacturer.id}>{manufacturer.name}</option>
  );
  const select = (
    <select name="manufacturer" ref={register}>
      {options}
    </select>
  );
  return (
    <Fragment>
      <h2>Добавить наименование товара</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Название: </label>
        <input name="name" ref={register}></input><br/>
        <label>Описание: </label>
        <input name="description" ref={register}></input><br/>
        <label>Производитель: </label>
        {select}<br/>
        <button>Добавить</button>
      </form>
    </Fragment>
  );
}
