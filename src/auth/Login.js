import React, { useState } from "react";
import "./Login.css";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      return alert('Please Enter a Full Name')
    }

    auth.createUserWithEmailAndPassword(email,password)
      .then((userAuth) => {
        userAuth.user.updateProfile({
          displayName: name,
          photoURL:profilePic
        })
        .then(() => {
          dispatch(login({
            email:userAuth.user.email,
            uid:userAuth.user.uid,
            displayName:name,
            photoURL:profilePic
          }))
        })
      }).catch(error => alert(error.messagr))
  };

  const loginToApp = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then(userAuth => {
      dispatch(login({
        email:userAuth.user.email,
        uid:userAuth.user.uid,
        displayName:userAuth.user.displayName,
        profileUrl:userAuth.user.photoURL
      }))
    }).catch(error => alert(error))
  };

  return (
    <div className="login">
      <img
        src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011-2019.png"
        alt="linkedIn Logo"
      />

      <form>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Full Name (required if registered"
        />
        <input
          value={profilePic}
          onChange={(event) => setProfilePic(event.target.value)}
          type="text"
          placeholder="Profile pic URL (optional"
        />
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="Password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a Member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
