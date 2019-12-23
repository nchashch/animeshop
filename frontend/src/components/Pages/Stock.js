import React from "react";
import Manufacturers from "../Stock/Manufacturers";
import Items from "../Stock/Items";

export function Stock() {
    return (
      <div>
        <h2>Склады</h2>
        <Manufacturers/>
        <Items/>
      </div>
    );
  }
