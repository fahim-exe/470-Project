import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDOsTieFxRY0NQEH-jue6F8iiZLARATouI",
    authDomain: "gamebook-71946.firebaseapp.com",
    projectId: "gamebook-71946",
    storageBucket: "gamebook-71946.appspot.com",
    messagingSenderId: "627206935286",
    appId: "1:627206935286:web:1a9b32afa7ea5c6a3892d7",
    measurementId: "G-FT2BY69KKD"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;