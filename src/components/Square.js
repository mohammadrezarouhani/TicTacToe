/** @format */

import React, { useState } from "react";
import "./styles/square.css";

export default function Board({value,onClick}) {
  return (
    <button
      className="square"
      onClick={onClick}
    >
      {value}
    </button>
  );
}
