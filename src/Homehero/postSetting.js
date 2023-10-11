import React from 'react'

function postSetting({setShowpostSetting}) {
   
    const closepostSetting = ()  => {
        setShowpostSetting(false)
    }

  return (
    <div className='postsetting-container'>
       <div className='postSettings'>
            <ul>
                <li>
                    <a className='postsetting-item ft-red'>
                        Report
                    </a>
                </li>
                <li>
                    <a className='postsetting-item ft-red'>
                        Unfollow
                    </a>
                </li>
                <li>
                    <a className='postsetting-item'>
                        Add to favourites
                    </a>
                </li>
                <li>
                    <a className='postsetting-item'>
                        Go to Post
                    </a>
                </li>
                <li>
                    <a className='postsetting-item'>
                        Share to...
                    </a>
                </li>
                <li>
                    <a className='postsetting-item'>
                        Copy link
                    </a>
                </li>
                <li>
                    <a 
                    className='postsetting-item'>
                        Embed
                    </a>
                </li>
                <li>
                    <a className='postsetting-item'>
                        Add this account
                    </a>
                </li>
                <li>
                    <a className='postsetting-item no-border' onClick={closepostSetting}>
                        Cancel
                    </a>
                </li>
            </ul>
       </div>
        <div className='overlay' onClick={closepostSetting}></div>
    </div>
  )
}

export default postSetting