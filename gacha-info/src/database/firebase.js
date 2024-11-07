// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDcKEyereM79fai-yXitup63xYtNAzNSc",
  authDomain: "reverse-1999.firebaseapp.com",
  projectId: "reverse-1999",
  storageBucket: "reverse-1999.firebasestorage.app",
  messagingSenderId: "351907702027",
  appId: "1:351907702027:web:cf7f0fba48fbe598832e0e",
  measurementId: "G-QWZ36WXWWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);