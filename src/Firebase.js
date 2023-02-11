import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDnzHRzbw76Q2FStlEMbxuE9HE1nauo5Gs",
    authDomain: "social-media-9358d.firebaseapp.com",
    projectId: "social-media-9358d",
    storageBucket: "social-media-9358d.appspot.com",
    messagingSenderId: "8323647202",
    appId: "1:8323647202:web:6d3d3d54477f2bf40dc0bb",
    measurementId: "G-HWYC66KJ29"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();


  export default db;