import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCawT_Vnu6vic3HyDIGTUVTiehaxuah6Oo',
  authDomain: 'challange-1cb0c.firebaseapp.com',
  projectId: 'challange-1cb0c',
  storageBucket: 'challange-1cb0c.appspot.com',
  messagingSenderId: '361793571543',
  appId: '1:361793571543:web:1507956dcff4fa8c4ffe92',
  measurementId: 'G-W3G6Z03BHD',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
