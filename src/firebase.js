import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import "firebase/firestore"



const firebaseConfig = {
    apiKey: "AIzaSyA9Fk65IfMEN4kL008XdNsqt_f6E6wC7LQ",
    authDomain: "react-instagram-clone-b9116.firebaseapp.com",
    projectId: "react-instagram-clone-b9116",
    storageBucket: "react-instagram-clone-b9116.appspot.com",
    messagingSenderId: "682400788218",
    appId: "1:682400788218:web:fa562ac9fa75aac08de343",
    measurementId: "G-PTVSZ76V89"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db= firebase.firestore();
const auth=firebase.auth();
const storage=firebase.storage();

export default firebase;