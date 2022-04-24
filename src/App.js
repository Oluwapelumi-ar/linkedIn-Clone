import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import SideBar from './components/SideBar'
import { login, logout, selectUser } from './features/userSlice';
import Login from './auth/Login';
import { auth } from './firebase';
import Widget from './components/Widget';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName,
          photoUrl:userAuth.photoUrl
        }))
      }else {
        dispatch(logout())
      }
    })
  },[])

  return (
    <div className="app">
      <Header />

      {!user ? (<Login />): (
        <div className="app__body">
        <SideBar />
        <Feed />
        <Widget />
      </div>
      )}

      
    </div>
  );
}

export default App;
