import React from "react";
import EmployeeEntries from "../Security/EmployeeEntries";
import TransportEntries from "../Security/TransportEntries";

export function Security() {
    return (
      <div>
        <h2>Безопастность</h2>
        <EmployeeEntries/>
        <TransportEntries/>
      </div>
    );
  }
