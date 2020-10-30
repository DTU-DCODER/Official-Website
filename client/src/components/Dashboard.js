import React, { useState } from 'react';
import Sidebar from './Sidebar'
import './Dashboard.css'
import MainBody from './MainBody'

function Dashboard(props) {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);

  return (
      <div className="dashboard">
          <Sidebar sidebarState={showSidebar} initialState={sidebar}/>
          <MainBody sidebarState={showSidebar} initialState={sidebar}/>
      </div>
  );
}

export default Dashboard;