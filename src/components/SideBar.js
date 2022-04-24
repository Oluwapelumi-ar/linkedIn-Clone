import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import './SideBar.css';
import {  selectUser } from '../features/userSlice';



function SideBar() {
  const user = useSelector(selectUser)

  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
    )
    
  }
  
  return (
    
    <div className='sidebar'>
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1621091211034-53136cc1eb32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <Avatar className='sidebar__avatar' src={user.photoUrl}>{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className='sidebar__statNumber'>2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on Post</p>
          <p className='sidebar__statNumber'>2,543</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        
        {recentItem('React')}
        {recentItem('React')}
        {recentItem('React')}
        {recentItem('React')}
        
      </div>
    </div>
  )
}

export default SideBar