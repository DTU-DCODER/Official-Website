import React from 'react';
import Sidebar from './Sidebar'
import './Dashboard.css'
import MainBody from './MainBody'

function Dashboard(props) {
    return (
        <div className="dashboard">
            <Sidebar />
            <MainBody />
        </div>
    );
}

export default Dashboard;