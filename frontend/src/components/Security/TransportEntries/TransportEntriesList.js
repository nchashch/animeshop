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
      <td><button onClick={() => dispatch(deleteTransportEntry(transportEntry.id))}>Delete</button></td>
    </tr>
  );
  return (
    <Fragment>
      <h2>TransportEntries</h2>
      <table width="100%">
        <thead>
        <tr>
          <th>Id</th>
          <th>Unit</th>
          <th>Transport</th>
          <th>EnteredAt</th>
          <th>ExitedAt</th>
        </tr>
        </thead>
        <tbody>
        {transportEntriesTrs}
        </tbody>
      </table>
    </Fragment>
  );
}
