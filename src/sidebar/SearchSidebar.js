import React, {useEffect, useState} from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import DummyData from './SearchSidebarData.js'
import {AiOutlineClose} from 'react-icons/ai'
import dummyData from './SearchSidebarData.js'

function SearchSidebar({sidebarOpen}) {

  const [data, setData] = useState(dummyData)

  const handleRemove = (id) => {
  const updatedData = DummyData.filter((item) => item.id !== id);

  setData(updatedData)
};


  return (
    <div className='searchsidebar-container' style={sidebarOpen ? { left: "7rem" } : {}}>
      <div className='search_upper-section'>
        <h3>Search</h3>
         <div className='search-bar'>
           <input placeholder='search' />
            <span className='search-icon'><AiOutlineCloseCircle/></span>
          </div>
      </div>

      <div className='search_bottom-section'>
          <div className='search_history-buttons'>
            <h4>Recent</h4>
            <p>Clear All</p>
          </div>

        {data.map(({username, profileName, imageUrl, id}) => {
            return (
              <div className='search_profile-container'>
                <img src={imageUrl}/>
                <div>
                  <h4>{username}</h4>
                  <p>{profileName}</p>
                </div>

                <span className='search_profile-cross' onClick={() => handleRemove(id)}><AiOutlineClose/></span>

              </div>
            )
        })}

      </div>
    </div>
  )
}

export default SearchSidebar