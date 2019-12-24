import React from "react";
import EmployeeEntries from "../Security/EmployeeEntries";
import TransportEntries from "../Security/TransportEntries";

export function Security() {
    return (
      <div>
        <EmployeeEntries/>
        <TransportEntries/>
      </div>
    );
  }
