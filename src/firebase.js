import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVSflRM4mfVtI36LuW8wBNH_CaFbk5hDU",
  authDomain: "osc-project-sadtube.firebaseapp.com",
  projectId: "osc-project-sadtube",
  storageBucket: "osc-project-sadtube.appspot.com",
  messagingSenderId: "129967381680",
  appId: "1:129967381680:web:8f981192712f1d1d296f75",
  measurementId: "G-QJL1S7G521",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
