// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import{getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

const firebaseConfig = {
   apiKey: "AIzaSyCbaJX0rQyXZGakjb1TpzQburaKGjeudh8",
   authDomain: "login-form-dc4c8.firebaseapp.com",
   projectId: "login-form-dc4c8",
   storageBucket: "login-form-dc4c8.appspot.com",
   messagingSenderId: "21523051373",
   appId: "1:21523051373:web:da9ad38a05d274a3f36064",
   measurementId: "G-GWRHMTQ4BX",
};



let reset = document.querySelector("#reset")
reset.addEventListener("click",function(){

let email = document.querySelector("#resetEmail")
    
const auth = getAuth();
sendPasswordResetEmail(auth, email.value)
  .then(() => {
    console.log("Reset Password Link send")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
})