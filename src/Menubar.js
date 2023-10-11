import React from 'react'
import {FiSettings} from 'react-icons/fi'
import {PiClockCountdown} from 'react-icons/pi'
import {FaRegBookmark} from 'react-icons/fa6'
import {GoMoon} from 'react-icons/go'
import {TbMessageReport} from 'react-icons/tb'



function Menubar() {
   
  return (
    <div className='menubar-container'>
        <ul className='menubar-items'>
            <li className='menubar-links'>
                <a className='flex'>
                    <div className='menubar-icon'><FiSettings/></div>
                    <h4>settings</h4>
                </a>
            </li>
            <li className='menubar-links'>
                <a className='flex'>
                <div className='menubar-icon'><PiClockCountdown/></div>
                    <h4>Your Activity</h4>
                </a>
            </li>
            <li className='menubar-links'>
                <a className='flex'>
                <div className='menubar-icon'><FaRegBookmark/></div>
                    <h4>Saved</h4>
                </a>
            </li>
            <li className='menubar-links'>
                <a className='flex'>
                <div className='menubar-icon'><GoMoon/></div>
                    <h4>Switch Apperance</h4>
                </a>
            </li>
            <li className='menubar-links'>
                <a className='flex'>
                <div className='menubar-icon'><TbMessageReport/></div>
                    <h4>Report a Problem</h4>
                </a>
            </li>
        </ul>

        <h4 className='switch-acc'>Switch Accounts</h4>
        <h4 className='log-out'>Log Out</h4>
    </div>
  )
}

export default Menubar