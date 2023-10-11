import React from 'react'

function SearchSidebar({sidebarOpen}) {
  return (
    <div className='searchsidebar-container' style={sidebarOpen ? { left: "7rem" } : {}}>
        <h2>Notification</h2>
    </div>
  )
}

export default SearchSidebar