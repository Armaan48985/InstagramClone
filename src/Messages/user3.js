import React, { useState, useEffect } from "react";
import UserMain from "./UserMain";
import UserChat from "./UserChat";
function User3() {
  const userId = "user3";
  const [chatLog, setChatLog] = useState(() => {
    const storedChatLog = localStorage.getItem(`chatLogData-${userId}`);
    return storedChatLog ? JSON.parse(storedChatLog) : [];
  });

  // When chatLog updates, save it to local storage
  useEffect(() => {
    localStorage.setItem(`chatLogData-${userId}`, JSON.stringify(chatLog));
  }, [chatLog]);

  // console.log(chatLog)

  return (
    <>
      {/* <MessageSidebar/> */}
      <UserMain id="3" chatLog={chatLog} setChatLog={setChatLog} />
      {/* <div className='chat-container'> */}
      <UserChat chatLog={chatLog} setChatLog={setChatLog} />
      {/* <h1 className='whitee'>Here</h1> */}
      {/* </div> */}
    </>
  );
}

export default User3;
