import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, deleteItem } from '../../../actions/stock/items';

export default function ItemsList() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items);
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);
  console.log(items);
  const itemsTrs = items.map(
    item =>
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td>{item.manufacturer}</td>
      <td><button onClick={() => dispatch(deleteItem(item.id))}>Удалить</button></td>
    </tr>
  );
  return (
    <Fragment>
      <h2>Список наименований товаров</h2>
      <table width="100%">
        <thead>
        <tr>
          <th>Id</th>
          <th>Название</th>
          <th>Описание</th>
          <th>Производитель</th>
        </tr>
        </thead>
        <tbody>
        {itemsTrs}
        </tbody>
      </table>
    </Fragment>
  );
}
