import React, { useEffect } from "react";
import Pic from "./pic.jpg";
import "./Navbar.css";
import M from "materialize-css/dist/js/materialize.min.js";

function Navbar(props) {
   useEffect(() => {
      let elem = document.querySelector(".sidenav");
      let instance = M.Sidenav.init(elem, {
         edge: "left",
         inDuration: 250,
      });
   });
   return (
      <div className="navbar">
         <nav>
            <div className="nav-wrapper">
               <div className="input-field">
                  <i className="material-icons grey-text prefix">search</i>
                  <input id="search" type="text" className="validate" />
                  <label for="search">Search everything...</label>
               </div>
               <ul className="right">
                  <div className="imgDiv">
                     <img
                        className="circle responsive-img"
                        src={Pic}
                        alt="pic"
                     />
                  </div>
                  <li>
                     <a className="indigo-text text-darken-4" href="#">
                        Demo
                     </a>
                  </li>
                  <div className="div"></div>
                  <li>
                     <a href="#">
                        <i className="material-icons grey-text">done</i>
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <i className="material-icons grey-text">group</i>
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <i className="material-icons grey-text">
                           notifications_none
                        </i>
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <i className="material-icons grey-text">email</i>
                     </a>
                  </li>
                  <a
                     href="#"
                     data-target="slide-out"
                     className="sidenav-trigger"
                  >
                     <i className="material-icons grey-text">menu</i>
                  </a>
               </ul>
            </div>
         </nav>
         <ul
            id="slide-out"
            className="sidenav sidenav-fixed"
            style={{ backgroundColor: "#252537" }}
         >
            <li>
               <a className="text-white" href="#!">
                  Cera.
               </a>
            </li>
            <li>
               <div className="divider" />
            </li>
            <li>
               <a className="text-white" href="#!">
                  <i className="material-icons deep-purple-text text-darken-3">
                     dashboard
                  </i>
                  Dashboard
               </a>
            </li>
            <li>
               <a className="text-white">
                  <i className="material-icons deep-purple-text text-darken-3">
                     web
                  </i>
                  Homepage
               </a>
            </li>
            <li>
               <a className="text-white">
                  <i className="material-icons deep-purple-text text-darken-3">
                     filter_tilt_shift
                  </i>
                  Wiki
               </a>
            </li>
            <li>
               <a className="waves-effect text-white" href="#!">
                  COMMUNITY
               </a>
            </li>
            <li>
               <a className="text-white">
                  <i className="material-icons deep-purple-text text-darken-3">
                     favorite_border
                  </i>
                  Social wall
               </a>
            </li>
            <li>
               <a className="text-white">
                  <i className="material-icons deep-purple-text text-darken-3">
                     language
                  </i>
                  Members
               </a>
            </li>
            <li>
               <a className="text-white">
                  <i className="material-icons deep-purple-text text-darken-3">
                     group
                  </i>
                  Groups
               </a>
            </li>
            <li>
               <a className="text-white">
                  <i className="material-icons deep-purple-text text-darken-3">
                     forum
                  </i>
                  Forums
               </a>
            </li>
            <li>
               <a className="text-white">
                  <i className="material-icons deep-purple-text text-darken-3">
                     folder_open
                  </i>
                  Documents
               </a>
            </li>
            <li>
               <a className="waves-effect text-white" href="#!">
                  EVENTS
               </a>
            </li>

            <li>
               <a className="text-white">
                  <i className="material-icons deep-purple-text text-darken-3">
                     payment
                  </i>
                  Calender
               </a>
            </li>
            <li>
               <a className="text-white">
                  <i className="material-icons deep-purple-text text-darken-3">
                     layers
                  </i>
                  Event Cards
               </a>
            </li>
            <li>
               <a className="text-white">
                  <i className="material-icons deep-purple-text text-darken-3">
                     map
                  </i>
                  Event Map
               </a>
            </li>
            <li>
               <a className="text-white">
                  <i className="material-icons deep-purple-text text-darken-3">
                     wb_sunny
                  </i>
                  Today's events
               </a>
            </li>
         </ul>
      </div>
   );
}

export default Navbar;
