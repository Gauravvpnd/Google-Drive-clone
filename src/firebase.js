import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyD1107ekm8LF7KdNQnxTD-OtqbX5SgtB6w",
    authDomain: "drive-clone-8f592.firebaseapp.com",
    projectId: "drive-clone-8f592",
    storageBucket: "drive-clone-8f592.appspot.com",
    messagingSenderId: "936109472318",
    appId: "1:936109472318:web:6f164db77730868eec2f6f"
  };

const firebaseApp = firebase.intializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth  = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, storage, auth, provider}