import React from "react";
import "./SidebarOptions.css";

function SidebarOptions({ Icons, title, number, selected }) {
  return (
    <div className={`sidebar-options ${selected && "sidebar-options--active"}`}>
      <Icons />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOptions;
