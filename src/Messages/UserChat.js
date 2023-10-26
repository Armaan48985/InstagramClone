import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'


function UserChat({ chatLog}) {
    // console.log(chatLog);

    // const [array , setArray] = useState([chatLog])

    return (
  <div className='chat-container'>
        {chatLog.map((message, index) => (
          <div key={index} className='chats'>
            {message.text}
          </div>
        ))}
        {/* <h1 className='whitee'>Not Here</h1> */}
      </div>
      
    );
  }

export default UserChat