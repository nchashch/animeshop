import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUnits, deleteUnit } from '../../../actions/admin/units';

export default function UnitsList() {
  const dispatch = useDispatch();
  const units = useSelector(state => state.units);
  useEffect(() => {
    dispatch(fetchUnits());
  }, [dispatch]);
  const unitsTrs = units.map(
    unit =>
    <tr key={unit.id}>
      <td>{unit.id}</td>
      <td>{unit.name}</td>
      <td>{unit.address}</td>
      <td><button onClick={() => dispatch(deleteUnit(unit.id))}>Delete</button></td>
    </tr>
  );
  return (
    <Fragment>
      <h2>Units</h2>
      <table width="100%">
        <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Address</th>
        </tr>
        </thead>
        <tbody>
        {unitsTrs}
        </tbody>
      </table>
    </Fragment>
  );
}
