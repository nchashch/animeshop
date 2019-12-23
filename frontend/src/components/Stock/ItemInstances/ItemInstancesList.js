import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemInstances, deleteItemInstance } from '../../../actions/stock/itemInstances';

export default function ItemInstancesList() {
  const dispatch = useDispatch();
  const itemInstances = useSelector(state => state.itemInstances);
  useEffect(() => {
    dispatch(fetchItemInstances());
  }, [dispatch]);
  console.log(itemInstances);
  const itemInstancesTrs = itemInstances.map(
    itemInstance =>
    <tr key={itemInstance.id}>
      <td>{itemInstance.id}</td>
      <td>{itemInstance.item}</td>
      <td>{itemInstance.unit}</td>
      <td>{itemInstance.amount}</td>
      <td>{itemInstance.price}</td>
      <td>{itemInstance.discount}</td>
      <td><button onClick={() => dispatch(deleteItemInstance(itemInstance.id))}>Delete</button></td>
    </tr>
  );
  return (
    <Fragment>
      <h2>item instances</h2>
      <table width="100%">
        <thead>
        <tr>
          <th>Id</th>
          <th>Item</th>
          <th>Unit</th>
          <th>Amount</th>
          <th>Price</th>
          <th>Discount</th>
        </tr>
        </thead>
        <tbody>
        {itemInstancesTrs}
        </tbody>
      </table>
    </Fragment>
  );
}
