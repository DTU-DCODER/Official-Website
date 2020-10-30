import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import { BsTextIndentLeft,BsTextIndentRight } from "react-icons/bs";

import './Sidebar.css';

function Sidebar(props) {

    return (
        <>
            <div className='sidebar'>
                <Link to='#' className='menu-bar-inactive'>
                    <IconContext.Provider value={{ color: '#252537' }}>
                        <BsTextIndentLeft onClick={props.sidebarState} />
                    </IconContext.Provider>
                </Link>
            </div>
            <IconContext.Provider value={{ color: 'white' }}>
                <nav className={props.initialState ? 'nav-menu active' : 'nav-menu'}>
                            <Link to='#' className='menu-bars' onClick={props.sidebarState}>
                                <BsTextIndentRight />
                            </Link>
                    <ul className='nav-menu-items'>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path} >
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Sidebar;