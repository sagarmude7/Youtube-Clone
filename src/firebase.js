import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxOcZHZdzKRi6TG6C8zSFIjdYjfsi9K_g",
  authDomain: "osc-project-sadtube.firebaseapp.com",
  projectId: "osc-project-sadtube",
  storageBucket: "osc-project-sadtube.appspot.com",
  messagingSenderId: "129967381680",
  appId: "1:129967381680:web:8f981192712f1d1d296f75",
  measurementId: "G-QJL1S7G521",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
