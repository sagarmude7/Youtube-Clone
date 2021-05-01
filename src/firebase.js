import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCwFw5H9MUsksL19TcVSHpUSk0HlB4Y7ls",
    authDomain: "sadtube-6324f.firebaseapp.com",
    projectId: "sadtube-6324f",
    storageBucket: "sadtube-6324f.appspot.com",
    messagingSenderId: "279840275983",
    appId: "1:279840275983:web:7d7100eb662bebb4942d7a"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase.auth()