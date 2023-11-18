import React from 'react'

function SearchSidebar({sidebarOpen}) {
  return (
    <div className='searchsidebar-container notify-sidebar' style={sidebarOpen ? { left: "6rem" } : {}}>
        <h2>Notification</h2>
    </div>
  )
}

export default SearchSidebar