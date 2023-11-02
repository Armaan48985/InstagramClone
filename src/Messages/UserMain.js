import React, { useState, useEffect, useRef } from "react";
import { IoCallOutline } from "react-icons/io5";
import { BiVideo } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiSmile } from "react-icons/bi";
import { BsMic } from "react-icons/bs";
import { GoFileMedia } from "react-icons/go";
import { FiHeart } from "react-icons/fi";
import dummyData from "../sidebar/SearchSidebarData";
import UserChat from './UserChat'
import RedOptions from "./redOptions";
import Display from './display'
import redHeart from '../images/redHeart.png'

function UserMain(props) {
  // console.log(props.personIndex)

  const { profileName, imageUrl } = dummyData[props.id - 1 || 0];
  const [chatInput, setChatInput] = React.useState("");
  const [sendingMsg, setSendingMsg] = useState(false);
  const [showChatInput, setShowChatInput] = useState("");
  const [showRedOption, setShowRedOpions] = useState(false)

  const {chatLog, setChatLog} = props
  const noDisplay = {
    display: "none"
  }

  const handlechat = (e) => {
    setChatInput(e.target.value);
    setSendingMsg(true);
  };

  const openRedOptions = () => {
    setShowRedOpions(true)
  }
  const closeRedOptions = () => {
    setShowRedOpions(false)
  }


  const sendMsg = () => {
   
    setChatInput("");
    const newUserInput = chatInput;
    // document.getElementById("user-input").value = "";

    // Display user message
    if(!chatInput == ""){
      setChatLog([...chatLog, { text: newUserInput, sender: 'user' }]);
    }
    
  };

  useEffect(() => {
    chatInput == "" && setSendingMsg(false);
  }, [chatInput]);

  useEffect(() => {
    const storedChatLog = localStorage.getItem("chatLog");
    if (storedChatLog) {
      setChatLog(JSON.parse(storedChatLog));
    }
    // console.log(storedChatLog);
  }, []);

  // Update local storage whenever the chatLog state changes
  useEffect(() => {
    localStorage.setItem("chatLog", JSON.stringify(chatLog));
  }, [chatLog]);
 



  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(); // Create a ref for the input element

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleClick = () => {
    // Trigger a click on the hidden file input element
    fileInputRef.current.click();
  };

  const sendHeart = () => {
    setChatLog([...chatLog, { text: <FiHeart/>, sender: 'user'}]);
  }

  return (
    <>
      <div className="msg-user-header">
        <div className="msg-header-left">
          <div className="msg-header-left-section">
            <img src={imageUrl} />
            <div>
              <h5>{profileName}</h5>
              <p>Active 33 min ago</p>
            </div>
          </div>
        </div>

        <div className="msg-header-right">
          <span>
            <IoCallOutline />
          </span>
          <span>
            <BiVideo />
          </span>
          <span onClick={openRedOptions}>
            <AiOutlineInfoCircle />
          </span>
        </div>
      </div>

    
      <div className="chat-input-container">
        <div className="ace">
          <span>
            <BiSmile />
          </span>
          <input
            className="instagram-input"
            placeholder="message"
            value={chatInput}
            onChange={handlechat}
            onKeyDown={(e) => {
              if(e.key == "Enter"){
                sendMsg()
              }
            }}
          />
        </div>
        <div>
          {!sendingMsg ? (
            <div>
              <span>
                <BsMic />
              </span>
              <span>
                <GoFileMedia  onClick={handleClick}/>
              </span>
              <span>
                <FiHeart  onClick={sendHeart} />
              </span>
            </div>
          ) : (
            <p onClick={sendMsg}>Send</p>
          )}
        </div>
      </div>

      <div>
            {/* Hidden file input */}
            <input
              type="file"
              ref={fileInputRef} // Ref to access the input element
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            {selectedFile && <p>Selected file: {selectedFile.name}</p>}
        </div>

      {showRedOption && <RedOptions closeRedOptions={closeRedOptions} setChatLog={setChatLog}/>}
    </>
  );
}

export default UserMain;
