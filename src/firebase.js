import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA399nhrVV1Nly1FptJQ97BOvZqaXvQt6A",
  authDomain: "clone-43ac7.firebaseapp.com",
  projectId: "clone-43ac7",
  storageBucket: "clone-43ac7.appspot.com",
  messagingSenderId: "301448631647",
  appId: "1:301448631647:web:336598062623ef642992ea",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
