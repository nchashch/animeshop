import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postUnit, fetchUnits } from '../actions/units';

export default function Units() {
  const dispatch = useDispatch();
  const units = useSelector(state => state.units);
  useEffect(() => {
    dispatch(fetchUnits());
  }, []);
  const unitsTrs = units.map(
    unit =>
    <tr key={unit.id}>
      <td>Name: {unit.name}</td>
      <td>Address: {unit.address}</td>
    </tr>
  );
  return (
    <Fragment>
      <table width="100%">
        <thead>
        <tr>
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
