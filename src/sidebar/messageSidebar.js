import React, { createContext, useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import DummyData from "./SearchSidebarData.js";
import { AiOutlineClose } from "react-icons/ai";
import dummyData from "./SearchSidebarData.js";
import { BsPencilSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import User from "../Messages/User.js";
import Display from "../Messages/display.js";
import UserMain from "../Messages/UserMain.js";
import NewMessage from "../Messages/NewMessage.js";

function SearchSidebar({ sidebarOpen }) {
  const [data, setData] = useState(dummyData);
  const [activeIndex, setActiveIndex] = useState(-1); // Initialize to -1 (no active element)
  const [newMsgBox, setNewMsgBox] = useState(false)


  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const openNewMsgBox = () => {
    setNewMsgBox(true)
  }
  const closeNewMsgBox = () => {
    setNewMsgBox(false)
  }
``
  return (
    <>
    <div style={{display: "none"}}>
      <Display openNewMsgBox={openNewMsgBox}/>
    </div>
      <div
        className="searchsidebar-container msg-sidebar-container"
        style={sidebarOpen ? { left: "6rem" } : {}}
      >
        <div className="search_history-buttons msg-sidebar-top-header">
          <h4>_armaan_23___</h4>
          <span onClick={openNewMsgBox}>
            <BsPencilSquare />
          </span>
        </div>

        <div className="msg-sidebar-header">
          <div className="search_history-buttons msg-header-txt">
            <h4>Messages</h4>
            <p>Request</p>
          </div>

          <div className="msg-sidebar-main">
            {data.map(({ profileName, imageUrl, id }, index) => {
              // console.log(index)
              return (
                <Link
                  to={`/message/user/person${index + 1}`}
                  key={index}
                >
                  <div onClick={() => handleItemClick(index)}
                  className={index === activeIndex ? "prsn-msg-container active-user" : "prsn-msg-container"}>
                    <img src={imageUrl} />
                    <div>
                      <h4>{profileName}</h4>
                      <div className="msg-active-section">
                        <p>Sent you a message</p>
                        <p>6s</p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      
      </div>

      {newMsgBox && <NewMessage closeNewMsgBox={closeNewMsgBox}/>}
    </>
  );
}

export default SearchSidebar;
