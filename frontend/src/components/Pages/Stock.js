import React from "react";
import Manufacturers from "../Stock/Manufacturers";
import Items from "../Stock/Items";
import ItemInstances from "../Stock/ItemInstances";

export function Stock() {
    return (
      <div>
        <Manufacturers/>
        <Items/>
        <ItemInstances/>
      </div>
    );
  }
