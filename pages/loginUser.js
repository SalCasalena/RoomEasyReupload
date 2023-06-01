import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-analytics.js";
import { getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0H2fvZeKEnYloRnICS64QL82pxMQ4W_I",
  authDomain: "roomez-e1bcc.firebaseapp.com",
  databaseURL: "https://roomez-e1bcc-default-rtdb.firebaseio.com",
  projectId: "roomez-e1bcc",
  storageBucket: "roomez-e1bcc.appspot.com",
  messagingSenderId: "152215663679",
  appId: "1:152215663679:web:b5ae6395743d4734e5748a",
  measurementId: "G-PY28P13N75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
const usersRef = ref(database, 'users');
const newUserRef = push(usersRef);

const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", (e) => {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  attemptLogin(email, password);

});

const attemptLogin = async (email, password) => {
  const auth = getAuth();

  try {
    const userCredential = signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    alert('sign in successful')
    window.location.assign("../dist/index.html");
  } catch (error) {
    alert('sign in unsuccessful')
  }
};