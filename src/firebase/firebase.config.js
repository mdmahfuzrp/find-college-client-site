// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmhIgboGGAfmjjb2kvf9ViszKZnK0cPDI",
  authDomain: "find-college-d1d13.firebaseapp.com",
  projectId: "find-college-d1d13",
  storageBucket: "find-college-d1d13.appspot.com",
  messagingSenderId: "261994591586",
  appId: "1:261994591586:web:750901c89a1506d13be83b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app