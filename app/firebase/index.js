import firebase from "firebase";

try {
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyAyxmkzYsKEQl7hCYOH60QvEvS1Sx3bSd8",
    authDomain: "todo-app-567aa.firebaseapp.com",
    databaseURL: "https://todo-app-567aa.firebaseio.com",
    storageBucket: "todo-app-567aa.appspot.com",
    messagingSenderId: "1000834374056"
  };
  firebase.initializeApp(config);
} catch (e) {

}


export const firebaseRef = firebase.database().ref();

export default firebase;