import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVSflRM4mfVtI36LuW8wBNH_CaFbk5hDU",
  authDomain: "osc-project-sadtube.firebaseapp.com",
  projectId: "osc-project-sadtube",
  storageBucket: "osc-project-sadtube.appspot.com",
  messagingSenderId: "1080097038787",
  appId: "1:1080097038787:web:8f981192712f1d1d296f75",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
