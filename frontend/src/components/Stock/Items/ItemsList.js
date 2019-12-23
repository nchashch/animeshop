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
      <td><button onClick={() => dispatch(deleteItem(item.id))}>Delete</button></td>
    </tr>
  );
  return (
    <Fragment>
      <h2>items</h2>
      <table width="100%">
        <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Manufacturer</th>
        </tr>
        </thead>
        <tbody>
        {itemsTrs}
        </tbody>
      </table>
    </Fragment>
  );
}
