import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDnzHRzbw76Q2FStlEMbxuE9HE1nauo5Gs",
    authDomain: "social-media-9358d.firebaseapp.com",
    projectId: "social-media-9358d",
    storageBucket: "social-media-9358d.appspot.com",
    messagingSenderId: "8323647202",
    appId: "1:8323647202:web:6d3d3d54477f2bf40dc0bb",
    measurementId: "G-HWYC66KJ29"
  };


  export const firebaseApp = initializeApp(firebaseConfig);

  export const db = getFirestore(firebaseApp);
  export const auth = getAuth(firebaseApp);
  export const storage = getStorage(firebaseApp);

