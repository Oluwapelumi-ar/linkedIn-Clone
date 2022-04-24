import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBoXtK62OpQw05mPNkuV2ZO2IludrKpOrk",
  authDomain: "linkedin-clone-cb85a.firebaseapp.com",
  projectId: "linkedin-clone-cb85a",
  storageBucket: "linkedin-clone-cb85a.appspot.com",
  messagingSenderId: "457618105821",
  appId: "1:457618105821:web:9a6556cc7ad5625e348234",
  measurementId: "G-6XJ9YHRXK3"
};

const  firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};