import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import {IoReturnUpBackOutline} from 'react-icons/io5'
import {GrEmoji} from 'react-icons/gr'

function UserChat({chatLog}) {
  const [showUnsendOptions, setShowUnsendOptions] = useState(false)
  const [updated, setUpdated] = useState(chatLog)

console.log(updated)
  const doit = () => {
    setShowUnsendOptions(false)
  }

  const deleteMsg = (id) => {
    console.log(id)
    const updatedChatLog = updated.filter((message) => message.id !== id);
    console.log(updatedChatLog)
    
    setUpdated(updatedChatLog || [])
  };

  
    return (
     <div className='chat-container'>
        {updated.map((message, index) => (
          <div  onClick={() => deleteMsg(message.id)} className={`message ${index === 0 ? 'first-message' : ''}`} onMouseLeave={doit}>
            <div className='edit-txt-btns'>
              <div className={showUnsendOptions ? `unsend-txt-options` : "unsend-txt-options  no-display"}>
                <ul>
                  <li>Forward</li>
                  <li>Copy</li>
                  <li>Unsend</li>
                </ul>
              </div>
              <span onClick={() => setShowUnsendOptions(e => !e)}><BiDotsHorizontalRounded/></span>
              <span><IoReturnUpBackOutline/></span>
              <span><GrEmoji/></span>
            </div>
            <div key={index} className='chats'>
              {message.text}
            </div>
          </div>
        ))}
      </div>  
    );
  }

export default UserChat