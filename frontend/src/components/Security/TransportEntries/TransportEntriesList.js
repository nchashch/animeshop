import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransportEntries, deleteTransportEntry } from '../../../actions/security/transportEntries';

export default function TransportEntriesList() {
  const dispatch = useDispatch();
  const transportEntries = useSelector(state => state.transportEntries);
  useEffect(() => {
    dispatch(fetchTransportEntries());
  }, [dispatch]);
  const transportEntriesTrs = transportEntries.map(
    transportEntry =>
    <tr key={transportEntry.id}>
      <td>{transportEntry.id}</td>
      <td>{transportEntry.unit}</td>
      <td>{transportEntry.licensePlate}</td>
      <td>{transportEntry.enteredAt}</td>
      <td>{transportEntry.exitedAt}</td>
      <td><button onClick={() => dispatch(deleteTransportEntry(transportEntry.id))}>Удалить</button></td>
    </tr>
  );
  return (
    <Fragment>
      <h2>Журнал въезда/выезда транспорта</h2>
      <table width="100%">
        <thead>
        <tr>
          <th>Id</th>
          <th>Подразделение</th>
          <th>Номер машины</th>
          <th>Когда въехал</th>
          <th>Когда выехал</th>
        </tr>
        </thead>
        <tbody>
        {transportEntriesTrs}
        </tbody>
      </table>
    </Fragment>
  );
}
