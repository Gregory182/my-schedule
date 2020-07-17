import firebase from 'firebase';
import "firebase/firestore"
import "firebase/auth";






var firebaseConfig = {
  apiKey: "AIzaSyCKep_CvQoHg8n9id6A6EmnxSRKQoObxL8",
  authDomain: "my-schedule-898fe.firebaseapp.com",
  databaseURL: "https://my-schedule-898fe.firebaseio.com",
  projectId: "my-schedule-898fe",
  storageBucket: "my-schedule-898fe.appspot.com",
  messagingSenderId: "256593228442",
  appId: "1:256593228442:web:c4cf70de877798473e6523",
  measurementId: "G-9BL9HMYDLZ"
  // useFirebaseForProfile: true,
  // userProfile: 'users'



};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// firebase.firestore().settings({timestampsInSnapshots:true})


// firebase.firestore().settings()
export const firestore = firebase.firestore();
export const auth = firebase.auth;