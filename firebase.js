import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSmLoaXGzBLWjQjmg9M6X91FB_dZIes_w",
  authDomain: "krishna-plumbing-services.firebaseapp.com",
  projectId: "krishna-plumbing-services",
  storageBucket: "krishna-plumbing-services.firebasestorage.app",
  messagingSenderId: "44275227504",
  appId: "1:44275227504:web:a08f90f5a1b9e2f3c90db5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { app, auth, provider, db };
