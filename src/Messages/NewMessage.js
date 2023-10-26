import React from 'react'
import {RxCross1} from 'react-icons/rx'

function NewMessage({closeNewMsgBox}) {
    return (
        <div className='postsetting-container'>
          <div className='comment-section'>
              <h1>New Message</h1>
              <span className='close-story-icon comment-close' onClick={closeNewMsgBox}><RxCross1/></span> 
          </div>
          <div className='overlay' onClick={closeNewMsgBox}></div>
        </div>
      )
}

export default NewMessage