import React, { useState, useEffect } from "react";
import UserMain from "./UserMain";
import UserChat from "./UserChat";
import MessageSidebar from "../sidebar/messageSidebar";

function User1() {
  const userId = "user1";
  const [chatLog, setChatLog] = useState(() => {
    const storedChatLog = localStorage.getItem(`chatLogData-${userId}`);
    return storedChatLog ? JSON.parse(storedChatLog) : [];
  });

  // When chatLog updates, save it to local storage
  useEffect(() => {
    localStorage.setItem(`chatLogData-${userId}`, JSON.stringify(chatLog));
  }, [chatLog]);

  console.log(chatLog)
  
  return (
    <>
      <UserMain id="1" chatLog={chatLog} setChatLog={setChatLog} />
      <UserChat chatLog={chatLog} setChatLog={setChatLog} />
    </>
  );
}

export default User1;
