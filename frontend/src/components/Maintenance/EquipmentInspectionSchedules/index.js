import React, { Fragment } from 'react';
import EquipmentInspectionScheduleForm from './EquipmentInspectionScheduleForm';
import EquipmentInspectionSchedulesList from './EquipmentInspectionSchedulesList';

export default function EquipmentInspectionSchedules() {
  return (
    <Fragment>
      <EquipmentInspectionScheduleForm/>
      <EquipmentInspectionSchedulesList/>
    </Fragment>
  );
}
