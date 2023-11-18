import React, {useEffect, useState} from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import DummyData from './SearchSidebarData.js'
import {AiOutlineClose} from 'react-icons/ai'
import dummyData from './SearchSidebarData.js'

function SearchSidebar({sidebarOpen}) {

  const [data, setData] = useState(dummyData)
  const [input, setInput] = useState("");
  const [results, setResults] = useState([dummyData])

  const handleRemove = (id) => {
    // Use setResults to update the results state
    setResults((prevResults) => prevResults.filter((item) => item.id !== id));
  
    // Also, if you want to remove the item from the data state (dummyData), you can do it like this:
    // const updatedData = data.filter((item) => item.id !== id);
    // setData(updatedData);
  };

const fetchData = (value) => {
  const results = dummyData.filter((user) => {
    return (
      value &&
      user &&
      user.profileName &&
      user.profileName.toLowerCase().includes(value.toLowerCase())
    );
  });

  if(value == '' || value == null){
    setResults(dummyData.slice(0,8))
  }else{
  setResults(results);
  }

  console.log(results)
};

useEffect(() => {
  if(input == ''){
    setResults([])
  }
},[])

const handleChange = (value) => {
  console.log(value)
  setInput(value);
  fetchData(value);
};

const clearAll = () => {
  setResults([])
}

const clearSearch = () => {
  setInput("")
 if(input != ''){
  setResults(dummyData.slice(0,8))
 }
}


  return (
    <div className='searchsidebar-container' style={sidebarOpen ? { left: "7rem" } : {}}>
      <div className='search_upper-section'>
        <h3>Search</h3>
         <div className='search-bar'>
         <input
            placeholder="Search"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
            <span className='search-icon' onClick={clearSearch}><AiOutlineCloseCircle/></span>
          </div>
      </div>

      <div className='search_bottom-section'>
          <div className='search_history-buttons'>
            <h4>Recent</h4>
            <p onClick={clearAll}>Clear All</p>
          </div>

        {results.map(({username, profileName, imageUrl, id}) => {
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