import React from 'react'
import {RxCross1} from 'react-icons/rx'

function story({setStorySection}) {
    // console.log("lkjsdf")
  return (
    <div className='story-section'>
        <h1>Stories</h1>
        <span className='close-story-icon' onClick={() => setStorySection(false)}><RxCross1/></span> 
    </div>
  )
}

export default story