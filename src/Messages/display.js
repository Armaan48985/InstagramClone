import {LiaFacebookMessenger} from 'react-icons/lia'
import React from 'react'

function display(prop) {

  const {openNewMsgBox} = prop

  const doit = () => {
    openNewMsgBox()
  }
  return (
    <div className='message-container'>
    <div className='message-display'>
      <div className='msg-icon-container'> <span><LiaFacebookMessenger/></span></div>
      <h5 className="luffy">Your Messages</h5>
      <p>Send private photos and messages to a friend or group.</p>
      <button className='send-msg-btn' onClick={openNewMsgBox}>send message</button>
    </div>
</div>
  )
}

export default display