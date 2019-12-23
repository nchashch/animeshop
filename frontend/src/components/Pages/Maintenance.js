import React from "react";

import Equipment from "../Maintenance/Equipment";
import EquipmentInstances from "../Maintenance/EquipmentInstances";

export function Maintenance() {
    return (
      <div>
        <h2>Оборудовние</h2>
        <Equipment/>
        <EquipmentInstances/>
      </div>
    );
  }
