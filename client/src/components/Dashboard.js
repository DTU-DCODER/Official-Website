import React from "react";
import Navbar from "./Navbar";
import "./Dashboard.css";
import MainBody from "./MainBody";
function Dashboard(props) {
   return (
      <div className="dashboard">
         <div className="sidebar">
            <Navbar />
         </div>
         <div className="mainBody">
            <MainBody />
         </div>
      </div>
   );
}

export default Dashboard;
