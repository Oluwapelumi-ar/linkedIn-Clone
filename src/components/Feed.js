import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@mui/icons-material';
import React, { useState } from 'react';
import './Feed.css';
import InputOption from './InputOption';
import Post from './Post';

function Feed() {

  const [posts,setPosts] = useState([]);

  const sendPost = (event) => {
    event.preventDefault();
    console.log(event.target.value)
  }

  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form >
            <input type='text' />
            <button type='submit' onClick={sendPost}>Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={Image} title='Photo' color='#70B5F9'/>
          <InputOption Icon={Subscriptions} title='Video' color='#E7A33E'/>
          <InputOption Icon={EventNote} title='Event' color='#C0CBCD'/>
          <InputOption Icon={CalendarViewDay} title='Write Article' color='#7FC15E'/>
        </div>
      </div>
      {posts.map((post) => {
        <Post />
      })}
      <div className="post">
        <Post  name='Shukrah  Bakare' description='This is a text' message='WOW this work' photoUrl=''/>
      </div>
    </div>
  )
}

export default Feed