import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';





const firebaseConfig = {
    apiKey: "AIzaSyDChwIW9ZqLvG3lzC5zcwiLeOytbkGc4lU",
    authDomain: "todo-web-wd.firebaseapp.com",
    projectId: "todo-web-wd",
    storageBucket: "todo-web-wd.appspot.com",
    messagingSenderId: "133754854867",
    appId: "1:133754854867:web:024a5a7d9a9d108c022326",
    measurementId: "G-WDKQXR69Z4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();


export  default db; 