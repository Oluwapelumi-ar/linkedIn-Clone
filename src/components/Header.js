import { BusinessCenter, Chat, Home, Notifications, Search, SupervisorAccount } from '@mui/icons-material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Header.css';
import {  logout, selectUser } from '../features/userSlice';
import HeaderOption from './HeaderOption';
import { auth } from '../firebase';



function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut()
  }
  return (
    <div className='header'>
      <div className="header__left">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo" />
        <div className="header__search">
          <Search />
          <input type="text" placeholder='search'/>
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={Home} title='Home'/>
        <HeaderOption Icon={SupervisorAccount} title='My Network' />
        <HeaderOption Icon={BusinessCenter} title='My Jobs' />
        <HeaderOption Icon={Chat} title='Messaging' />
        <HeaderOption Icon={Notifications} title='Notifications' />
        <HeaderOption  avatar={true} title='Me' onClick={logoutOfApp} />
      </div>
    </div>
  )
}

export default Header