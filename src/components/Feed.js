import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import './Feed.css';
import InputOption from './InputOption';
import Post from './Post';
import firebase from 'firebase/compat/app'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
  const [input, setInput] = useState([]);
  const [posts,setPosts] = useState([]);

  const user = useSelector(selectUser)
  
  useEffect(() => {
    db.collection('posts').orderBy('timeStamp','desc').onSnapshot((snapshot) => 
      setPosts(
        snapshot.docs.map((doc) => ({
          id:doc.id,
          data:doc.data()
        }))
        
      ),
    );
  }, [])

  const sendPost = (event) => {
    event.preventDefault();
    db.collection('posts').add({
      name:user.displayName,
      description:user.email,
      message: input,
      photoUrl:user.photoUrl || '',
      timeStamp:firebase.firestore.FieldValue.serverTimestamp()
    });

    setInput('')
  }

  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form >
            <input type='text' value={input} onChange={event => setInput(event.target.value) }/>
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
      
      <FlipMove>
        {posts.map(({id,data:{name,description, message,photoUrl}}) => {
        return(
          <div className="post">
            <Post 
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
          </div>
          
        )
        
      })}
      </FlipMove>
      
      
    </div>
  )
}

export default Feed;