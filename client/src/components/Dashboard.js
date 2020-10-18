import React from 'react';
import Sidebar from './Sidebar'
import './Dashboard.css'
import MainBody from './MainBody'
function Dashboard(props) {
    return (
        <div className="dashboard">
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="mainBody">
                <MainBody />
            </div>
        </div>
    );
}

export default Dashboard;