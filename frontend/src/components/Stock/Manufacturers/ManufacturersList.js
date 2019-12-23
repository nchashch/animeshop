import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchManufacturers, deleteManufacturer } from '../../../actions/manufacturers';

export default function ManufacturersList() {
  const dispatch = useDispatch();
  const manufacturers = useSelector(state => state.manufacturers);
  useEffect(() => {
    dispatch(fetchManufacturers());
  }, [dispatch]);
  console.log(manufacturers);
  const manufacturersTrs = manufacturers.map(
    manufacturer =>
    <tr key={manufacturer.id}>
      <td>{manufacturer.id}</td>
      <td>{manufacturer.name}</td>
      <td>{manufacturer.description}</td>
      <td><button onClick={() => dispatch(deleteManufacturer(manufacturer.id))}>Delete</button></td>
    </tr>
  );
  return (
    <Fragment>
      <table width="100%">
        <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
        </thead>
        <tbody>
        {manufacturersTrs}
        </tbody>
      </table>
    </Fragment>
  );
}
