import firebase from "firebase";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAyxmkzYsKEQl7hCYOH60QvEvS1Sx3bSd8",
  authDomain: "todo-app-567aa.firebaseapp.com",
  databaseURL: "https://todo-app-567aa.firebaseio.com",
  storageBucket: "todo-app-567aa.appspot.com",
  messagingSenderId: "1000834374056"
};
firebase.initializeApp(config);


const firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0'
  },
  isRunning: true,
  user: {
    name: 'Carlos',
    age: 28
  }
});

let notesRef = firebaseRef.child('notes');

let newNoteRef = notesRef.push();
newNoteRef.set({
  text: 'Walk the dog'
});
