import React from "react";
import Units from '../Admin/Units';
import Employees from "../Admin/Employees";

export function Admin() {
    return (
      <div>
        <h2>Сотрудники</h2>
        <Employees/>
        <h2>Товары</h2>
        <Units />
      </div>
    );
  }
