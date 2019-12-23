import React, { Fragment } from 'react';
import ManufacturerForm from './ManufacturerForm';
import ManufacturersList from './ManufacturersList';

export default function Manufacturers() {
  return (
    <Fragment>
      <ManufacturerForm/>
      <ManufacturersList/>
    </Fragment>
  );
}
