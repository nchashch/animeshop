import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postItemInstance } from '../../../actions/stock/itemInstances';
import { fetchItems } from '../../../actions/stock/items';
import { fetchUnits } from '../../../actions/admin/units';
import useForm from 'react-hook-form';

export default function ItemInstanceForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const items = useSelector(state => state.items);
  const units = useSelector(state => state.units);
  useEffect(() => {
    dispatch(fetchItems());
    dispatch(fetchUnits());
  }, [dispatch]);
  const onSubmit = values => {
    values.item = Number(values.item);
    values.unit = Number(values.unit);
    values.amount = Number(values.amount);
    values.price = Number(values.price);
    values.discount = Number(values.discount);
    values.discount = values.discount ? values.discount : null;
    dispatch(postItemInstance(values))
  };
  const itemOptions = items.map(
    item => <option key={item.id} value={item.id}>{item.name}</option>
  );
  const itemSelect = (
    <select name="item" ref={register}>
      {itemOptions}
    </select>
  );
  const unitOptions = units.map(
    unit => <option key={unit.id} value={unit.id}>{unit.name}</option>
  );
  const unitSelect = (
    <select name="unit" ref={register}>
      {unitOptions}
    </select>
  );
  return (
    <Fragment>
      <h2>Добавить товар</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Количество: </label>
        <input name="amount" type="number" ref={register}></input><br/>
        <label>Цена: </label>
        <input name="price" type="number" ref={register}></input><br/>
        <label>Скидка: </label>
        <input name="discount" type="number" ref={register}></input><br/>
        <label>Наименование товара: </label>
        {itemSelect}<br/>
        <label>Подразделение: </label>
        {unitSelect}<br/>
        <button>Добавить</button>
      </form>
    </Fragment>
  );
}
