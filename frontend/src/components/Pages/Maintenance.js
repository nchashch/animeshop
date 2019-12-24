import React from "react";

import Equipment from "../Maintenance/Equipment";
import EquipmentInstances from "../Maintenance/EquipmentInstances";
import EquipmentInspectionSchedules from "../Maintenance/EquipmentInspectionSchedules";
import EquipmentInspectionResults from "../Maintenance/EquipmentInspectionResults";

export function Maintenance() {
    return (
      <div>
        <Equipment/>
        <EquipmentInstances/>
        <EquipmentInspectionSchedules/>
        <EquipmentInspectionResults/>
      </div>
    );
  }
