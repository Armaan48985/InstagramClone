import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'

function redOptions({closeRedOptions, setChatLog}) {

    return (
    <div className='postsetting-container'>
       
    <div className='postSettings red-option-container'>
    <span onClick={closeRedOptions}><AiOutlineClose/></span>
         <ul>
             <li>
                 <a className='postsetting-item ft-red'>
                     Report
                 </a>
             </li>
             <li>
                 <a className='postsetting-item ft-red'>
                     Block
                 </a>
             </li>
             <li>
             <a className='postsetting-item no-border' onClick={() => {
    setChatLog([]);
    closeRedOptions();
}}>
    Delete Chat
</a>
             </li>
         </ul>
    </div>
     <div className='overlay' onClick={closeRedOptions}></div>
 </div>
)
}

export default redOptions