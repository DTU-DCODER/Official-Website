import React from 'react';
import { IconContext } from 'react-icons';
import { IoIosSearch } from 'react-icons/io';
import { FiCheck, FiUsers, FiBell, FiMail } from 'react-icons/fi'

import './Navbar.css';

function Navbar(props) {
    return (
        <div className="navbar">
            <div className="searchbar">
              <IconContext.Provider value={{ color: '#252537'}}>
                <IoIosSearch size={20} />
              </IconContext.Provider>
              <input placeholder="Search everything..."/>
            </div>
            <div className="profile-settings">
              <FiCheck />
              <FiUsers />
              <FiBell />
              <FiMail />
            </div>
        </div>
    );
}

export default Navbar;