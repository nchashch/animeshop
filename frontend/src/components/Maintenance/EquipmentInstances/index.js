import React, { Fragment } from 'react';
import EquipmentInstanceForm from './EquipmentInstanceForm';
import EquipmentInstancesList from './EquipmentInstancesList';

export default function EquipmentInstances() {
  return (
    <Fragment>
      <EquipmentInstanceForm/>
      <EquipmentInstancesList/>
    </Fragment>
  );
}
