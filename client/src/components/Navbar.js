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
            <div className="profile-settings d-flex">
              <div className="profile-avatar-name d-flex">
                <img src="https://picsum.photos/30/30" alt="avatar"/>
                <span>dcoder</span>
              </div>
              <FiCheck />
              <FiUsers />
              <FiBell />
              <FiMail />
            </div>
        </div>
    );
}

export default Navbar;