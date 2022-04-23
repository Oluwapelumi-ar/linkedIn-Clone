import { BusinessCenter, Chat, Home, Notifications, Search, SupervisorAccount } from '@mui/icons-material';
import React from 'react';
import './Header.css'
import HeaderOption from './HeaderOption';


function Header() {
  return (
    <div className='header'>
      <div className="header__left">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo" />
        <div className="header__search">
          <Search />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={Home} title='Home'/>
        <HeaderOption Icon={SupervisorAccount} title='My Network' />
        <HeaderOption Icon={BusinessCenter} title='My Jobs' />
        <HeaderOption Icon={Chat} title='Messaging' />
        <HeaderOption Icon={Notifications} title='Notifications' />
        <HeaderOption avatar='https://media-exp1.licdn.com/dms/image/C4D03AQEKkThJ8EF6IA/profile-displayphoto-shrink_100_100/0/1614709228144?e=1655942400&v=beta&t=6yOSjUJ7nKPhaqtKTe-XtCwNveM9BnF8fZ8CM1F1wS4' title='Me'/>
      </div>
    </div>
  )
}

export default Header