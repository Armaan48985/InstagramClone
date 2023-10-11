import React, { useState, useEffect, useRef } from "react";
import FullLogo from "./images/Instagram_Logo_2016.png";
import SmallLogo from "./images/5811465.png"
import { AiFillHome } from "react-icons/ai";
import { sidebarData } from "./sidebarData";
import { RiMenuLine} from "react-icons/ri";
import Menubar from './Menubar'
import ppf from './images/download.jpeg'
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { TbClick } from "react-icons/tb";
import SearchSidebar from "./sidebar/SearchSidebar";
import NotificationSidebar from "./sidebar/notificationSidebar";



function Sidebar() {


  const [showMenu, setShowMenu] = useState(false)
  // const [showActiveLogo, setShowActiveLogo] = useState(false)
  const [searchbarOpen, setSearchbarOpen] = useState(false)
  const [notificationbarOpen, setNotificationbarOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // console.log(searchbarOpen)
  // console.log(notificationbarOpen)

  useEffect(() => {
    // Check if either searchbar or notificationbar is open, and update sidebar accordingly
    setSidebarOpen(searchbarOpen || notificationbarOpen);
  }, [searchbarOpen, notificationbarOpen]);

  const handlesidebar = (id) => {
    if(id === 2){
      setSearchbarOpen((e) => !e)
      setNotificationbarOpen(false)
    }else if(id === 6){
      setNotificationbarOpen((e) => !e)
      setSearchbarOpen(false)
    }else{
      setNotificationbarOpen(false)
      setSearchbarOpen(false)
    }
  }


 
  return (
    <>
    <div className="sidebar-section section" style={sidebarOpen ? {border: "none"} : {}}>
      <div className="sidebar">
        <img src={sidebarOpen ? SmallLogo : FullLogo} width={sidebarOpen ? "30px" : "115px"} className="logo"/>

        <div className="sidebar-main">
          {sidebarData.map(({ name, logo, path, id}) => {
          return (
           <Link to={path}>
              <div className="name" onClick={() => handlesidebar(id)}>
                <span className="icons">{logo}</span>
                <h4 className={`text-container ${!sidebarOpen ? 'visible' : 'hidden'}`}>{name}</h4>
              </div>
           </Link>
             );
              })}
           <Link to='profile'>
           <div className="name profile">
              <img className="ppf" src={ppf}/>
              <h4 className={`text-container ${!sidebarOpen ? 'visible' : 'hidden'}`}>Profile</h4>
            </div>
           </Link>
            
        </div>
      </div>
  
  {showMenu && (
    <Menubar/>
  )
  }

 

      <div className="menu" onClick={() => setShowMenu(!showMenu)}>
      <a className="menu-icon"><RiMenuLine/></a>
      <h4 className={`text-container ${!sidebarOpen ? 'visible' : 'hidden'}`}>More</h4>
      </div>
      <SearchSidebar sidebarOpen={searchbarOpen}/>
    </div>


<NotificationSidebar sidebarOpen={notificationbarOpen}/>
</>
  );
}

export default Sidebar;
