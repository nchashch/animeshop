import React, { Fragment } from 'react';
import EquipmentForm from './EquipmentForm';
import EquipmentList from './EquipmentList';

export default function Equipment() {
  return (
    <Fragment>
      <EquipmentForm/>
      <EquipmentList/>
    </Fragment>
  );
}
