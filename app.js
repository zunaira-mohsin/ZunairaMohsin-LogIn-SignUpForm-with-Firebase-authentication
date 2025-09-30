
import { 
  auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,provider,signInWithPopup
} from "./firebase.js";

// 🔹 Check if user logged in or not
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("✅ Logged in as:", user.email);
  } else {
    console.log("No user logged in");
  }
});

// 🔹 Sign Up 
let email = document.getElementById("email");
let password = document.getElementById("password");

let createUser = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((res) => {
      alert("✅ Account Created Successfully!");
    })
    .catch((err) => alert(err.message));
};

let signUpBtn = document.getElementById("signUpBtn");
if (signUpBtn) signUpBtn.addEventListener("click", createUser);

// 🔹 Login
let logInEmail = document.getElementById("logInEmail");
let logInPassword = document.getElementById("logInPassword");

let login = () => {
  signInWithEmailAndPassword(auth, logInEmail.value, logInPassword.value)
    .then((userCredential) => {
      alert(" User LogIn " );
      window.location.href = "student.html";
    })
    .catch((error) => alert("❌ " + error.message));
};

let logInBtn = document.getElementById("logInBtn");
if (logInBtn) logInBtn.addEventListener("click", login);

// 🔹 Google Login
let loginWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      alert(" LogIn with Google Successfull: " );
      window.location.href = "student.html";
    })
    .catch((error) => {
      alert("❌ " + error.message);
    });
};

let googleBtn = document.getElementById("googleBtn");
if (googleBtn) googleBtn.addEventListener("click", loginWithGoogle);
