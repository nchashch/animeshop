import React from "react";

import Equipment from "../Maintenance/Equipment";
import EquipmentInstances from "../Maintenance/EquipmentInstances";
import EquipmentInspectionSchedules from "../Maintenance/EquipmentInspectionSchedules";

export function Maintenance() {
    return (
      <div>
        <h2>Оборудовние</h2>
        <Equipment/>
        <EquipmentInstances/>
        <EquipmentInspectionSchedules/>
      </div>
    );
  }
