import React from 'react'
import {RxCross1} from 'react-icons/rx'

function story({setComment}) {
  return (
    <div className='postsetting-container'>
      <div className='comment-section'>
          <h1>Comments</h1>
      </div>
      <div className='overlay' onClick={() => setComment(false)}></div>
          <span className='close-story-icon comment-close' onClick={() => setComment(false)}><RxCross1/></span> 
    </div>
  )
}

export default story