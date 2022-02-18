import React from "react";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="Sidebar-content">
        <a href="/viewallcustomers">View Customers</a>
        <a href="/transfermoney">Transfer Money</a>
      </div>
    </div>
  );
};

export default Sidebar;
