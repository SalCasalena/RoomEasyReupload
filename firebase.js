// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-analytics.js";
import { getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";
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
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth();
const signUpButton = document.getElementById("signUp");
const usersRef = ref(database, 'users');
const newUserRef = push(usersRef);
signUpButton.addEventListener("click", (e) => {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;
createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        push(usersRef, {
            username,
            email,
          });
        window.location.assign("pages/index.html");
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        // ..
    });
});

function writeUserData(username, email) {
    usersRef.set({
      username: username,
      email: email
    });
  }
