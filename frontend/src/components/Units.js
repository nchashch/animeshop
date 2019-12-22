import React, { Fragment } from 'react';
import UnitForm from './UnitForm';
import UnitsList from './UnitsList';

export default function Units() {
  return (
    <Fragment>
      <UnitForm/>
      <UnitsList/>
    </Fragment>
  );
}
